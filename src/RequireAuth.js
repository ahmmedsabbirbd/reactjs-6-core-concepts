import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./firebase.int";

const RequireAuth = ({ children }) => { 
    const location = useLocation();

    if (!auth?.currentUser?.uid) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
  
    return children;
}

export default RequireAuth;