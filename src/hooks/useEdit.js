import { useState } from "react";
import useFetchProducts from "./useFetchProducts";

import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const useEdit = () => {
    const { product } = useFetchProducts();
    const [showBtns, setShowBtns] = useState(false);
    const [toggleEditing, setToggleEditing] = useState(false);
    const [newText, setNewText] = useState(product.desc);

    // 버튼 클릭함수
    const handleBtnClick = () => {
        setShowBtns((prevShow) => !prevShow);
    };
    const handleEditBtnClick = () => {
        setToggleEditing(true);
        setShowBtns(true);
        setNewText(product.desc);
    };
    const handleCancelBtnClick = () => {
        setToggleEditing(false);
    };

    // 텍스트 수정 함수
    const onChange = (e) => {
        setNewText(e.target.value);
    };
    const onSubmit = async (e) => {
        e.preventDefault();

        // updateDoc 메소드를 사용해 서버에 업데이트 요청
        const updateTextRef = doc(firestore, "product", product.id);
        await updateDoc(updateTextRef, {
            desc: newText,
        });

        setToggleEditing(false);
    };

    return {
        showBtns,
        setShowBtns,
        toggleEditing,
        setToggleEditing,
        newText,
        setNewText,
        handleBtnClick,
        handleEditBtnClick,
        handleCancelBtnClick,
        onChange,
        onSubmit,
    };
};

export default useEdit;
