import { Slot } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";

export default function ProtectedLayout() {
    console.log('Protected Layout')
    
    const { user } = useAuth();
    if (!user) {
        return <Redirect href="/sign-in" />
    }
    return <Slot />
}