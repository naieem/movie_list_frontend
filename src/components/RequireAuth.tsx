import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../services/auth.service";

const RequireAuth = () => {
    const [userAuth, setuserAuth] = useState({})
    const location = useLocation();
    useEffect(() => {
        (async () => {
            try {
                const loggedInUser = await authService.getLoggedInUserInfo()
                setuserAuth(loggedInUser)
                
            } catch (error) {
                
            }
        })()
    }, [])

    return (
        <>
            {userAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}
        </>
    );
}

export default RequireAuth;