import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const useAuth = () => {
    const [isloading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (isloading || name === "" || email === "" || password === "") return; // 이름, 이메일, 비민번호가 비어있으면 함수 종료

        try {
            setIsLoading(true);

            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            await updateProfile(credentials.user, { displayName: name });

            navigate("/");
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }

        setName("");
        setEmail("");
        setPassword("");
    };

    return { name, email, password, onChange, onSubmit, error };
};

export default useAuth;
