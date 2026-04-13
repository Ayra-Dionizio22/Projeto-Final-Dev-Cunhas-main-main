
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { filmes } from "../../../lib/filmes";
import { styles } from "../../../styles/home";


export default function App() {
    const banner = 'https://i.ibb.co/spGxQw44/Apps-programa-o-20260410-111612-0000.jpg';
    const destacado = filmes[0];
    const videos = filmes
    .filter((filme) => filme.tipo === "video");

    const leituras = filmes
    .filter((filme) => filme.tipo === "leitura");

    const perfis = filmes
    .filter((filme) => filme.tipo === "perfil");


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", gap: 6 }}>
                    <Text style={styles.subtitle}>Stream</Text>
                    <Text style={styles.title}>Em todo lugar</Text>
                </View>

                <TouchableOpacity
                    onPress={() => router.push(`/filme/0`)}
                    activeOpacity={0.75}
                >
                    <Image
                        source={{ uri: banner }}
                        style={{
                            width: "100%",
                            height: 200,
                            marginTop: 10,
                            borderRadius: 24,

                        }}
                    />
                </TouchableOpacity>

                <Text style={styles.titleDestaques}>Leituras</Text>

                <ScrollView
                    horizontal
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ gap: 15 }}
                >
                    {leituras.map((filme, index) => (
                        <TouchableOpacity
                        onPress={() => router.push(`/filme/0`)}
                            key={filme.titulo + index}
                            style={{ width: 160 }}
                        >
                            <Image
                                source={{ uri: filme.capa }}
                                style={{
                                    width: 160,
                                    height: 250,
                                    borderRadius: 20,
                                }}
                            />
                            <Text style={{ color: "white", marginTop: 6 }}>
                                {filme.titulo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={styles.titleDestaques}>Videoaulas</Text>

                <ScrollView
                    horizontal
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ gap: 15 }}
                >
                    {videos.map((filme, index) => (
                        <TouchableOpacity
                            key={filme.titulo + index}
                            style={{ width: 220 }}
                        >
                            <Image
                                source={{ uri: filme.capa }}
                                style={{
                                    width: 220,
                                    height: 150,
                                    borderRadius: 20,
                                }}
                            />
                            <Text style={{ color: "white", marginTop: 6 }}>
                                {filme.titulo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={styles.titleDestaques}>Conecte-se</Text>

                <ScrollView
                    horizontal
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ gap: 20 }}
                >
                    {perfis.map((filme, index) => (
                        <TouchableOpacity
                            onPress={() => router.push (filme.link)} 
                            key={filme.titulo + index}
                            style={{ width: 100 }}
                        >
                            <Image
                                source={{ uri: filme.capa }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 1000,
                                }}
                            />
                            <Text style={{ color: "white", textAlign: "center", marginTop: 6 }}>
                                {filme.titulo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </ScrollView>
        </View>
    )
}
