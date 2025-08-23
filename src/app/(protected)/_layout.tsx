import { Slot } from "expo-router";

export default function ProtectedLayout() {
    console.log('Protected Layout')
    // return (
    //     <Stack>
    //         <Stack.Screen name="index" options={{ headerShown: false }} />
    //     </Stack>
    // )

    return <Slot />
}