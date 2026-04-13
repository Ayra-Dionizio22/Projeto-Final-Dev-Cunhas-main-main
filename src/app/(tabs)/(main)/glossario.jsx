import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { glossario } from "../../../lib/glossario";

export default function Explorer() {
  // const categorias = ["Todos",
  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "NodeJS",
  //   "ReactJS",
  //   "API",
  //   "CRUD",
  //   "VsCode",
  //   "GitHub",
  //   "Git",
  //   "Terminal",
  //   "NPM",
  //   "Vite",
  //   "Objeto",
  //   "Array",
  //   "Loop for",
  //   "Arrow Function",
  //   "Figma",
  //   "IDE",
  //   "TypeScript",
  //   "Framework",
  //   "Biblioteca",
  //   "Front-end",
  //   "Back-end",
  //   "Banco de Dados",
  //   "Deploy"]



  const [busca, setBusca] = useState('');
  

  const moviesFiltered = glossario

    .filter((glossario) => glossario.titulo.toLowerCase().includes(busca.toLowerCase()))
    // .filter((filme) => categoria === "Todos" || filme.genero.some((g) => g.texto === categoria))


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Encontrar significados...</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="API..."
          placeholderTextColor={"#f3f0f0d7"}
          value={busca}
          onChangeText={setBusca}
        />
        <Ionicons style={{ position: "absolute", left: 24 }} name="search" size={24} color="white" />
      </View>

      {/* <ScrollView
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
      </ScrollView> */}

      <ScrollView
      style={{ paddingLeft: 20 }}
      >

        {moviesFiltered.map((glossario, index) => (
          <TouchableOpacity
            key={glossario.id + index}
            style={{ ...styles.card }}
            onPress={() => router.push("/filme/" + glossario.id)}
          >
            {/* <Image
              source={{ uri: glossario.capa }}
              style={styles.image}
            /> */}
            <View style={{ flexDirection: "row", gap: 25 }}>
              <Text style={styles.textCard}>{glossario.titulo}</Text>
              {/* <Text style={styles.anoLancamento}>{filme.data_Lancameto}</Text> */}
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
    backgroundColor: "#fff",
    gap: 15,
    paddingTop: 16,
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "medium",
    color: "#49328B",
    marginHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  input: {
    flex: 1,
    backgroundColor: "#9a88a7",
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 40,
    color: "#fff"
  },
  text: {
    color: "#fff",
    fontSize: 16
  },
  card: {
    width: 370,
    gap: 8,
    paddingBottom: 15,
    backgroundColor: "#decae1", 
    borderColor: "#7d2b88",
    borderRadius: 12,           
    padding: 12,              
    marginBottom: 8,
    borderWidth: 2       
  },
  textCard: {
    color: "#7d2b88",
    width: "80%",
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