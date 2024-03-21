import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const withAuth = (Component) =>{
    const Auth = (props) =>{
        const token = localStorage.getItem('token');
        const user = useSelector((store=>store.auth.user));
        const navigate = useNavigate()
        if (!user.loggedIn && !!token){
            return <Navigate to="/signin"/>
        }
        return <Component {...props}/>
    }
    return Auth;    
}