import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

const AuthContext = createContext({
    user: false,
    signIn: () => { },
    signOut: () => { },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const checkAuth = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setUser(true);
        }
        checkAuth();
    }, []);

    const signIn = () => {
        setUser(true);
    }

    const signOut = () => {
        setUser(false);
    }

    if (user === undefined) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
            </View>
        )
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