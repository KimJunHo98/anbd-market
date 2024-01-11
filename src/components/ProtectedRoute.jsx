import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
    const user = auth.currentUser;
    const navigate = useNavigate();

    if(user === null){
        return navigate("/login");
    }
    console.log(user);

    return children;
};

export default ProtectedRoute;
