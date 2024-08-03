import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate("");

    const onSignUp = useCallback(async () => {
        if (loading || !name || !email || !password) return;

        try {
            setLoading(true);

            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(credentials.user, { displayName: name });

            navigate("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }, [email, loading, name, password, navigate]);

    const onLogin = useCallback(async () => {
        if (loading || !email || !password) return;

        try {
            setLoading(true);

            await signInWithEmailAndPassword(auth, email, password);

            navigate("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }, [email, loading, password, navigate]);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        setError("");
    };

    return { name, email, password, onChange, onSubmit, error, onLogin, onSignUp };
};

export default useAuth;
