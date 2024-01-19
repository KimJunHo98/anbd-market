import { useMemo, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";

const useUpload = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [desc, setDesc] = useState("");

    const onFileChange = (e) => {
        const { files } = e.target;

        if (files && files.length <= 10) {
            setFile(files);
        } else if (files.length > 10) {
            alert("최대 10개의 이미지만 선택할 수 있습니다.");
            setFile(null);
        }
    };

    const onChange = useMemo(
        () => (e) => {
            const { name, value } = e.target;

            if (name === "title") {
                setTitle(value);
            } else if (name === "price") {
                setPrice(value.replace(/\D/g, "")); // 숫자만 입력
            } else if (name === "brand") {
                setBrand(value);
            } else if (name === "size") {
                setSize(value);
            } else if (name === "desc") {
                setDesc(value);
            }
        },
        []
    );

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!title || !price || !brand || !size || !desc || loading) return;

        const user = auth.currentUser; // 현재 유저 확인

        if (!user) return;

        try {
            setLoading((prevLoading) => !prevLoading);

            await addDoc(collection(db, "product"), {
                title, // 제목
                price, // 가격
                brand, // 브랜드
                size, // 사이즈
                desc, // 설명
                createdAt: Date.now(), // 작성 시간
                username: user.displayName, // 유저이름
                useId: user.uid, // 유저 아이디(삭제 권한)
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading((prevLoading) => !prevLoading);
        }
    };

    return { file, title, price, brand, size, desc, onFileChange, onChange, onSubmit };
};

export default useUpload;
