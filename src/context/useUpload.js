import { useState } from "react";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { useStateContext } from "./useStateContext";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const useUpload = () => {
    const { useObj } = useStateContext();
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const onFileChange = (e) => {
        const { files } = e.target;

        if (files && files.length <= 10) {
            setFile(files);
        } else if (files.length > 10) {
            alert("최대 10개의 이미지만 선택할 수 있습니다.");
            setFile(null);
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
        } else if (name === "size") {
            setSize(value);
        } else if (name === "desc") {
            setDesc(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        let url = "";

        if (!file || !useObj || !title || !price || !category || !size || !desc || loading) return;

        try {
            setLoading(true);

            const docRef = await addDoc(collection(firestore, "product"), {
                title: title,
                price: price,
                brand: brand,
                size: size,
                desc: desc,
                category: category,
                createdAt: Date.now(),
                username: useObj.displayName,
                useId: useObj.uid,
            });

            const newDocId = docRef.id;
            await setDoc(doc(collection(firestore, "product"), newDocId), { id: newDocId }, { merge: true }); // id값 추가

            if (file !== "") {
                try {
                    const fileRef = ref(storage, `product/${useObj.uid}/${newDocId}`);
                    await uploadBytes(fileRef, file); // 파일 저장 위치
                    url = await getDownloadURL(fileRef); // 파일 url 반환

                    await updateDoc(doc(collection(firestore, "product"), newDocId), {
                        imageUrl: url,
                    });
                } catch (err) {
                    console.error(err);
                }
            }

            setFile("");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }

        navigate("/");
    };

    return { file, title, price, brand, size, desc, category, onFileChange, onChange, onSubmit };
};

export default useUpload;
