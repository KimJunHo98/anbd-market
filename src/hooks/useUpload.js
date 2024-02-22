import { useState } from "react";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { useStateContext } from "../context/useStateContext";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { subCategoryList } from "../constant";

const useUpload = () => {
    const { useObj } = useStateContext();
    const [loading, setLoading] = useState(false);
    const [fileUrls, setFileUrls] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const navigate = useNavigate("");

    const onFileChange = async (e) => {
        const {
            target: { files },
        } = e;

        if (files) {
            const fileArray = Array.from(files);
            const newUrls = [];
            const filesLength = fileArray.length > 10 ? 10 : fileArray.length;
    
            for (let i = 0; i < filesLength; i++) {
                const fileReader = new FileReader();
                const file = fileArray[i];
    
                fileReader.onload = (e) => {
                    const {
                        currentTarget: { result },
                    } = e;
                    newUrls.push(result);
    
                    if (newUrls.length === filesLength) {
                        setFileUrls([...newUrls]);
                    }
                };
                fileReader.readAsDataURL(file);
            }
        }
    };

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "title") {
            setTitle(value);
        } else if (name === "price") {
            setPrice(value.replace(/\D/g, "")); // 숫자만 입력
        } else if (name === "brand") {
            setBrand(value);
        } else if (name === "category") {
            setCategory(value);
        } else if (name === "subCategory") {
            setSubCategory(value);
        } else if (name === "size") {
            setSize(value);
        } else if (name === "desc") {
            setDesc(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!fileUrls || !useObj || !title || !price || !category || !subCategory || !size || !desc || loading) return;

        try {
            setLoading(true);

            const imagesArray = [];
            let newDocId;

            // subCategoryList에서 선택한 value에 대응하는 text 찾기
            const SubCategoryText = subCategoryList.find((item) => item.value === subCategory)?.text || "";

            const docRef = await addDoc(collection(firestore, "product"), {
                title: title,
                price: price,
                brand: brand,
                size: size,
                desc: desc,
                category: category,
                subCategory: subCategory,
                subCategoryText: SubCategoryText,
                createdAt: Date.now(),
                username: useObj.displayName,
                useId: useObj.uid,
            });

            newDocId = docRef.id;

            await fileUrls.map(async (image, i) => {
                const fileRef = ref(storage, `product/${useObj.uid}/${newDocId}/${i}`);

                uploadString(fileRef, image, "data_url").then(async (e) => {
                    const downloadURL = await getDownloadURL(e.ref);
                    imagesArray.push(downloadURL);

                    await updateDoc(doc(firestore, "product", newDocId), { imageUrl: imagesArray });
                });
            });

            await setDoc(doc(collection(firestore, "product"), newDocId), { id: newDocId }, { merge: true }); // id값 추가

            setFileUrls("");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }

        navigate("/");
    };

    const handleImageDeleteCLick = () => {
        setFileUrls(null);
    };

    return { fileUrls, title, price, brand, size, desc, category, onFileChange, onChange, onSubmit, handleImageDeleteCLick };
};

export default useUpload;
