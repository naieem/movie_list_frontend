import { createContext, ReactNode, useState } from "react";

const AuthContext = createContext({});
type ChildrenProps = {
    children: ReactNode;
}
export const AuthProvider = ({ children }: ChildrenProps) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;