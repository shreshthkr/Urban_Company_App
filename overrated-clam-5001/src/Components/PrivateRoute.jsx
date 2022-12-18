import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
    const {isAuth, LoginHandle, LogoutHandle} = useContext(AuthContext);

   if(!isAuth) {
    return <Navigate to="/" />
   }
   return children;
    
}