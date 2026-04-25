import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
} from 'react-native';

export default function App() {
  const [fabricante, setFabricante] = useState('');
  const [modelo, setModelo] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastrar = () => {
    Alert.alert('Cadastro', 'Veículo cadastrado com sucesso!');
    setFabricante('');
    setModelo('');
    setPreco('');
  }

  return (
    <View style={style.container}>
      <View style={style.viewSuperior}>
        <Image
          source={require('./assets/car.jpg')}
          style={style.imgCar}
          resizeMode="contain"
        />
      </View>
      <View style={style.viewInferior}>
        <Text style={style.label}>Fabricante: </Text>
        <TextInput
          placeholder="Digite o modelo do veículo"
          style={style.input}
          value={fabricante}
          onChangeText={setFabricante}

        />
        <Text style={style.label}>Modelo: </Text>
        <TextInput
          placeholder="Digite o modelo do veículo"
          style={style.input}
          value={modelo}
          onChangeText={setModelo}
        />
        <Text style={style.label}>Preço: </Text>
        <TextInput
          placeholder="Digite o preço do veículo"
          style={style.input}
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />

        <View style={style.botao}>
          <Button
            title="Cadastrar/Salvar"
            onPress={handleCadastrar}
            color="#0056b3"
          />
        </View>

      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a87070',
  },
  viewSuperior: {
    flex: 3,
    backgroundColor: '#8cb9c4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  imgCar: {
    width: 200,
    height: 200,
    opacity: 0.8
  },
  viewInferior: {
    flex: 5,
    backgroundColor: '#5442a3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#FFFFFF'
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    width: '100%',
    marginTop: 10,
  }

})