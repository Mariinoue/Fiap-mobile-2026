import { StatusBar } from 'expo-status-bar';
import {
  Button, StyleSheet, Text, View, FlatList,
  ListRenderItemInfo, RefreshControl, ToastAndroid
} from 'react-native';
import { MaterialIcons as Icons } from "@expo/vector-icons";
import CustomTextInput from '../component/CustomTextInput'; 
import { useCarroControl } from '../control/useCarroControl';
import { Carro } from '../model/carro';

interface DetalhesCarroProps extends ListRenderItemInfo<Carro> {
  estilo: any;
  aoRemover: (id: number) => void;
}

const DetalhesCarro = ({ item, estilo, aoRemover }: DetalhesCarroProps) => {
  return (
    <View key={"id-carro-" + item.id} style={estilo.card}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: estilo.body.color }}>{item.modelo}</Text>
          <Text style={{ color: estilo.body.color }}>Placa: {item.placa}</Text>
          <Text style={{ color: estilo.body.color }}>Ano: {item.ano}</Text>
        </View>
        <Icons
          name="delete"
          size={28}
          color="#e74c3c"
          onPress={() => aoRemover(item.id)}
        />
      </View>
    </View>
  );
}

export default function App() {
  const mensagem = (texto: string) => {
    ToastAndroid.show(texto, ToastAndroid.LONG);
  }

  const {
    modelo, setModelo,
    placa, setPlaca,
    ano, setAno,
    isDark, toggleScreenMode,
    lista,
    recarregando,
    erros,
    salvar, apagarTodos, remover,
    carregarLista: carregar
  } = useCarroControl(mensagem);

  const estilos = isDark ? estilosDark : estilosLight;
  const screenModeIcon = isDark ? "light-mode" : "dark-mode";

  return (
    <View style={estilos.main}>
      <StatusBar hidden={false} style='auto' animated={true} />

      <View style={[estilos.topBar, { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }]}>
        <Text style={[estilos.body, { fontSize: 28, fontWeight: 'bold' }]}>Garagem de Carros</Text>
        <Icons name={screenModeIcon} size={32} color={estilos.body.color} onPress={toggleScreenMode} />
      </View>

      <View style={estilos.container}>
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
          placeholder="Placa (ABC-1234)"
          placeholderTextColor={estilos.body.color}
          value={placa}
          onChangeText={setPlaca}
          erro={erros.placa}
        />

        <CustomTextInput
          style={estilos.input}
          placeholder="Ano"
          placeholderTextColor={estilos.body.color}
          value={ano}
          onChangeText={setAno}
          keyboardType="numeric"
          erro={erros.ano}
        />

        <View style={{ marginVertical: 5 }}>
          <Button title="Salvar Carro" onPress={salvar} />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Button title="Apagar Todos" onPress={apagarTodos} color="#e67e22" />
        </View>
      </View>

      <View style={[estilos.container, { flex: 25 }]}>
        <FlatList
          data={lista}
          renderItem={(props: ListRenderItemInfo<Carro>) =>
            <DetalhesCarro {...props} estilo={estilos} aoRemover={remover} />
          }
          keyExtractor={(item: Carro) => "id-carro-" + item.id}
          refreshControl={
            <RefreshControl refreshing={recarregando} onRefresh={carregar} />
          }
        />
      </View>
    </View>
  );
}

const estilosLight = StyleSheet.create({
  main: { flex: 1, marginTop: 30, backgroundColor: 'white' },
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
  main: { flex: 1, marginTop: 30, backgroundColor: 'black' },
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