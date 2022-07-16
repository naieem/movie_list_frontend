import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../services/auth.service";
import { useDispatch } from "react-redux";
import { setLoggedInUserEmail } from "../reducers/authReducer";

const RequireAuth = () => {
    const [userAuth, setuserAuth] = useState({})
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const loggedInUser = await authService.getLoggedInUserInfo()
                setuserAuth(loggedInUser)
                dispatch(setLoggedInUserEmail(loggedInUser.result.email));
            } catch (error) {
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {userAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}
        </>
    );
}

export default RequireAuth;