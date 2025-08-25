import { Slot } from "expo-router";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function ProtectedLayout() {
    console.log('Protected Layout')
    
    const { isSignedIn } = useAuth();
    if (!isSignedIn) {
        return <Redirect href="/sign-in" />
    }
    return <Slot />
}