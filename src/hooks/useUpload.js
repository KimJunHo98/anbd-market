import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { useStateContext } from "../context/useStateContext";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

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
        const {
            target: { files },
        } = e;
        const theFile = files[0];
        const reader = new FileReader();

        reader.readAsDataURL(theFile);
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;

            setFile(result);
        };
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

        let uploadedFileUrl = "";

        if (!file || !useObj || !title || !price || !category || !size || !desc || loading) return;

        try {
            setLoading(true);

            let newDocId;

            if (file !== "") {
                const fileRef = ref(storage, `${useObj.uid}`);

                await uploadString(fileRef, file, "data_url");
                await getDownloadURL(fileRef)
                    .then((url) => {
                        uploadedFileUrl = url;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

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
                imageUrl: uploadedFileUrl,
            });

            newDocId = docRef.id;

            await setDoc(doc(collection(firestore, "product"), newDocId), { id: newDocId }, { merge: true }); // id값 추가

            setFile("");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }

        navigate("/");
    };

    const handleImageDeleteCLick = () => {
        setFile(null);
    };

    return { file, title, price, brand, size, desc, category, onFileChange, onChange, onSubmit, handleImageDeleteCLick };
};

export default useUpload;
