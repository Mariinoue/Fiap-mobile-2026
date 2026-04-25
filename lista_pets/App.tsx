import { View, Text, StyleSheet, ScrollView } from 'react-native';

const listaPets = [
  { nome: "Totó", raca: "Vira Lata", idade: 4, peso: 9.6, nomeDono: "Nathalia Almeida" },
  { nome: "Rex", raca: "Pastor Alemão", idade: 7, peso: 23.8, nomeDono: "Gabriel" },
  { nome: "Suri", raca: "Lhasa", idade: 9, peso: 7.0, nomeDono: "Antonio" },
  { nome: "Lassie", raca: "Cockie", idade: 16, peso: 13.0, nomeDono: "Antonio" }
];

export default function App() {

  const listaVisual = []

  for (let i = 0; i < listaPets.length; i++) {
    const obj = listaPets[i]

    listaVisual.push(
      <View key={i} style={estilos.card}>
        <Text style={estilos.titulo}>Nome: {obj.nome}</Text>
        <Text style={estilos.texto}>Raça: {obj.raca}</Text>
        <Text style={estilos.texto}>Idade: {obj.idade} anos</Text>
        <Text style={estilos.texto}>Peso: {obj.peso} kg</Text>
        <Text style={estilos.texto}>Dono: {obj.nomeDono}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={estilos.main}>
      <Text style={estilos.tituloMain}>Lista de Pets</Text>
      {listaVisual}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white'
  },
  tituloMain: {
    fontSize: 26,
    color: 'fuchsia',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  card: {
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 5,
    backgroundColor: "lightgray",
    borderColor: "gray",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    elevation: 5
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    color: '#000000'
  }
});