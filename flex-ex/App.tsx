import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
   //---Trocar a opção1 pela opção2 ou opção3 para ver as diferentes formas de organizar os botões
      <View style={[estilos.layoutBox, estilos.opcao1]}>
        <View style={[estilos.box, estilos.boxA]}>
          <Text style={estilos.texto}>Botão A</Text>
        </View>
        
        <View style={[estilos.box, estilos.boxB]}>
          <Text style={estilos.texto}>Botão B</Text>
        </View>
        
        <View style={[estilos.box, estilos.boxC]}>
          <Text style={estilos.texto}>Botão C</Text>
        </View>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  layoutBox: {
    flex: 1, 
  },

  opcao1: {
    flexDirection: 'column', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
  },

  opcao2: {
    flexDirection: 'row-reverse', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  
  opcao3: {
    flexDirection: 'column-reverse', 
    justifyContent: 'space-evenly', 
    alignItems: 'flex-end', 
  },

  box: {
    width: 80,
    height: 80,
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 10, 
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxA: {
    backgroundColor: 'blue', 
  },
  boxB: {
    backgroundColor: 'lightblue', 
  },
  boxC: {
    backgroundColor: 'green', 
  }
});