import { Stack } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";

export default function AuthLayout() {
    console.log('Auth Layout')
    const { user } = useAuth();
    if (user) {
        return <Redirect href="/" />
    }
    return (
        <Stack>
            <Stack.Screen name="sign-in" options={{ headerShown: false, title: 'Sign In' }} />
            <Stack.Screen name="sign-up" options={{ headerShown: false, title: 'Sign Up' }} />
        </Stack>
    )

}