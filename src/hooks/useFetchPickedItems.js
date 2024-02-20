import { useState } from "react";
import { useStateContext } from "../context/useStateContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const useFetchPickedItems = () => {
    const { useObj } = useStateContext();
    const [loading, setLoading] = useState(false);

    const handleAddProduct = async () => {
        try {
            setLoading(true);

            // product collection에 추가하는 거로 수정해야함
            const docRef = await addDoc(collection(firestore, "picked"), {
                picked: "picked",
                username: useObj.displayName,
                useId: useObj.uid,
            });
            const newDocId = docRef.id;

            await setDoc(doc(collection(firestore, "picked"), newDocId), { id: newDocId }, { merge: true });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { handleAddProduct, loading };
};

export default useFetchPickedItems;
