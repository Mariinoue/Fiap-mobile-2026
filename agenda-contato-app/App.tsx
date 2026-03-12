import { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Switch, Text, Button } from 'react-native';



export default function App() {


  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.box} >
        <Image
          source={require('./assets/avatar.jpg')}
          style={styles.avatar}
        />
        <TextInput style={styles.input} placeholder="Nome Completo: "
          keyboardType="ascii-capable" />
        <TextInput style={styles.input} placeholder="Telefone: "
          keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Email: "
          keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Info: "
          keyboardType="ascii-capable" multiline={true} numberOfLines={4} />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text>O status é: {isEnabled ? 'Ativo' : 'Inativo'}</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }} // Cor do fundo
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}   // Cor da "bolinha"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

        </View>
        <Text >Você clicou {count} vezes</Text>

        <Button
          title="Aumentar"
          onPress={() => setCount(count + 1)}
        />

        <Button
          title="Diminuir"
          color="red"
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8bf',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    width: '100%',
    height: 'auto',
    gap: 20,
  },
  input: {
    backgroundColor: "#ffff",
    borderColor: "#afafaf",
    borderWidth: 1,
    borderRadius: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
{/* <View style={[styles.box, { backgroundColor: 'blue' }]} />
      <View style={[styles.box, { backgroundColor: 'red' }]} />
      <View style={[styles.box, { backgroundColor: 'green' }]} /> */}