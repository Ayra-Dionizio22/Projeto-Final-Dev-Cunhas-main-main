

// > (tabs) > filme > [id].jsx //

import { useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { glossario } from "../../../lib/glossarioBanco";



export default function Filmes() {
    const { id } = useLocalSearchParams();
    const filme = glossario.find(glossario => glossario.id === Number(id));

    console.log(filme)

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
        videoId={filme.videoId}
        onChangeState={onStateChange}
      />
     

    

            <View style={styles.content}>
                <Text style={styles.h1}>{filme.titulo}</Text>

              

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                

                    <View style={styles.coluna}>
                     
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
                    <Text style={styles.texto}>{filme.significado}</Text>
                </View>


                {/* <View style={styles.coluna}>
                    <Text style={styles.h2}>Créditos</Text>
                    <Text style={styles.texto}>{filme.creditos}</Text>
                </View> */}

              
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