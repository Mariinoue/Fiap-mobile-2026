
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {

  const [fiap, setFiap] = useState(0);
  const [nome, setNome] = useState('jooao');


  return (
    <View style={styles.container}>
      <Text>{fiap}</Text>
      <Button title='Aumentar' onPress={() => setFiap(fiap + 1)} />

      <TextInput value={nome} onChangeText={(text) => setNome(text)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
