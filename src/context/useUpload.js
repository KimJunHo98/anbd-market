import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";
import { useStateContext } from "./useStateContext";
import { useNavigate } from "react-router-dom";

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

        if (!useObj || !title || !price || !category || !brand || !size || !desc || loading) return;

        try {
            setLoading(true);

            await addDoc(collection(firestore, "product"), {
                text: title,
                price: price,
                brand: brand,
                size: size,
                desc: desc,
                category: category,
                createdAt: Date.now(), // 작성 시간
                username: useObj.displayName, // 유저이름
                useId: useObj.uid,
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }

        navigate("/");
    };

    return { file, title, price, brand, size, desc, onFileChange, onChange, onSubmit };
};

export default useUpload;
