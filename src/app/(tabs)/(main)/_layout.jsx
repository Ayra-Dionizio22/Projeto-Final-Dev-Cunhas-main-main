import { Fontisto } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from "expo-router";



export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
                    title: "Home",
                    headerShown: false,
                
                }}
            />
            <Tabs.Screen
                name="videoaulas"
                options={{
                    tabBarIcon: ({ color, size }) => <Fontisto name="play-list" size={size} color={color} />,
                    title: "Videoaulas",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="explorer"
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="book" size={size} color={color} />,
                    title: "Leituras",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="glossario"
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="book-open" size={size} color={color} />,
                    title: "Glossário",
                    headerShown: false
                }}
            />
        </Tabs>
    )
}