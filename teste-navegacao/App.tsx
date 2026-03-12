import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

const telaA = (props: any) => {
  return (
    <View>
      <Text>Tela A</Text>
      <Button title='Ir para tela B' onPress={() => props.navigation.navigate('telaB')} />
    </View>
  )
}

const telaB = (props: any) => {
  return (
    <View>
      <Text>Tela B</Text>
      <Button title='Voltar para tela A' onPress={() => props.navigation.navigate('telaA')} />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Navegaçao</Text>
        <Navigator>
          <Screen name='telaA' component={telaA} />
          <Screen name='telaB' component={telaB} />
        </Navigator>
        <StatusBar style="auto" />
      </View>


    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

