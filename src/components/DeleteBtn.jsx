import React, { useState } from "react";
import { firestore, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

import { Button, Div, Icon } from "../styledComponents";
import { HiDotsHorizontal } from "react-icons/hi";

const DeleteBtn = ({ deleteItem }) => {
    const [showBtns, setShowBtns] = useState(false);

    const handleBtnClick = () => {
        setShowBtns((prevShow) => !prevShow);
    };

    const handleDeleteBtnClick = async () => {
        if (deleteItem) {
            const deleteRef = doc(firestore, "product", deleteItem.id);
            const deletePickedRef = doc(firestore, "picked", deleteItem.id);
            const ok = window.confirm("삭제 하시겠습니까?");

            if (ok) {
                try {
                    // Firestore에서 해당 ID에 해당하는 문서 삭제
                    await deleteDoc(deleteRef);
                    await deleteDoc(deletePickedRef);

                    // Storage에서 이미지 파일들을 순차적으로 삭제
                    if (Array.isArray(deleteItem.imageUrl)) {
                        // 이미지 파일이 배열인 경우 순차적으로 삭제
                        for (const imageUrl of deleteItem.imageUrl) {
                            const deleteImageUrl = ref(storage, imageUrl);
                            await deleteObject(deleteImageUrl);
                        }
                    } else {
                        // deleteItem.imageUrl가 배열이 아닌 경우 그냥 삭제
                        const deleteImageUrl = ref(storage, deleteItem.imageUrl);
                        await deleteObject(deleteImageUrl);
                    }

                    setShowBtns(false);
                } catch (err) {
                    console.error(err);
                }
            }
        }
    };

    return (
        <Div className="option_btn">
            <Icon className="dot_icon" onClick={handleBtnClick}>
                <HiDotsHorizontal />
            </Icon>
            <Div className={`option_btn_box ${showBtns ? "show" : ""}`}>
                <Button className="delete_btn" onClick={handleDeleteBtnClick}>
                    삭제
                </Button>
            </Div>
        </Div>
    );
};

export default DeleteBtn;
