import { createContext, PropsWithChildren, useContext, useState } from "react";

const AuthContext = createContext({
    user: false,
    signIn: () => { },
    signOut: () => { },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState(false);

    const signIn = () => {
        setUser(true);
    }

    const signOut = () => {
        setUser(false);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}