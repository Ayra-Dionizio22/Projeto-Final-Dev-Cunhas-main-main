import { Stack } from "expo-router";

export default function Layout() {
    return (
            <Stack screenOptions={{}}>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        title: "Tela principal",
                        animation: "slide_from_right",
                        headerShown: false,
                        statusBarStyle: 'dark'
                    }}
                />
                <Stack.Screen
                    name="trailers/[id]"
                    options={{
                        title: "Trailer",
                        headerTintColor: "#000000",
                        animation: "slide_from_right"
                    }}
                />
                <Stack.Screen
                    name="filme/[id]"
                    options={{
                        title: "Filme",
                        headerTintColor: "#FFF",
                        animation: "slide_from_right",
                        headerStyle: {
                            backgroundColor: "#15141F"
                        },
                        statusBarStyle: "light"
                        // headerShown: false
                    }}
                />
            </Stack>
        
    )
}


