import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{}}>
      <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#8bb1e2', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <Text style={{ fontSize: 48, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Agenda de contatos</Text>
          
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
