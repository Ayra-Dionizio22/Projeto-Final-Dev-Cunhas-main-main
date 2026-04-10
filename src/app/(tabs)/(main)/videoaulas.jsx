import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { filmes } from "../../../lib/filmes";

export default function Explorer() {
  const categorias = ["Todos", "Iniciante", "Intermediário", "Avançado", "Design", "Programação", "Linguagem"]

  const [movies, setMovies] = useState(filmes)

  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const moviesFiltered = filmes
    .filter((filme) => filme.tipo === "video")
    .filter((filme) => filme.titulo.toLowerCase().includes(busca.toLowerCase()))
    .filter((filme) => categoria === "Todos" || filme.genero.some((g) => g.texto === categoria))


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Encontrar Videoaulas...</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar vídeos.."
          placeholderTextColor={"#BBB"}
          value={busca}
          onChangeText={setBusca}
        />
        <Ionicons style={{ position: "absolute", left: 24 }} name="search" size={24} color="white" />
      </View>

      <ScrollView
        style={{ marginLeft: 16, marginRight: 16}}
        contentContainerStyle={{ gap: 8 }}
        horizontal
      >
        {categorias.map((valor, index) => (
          <TouchableOpacity
            key={valor + index}
            onPress={() => setCategoria(valor)}
            style={{ height: 26 }}
          >
            <Text
              style={{
                color: categoria === valor ? "#EF2D1A" : "white"
              }}
            >
              {valor}
            </Text>
            {categoria === valor &&
              <View
                style={{
                  backgroundColor: "#EF2D1A",
                  height: 4,
                  borderRadius: 2,
                  width: "50%"
                }}
              ></View>
            }
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
      style={{ paddingLeft: 20 }}
      >

        {moviesFiltered.map((filme, index) => (
          <TouchableOpacity
            key={filme.id + index}
            style={{ ...styles.card }}
            onPress={() => router.push("/filme/" + filme.id)}
          >
            <Image
              source={{ uri: filme.capa }}
              style={styles.image}
            />
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Text style={styles.textCard}>{filme.titulo}</Text>
              <Text style={styles.anoLancamento}>{filme.data_Lancameto}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15141F",
    gap: 15,
    paddingTop: 16,
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "medium",
    color: "#FFF",
    marginHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  input: {
    flex: 1,
    backgroundColor: "#211F30",
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 40,
    color: "white"
  },
  text: {
    color: "#fff",
    fontSize: 16
  },
  card: {
    width: 370,
    gap: 8,
    paddingBottom: 15
  },
  textCard: {
    color: "white",
    width: "70%"
  },
  anoLancamento: {
    color: "gray",
    fontWeight: "600",
  },
  image: {
    width: 370,
    height: 150,
    borderRadius: 16
  }
});