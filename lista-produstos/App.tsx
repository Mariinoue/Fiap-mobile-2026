import { View, Text, StyleSheet, ScrollView } from 'react-native';

const listaProdutos = [

  { nome: 'Camiseta', preco: 29.99, categoria: 'Roupas' },
  { nome: 'Tênis', preco: 79.99, categoria: 'Calçados' },
  { nome: 'Celular', preco: 899.99, categoria: 'Eletrônicos' },
  { nome: 'Livro', preco: 19.99, categoria: 'Livros' }
];

export default function App() {

  const listaVisual = []

  for (let i = 0; i < listaProdutos.length; i++) {
    const obj = listaProdutos[i]

    listaVisual.push(
      <View key={i} style={estilos.card}>
        <Text style={estilos.titulo}>Nome: {obj.nome}</Text>
        <Text style={estilos.texto}>Preço: R$ {obj.preco.toFixed(2)}</Text>
        <Text style={estilos.texto}>Categoria: {obj.categoria}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={estilos.main}>
      <Text style={estilos.tituloMain}>Lista de Produtos</Text>
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