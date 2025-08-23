import { Slot } from "expo-router";

export default function RootLayout() {
    console.log('Root Layout')
    // return (
    //     <Stack>
    //         <Stack.Screen name="index" options={{ headerShown: false }} />
    //     </Stack>
    // )

    return <Slot />
}