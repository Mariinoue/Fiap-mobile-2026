import { StatusBar } from 'expo-status-bar';
import { 
  Button, StyleSheet, Text, View, FlatList, 
  ListRenderItemInfo, ToastAndroid, ActivityIndicator 
} from 'react-native';
import { MaterialIcons as Icons } from "@expo/vector-icons";
import CustomTextInput from '../component/CustomTextInput';
import { useCarroControl } from '../control/useCarroControl';

export default function App() {
  const avisar = (texto: string) => ToastAndroid.show(texto, ToastAndroid.SHORT);

  const {
    modelo, setModelo, placa, setPlaca, ano, setAno, 
    erros,
    lista, carregando, mensagem, 
    carregarTudo, salvar, remover,
    isDark, toggleScreenMode
  } = useCarroControl(avisar);

  const estilos = isDark ? estilosDark : estilosLight;
  const screenModeIcon = isDark ? "light-mode" : "dark-mode";

  return (
    <View style={estilos.main}>
      <StatusBar hidden={false} style='auto' animated={true} />
      
      <View style={[estilos.topBar, { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }]}>
        <Text style={[estilos.body, { fontSize: 28, fontWeight: 'bold' }]}>Revenda Clean</Text>
        <Icons name={screenModeIcon} size={32} color={estilos.body.color} onPress={toggleScreenMode} />
      </View>

      <View style={estilos.container}>
        
        {mensagem !== "" && (
          <Text style={{ color: '#e67e22', fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
            {mensagem}
          </Text>
        )}

        {carregando && (
          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <ActivityIndicator size="large" color={isDark ? "pink" : "magenta"} />
          </View>
        )}

        <CustomTextInput 
          style={estilos.input}
          placeholder="Modelo" 
          placeholderTextColor={estilos.body.color}
          value={modelo} 
          onChangeText={setModelo} 
          erro={erros.modelo}
        /> 
        
        <CustomTextInput 
          style={estilos.input}
          placeholder="Placa (Mínimo 5 caracteres)" 
          placeholderTextColor={estilos.body.color}
          value={placa} 
          onChangeText={setPlaca} 
          erro={erros.placa}
        />

        <CustomTextInput 
          style={estilos.input}
          placeholder="Ano (Positivo)" 
          placeholderTextColor={estilos.body.color}
          value={ano} 
          onChangeText={setAno} 
          keyboardType="numeric"
          erro={erros.ano}
        />

        <View style={{ marginVertical: 5 }}>
          <Button title="Salvar Carro" onPress={salvar} disabled={carregando} />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Button title="Atualizar Lista" onPress={carregarTudo} color="#2ecc71" disabled={carregando} />
        </View>
      </View>

      <View style={[estilos.container, { flex: 25 }]}>
          <FlatList 
            data={lista} 
            keyExtractor={(item) => item.id}
            renderItem={({ item }: ListRenderItemInfo<any>) => (
              <View style={estilos.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: estilos.body.color }}>{item.modelo}</Text>
                    <Text style={{ color: estilos.body.color }}>Placa: {item.placa} | Ano: {item.ano}</Text>
                  </View>
                  <Icons 
                    name="delete" 
                    size={28} 
                    color="#e74c3c" 
                    onPress={() => remover(item.id)} 
                  />
                </View>
              </View>
            )}
          />
      </View>
    </View>
  );
}

const estilosLight = StyleSheet.create({
  main: { flex: 1, marginTop: 40, backgroundColor: 'white' },
  topBar: { flex: 1, backgroundColor: 'white' },
  container: { flex: 11, backgroundColor: 'white', alignItems: 'stretch', padding: 10 },
  input: { 
    backgroundColor: "lightblue", borderColor: "magenta", borderRadius: 20, 
    borderWidth: 1, paddingHorizontal: 15, marginVertical: 5, color: "black", height: 45
  },
  body: { color: "black" },
  card: { 
    marginVertical: 10, padding: 15, backgroundColor: "lightgray", 
    borderRadius: 10, elevation: 5 
  }
});

const estilosDark = StyleSheet.create({
  main: { flex: 1, marginTop: 40, backgroundColor: 'black' },
  topBar: { flex: 1, backgroundColor: 'black' },
  container: { flex: 11, backgroundColor: 'black', alignItems: 'stretch', padding: 10 },
  input: { 
    backgroundColor: "darkblue", borderColor: "pink", borderRadius: 20, 
    borderWidth: 1, paddingHorizontal: 15, marginVertical: 5, color: "white", height: 45
  },
  body: { color: "white" },
  card: { 
    marginVertical: 10, padding: 15, backgroundColor: "gray", 
    borderRadius: 10, elevation: 5 
  }
});