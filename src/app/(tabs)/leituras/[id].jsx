

// > (tabs) > filme > [id].jsx //

import { useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { filmes } from '../../lib/filmes';



export default function Filmes() {
    const { id } = useLocalSearchParams();
    const filme = filmes.find(filme => filme.id === Number(id));

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  

    return (
        <ScrollView style={{ backgroundColor: "#15141F" }}>
            
            <YoutubePlayer
        height={300}
        play={playing}
        videoId={"CI78kbOumTU"}
        onChangeState={onStateChange}
      />
     

    

            <View style={styles.content}>
                <Text style={styles.h1}>{filme.titulo}</Text>

                {/* <View style={styles.linha}> */}
                    {/* <AntDesign name="clock-circle" size={24} color="#BCBCBC" />
                    <Text style={styles.texto}>{filme.duracao} minutos</Text> */}

                    {/* <AntDesign name="star" size={24} color="#BCBCBC" style={{ marginLeft: 24 }} />
                    <Text style={styles.texto}>{filme.avaliacao} (IMDb)</Text> */}
                {/* </View> */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <View style={styles.coluna}> */}
                        {/* <Text style={styles.h2}>Data de lançamento</Text>
                        <Text style={styles.texto}>{new Date(filme.data_Lancameto).toLocaleDateString()}</Text> */}
                    {/* </View> */}

                    <View style={styles.coluna}>
                        {/* <Text style={styles.h2}>Tags</Text> */}
                        <View style={styles.linha}>
                            {filme.genero.map((genero) => (
                                <Text key={genero.id + genero.texto} style={styles.badge}>
                                    {genero.texto}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.coluna}>
                    <Text style={styles.h2}>Sinopse</Text>
                    <Text style={styles.texto}>{filme.sinopse}</Text>
                </View>


                <View style={styles.coluna}>
                    <Text style={styles.h2}>Créditos</Text>
                    <Text style={styles.texto}>{filme.creditos}</Text>
                </View>

                <View>
                    <Text style={styles.h2}>Filmes relacionados</Text>

                    <ScrollView horizontal>
                        {filmes
                            .filter(v => v.id !== filme.id)
                            // .filter((v) =>
                            //     v.genero.some(
                            //         g => filme.genero.some(h => h.id === g.id)
                            //     )
                            // )
                            .map((filme, index) => (
                                <View key={filme.titulo + index} style={{ width: 164 }}>
                                    <Image
                                        source={{ uri: filme.capa }}
                                        style={styles.imagem}
                                    />
                                    <View style={styles.linha}>
                                        <Text style={styles.filme_titulo}>{filme.titulo}</Text>
                                        <Text style={styles.filme_ano}>{new Date(filme.data_Lancameto).getFullYear()}</Text>
                                    </View>

                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: { padding: 20, gap: 10 },

    h1: { color: "white", fontSize: 24 },

    h2: { color: "white", fontSize: 18 },

    texto: { color: "#BCBCBC", fontSize: 12 },

    linha: { flexDirection: "row", gap: 4, alignItems: "center" },

    capa: {
        width: "100%",
        height: 310,
    },
    badge: {
        backgroundColor: "#faf0ca0c",
        color: "white",
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ffffff3c",
        fontSize: 12
    },

    coluna: {
        gap: 2
    },

    imagem: {
        width: 150,
        height: 114,
        borderRadius: 16,
        marginVertical: 4,
    },

    filme_titulo: { color: "white", fontSize: 12, width: "70%" },
    filme_ano: { color: "#BCBCBC", fontSize: 12, marginLeft: 6}
});