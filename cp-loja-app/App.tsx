
import { number, object, string } from "yup";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

//----exercicio 1 -----
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  ativo: boolean;
}

export const produtoSchema = object({
  id: string().nullable(),
  nome: string()
    .required("Nome é um campo obrigatório")
    .min(3, "O nome deve conter ao menos 3 caracteres"),
  preco: number()
    .required("O preço deve ser preenchido")
    .min(4, "O preço deve conter ao menos 4 caracteres"),
  estoque: number()
    .required("O estoque deve ser preenchido"),
  ativo: number()
    .required()
});


//----exercicio 2-----


export default function App2() {

const { Navigator: TabNavigator, Screen: ScreenNavigator } = createBottomTabNavigator();

const TelaAForm = ( props : any ) => { 
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <Text style={{fontSize: 48, fontWeight: "bold", color: "blue"}}>Tela</Text>
      <Text style={{fontSize: 32, fontWeight: "bold", color: "blue"}}>Formulario</Text>
    </View>
  );
}

const TelaALista = ( props : any ) => { 
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <Text style={{fontSize: 48, fontWeight: "bold", color: "blue"}}>Tela</Text>
      <Text style={{fontSize: 32, fontWeight: "bold", color: "blue"}}>Listagem</Text>
    </View>
  );
}

  return (
    <View style={style.container}>
      <View style={style.viewSuperior}>
        <Text style={style.text}>Modelo 1</Text>
      </View>
      <View style={style.viewInferior}>
        <NavigationContainer>
          <TabNavigator screenOptions={{ headerShown: false }}>

            <ScreenNavigator 
              name="Formulário" 
              component={TelaAForm}
              options={{
                tabBarIcon : ({color, size}) => <Text style={{color: color, fontSize: size}}>F</Text>
              }}
            />

            <ScreenNavigator 
              name="Lista" 
              component={TelaALista}
              options={{
                tabBarIcon : ({color, size}) => <Text style={{color: color, fontSize: size}}>L</Text>
              }}
            />

          </TabNavigator>
        </NavigationContainer>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  viewSuperior: {
    flex: 2,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  viewInferior: {
    flex: 8
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})



// //-- 3

export default function AppForm({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [estoque, setEstoque] = useState('');
  const [preco, setPreco] = useState('');
  const [ativo, setAtivo] = useState(false);

  const handleCadastrar = () => {
    console.log("Lógica de salvar entra no tópico 5")
  }

  return (
    <View style={style.container}>
      <View style={style.viewSuperior}>

      </View>
      <View style={style.viewInferior}>
        <Text style={style.label}>Nome: </Text>
        <TextInput
          placeholder="Digite o nome do produto"
          style={style.input}
          value={nome}
          onChangeText={setNome}

        />
        <Text style={style.label}>Estoque: </Text>
        <TextInput
          placeholder="Digite o Estoque do produto"
          style={style.input}
          value={estoque}
          onChangeText={setEstoque}
          keyboardType="numeric"
        />
        <Text style={style.label}>Preço: </Text>
        <TextInput
          placeholder="Digite o preço do produto"
          style={style.input}
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
        <Text style={style.label}>Ativo: </Text>
        <Switch
          style={style.input}
          value={ativo}
          onValueChange={setAtivo}
        />

        <View style={style.botao}>
          <Button
            title="Cadastrar/Salvar"
            onPress={handleCadastrar}
            color="#0056b3"
          />
        </View>

        <View style={style.botao}>
          <Button
            title="Listagem"
            onPress={() => navigation.navigate('Lista')}
            color="#0056b3"
          />
        </View>

      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  viewSuperior: {
    flex: 2,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  viewInferior: {
    flex: 8,
    padding: 10
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


// //-- 4

export default function AppForm({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [estoque, setEstoque] = useState('');
  const [preco, setPreco] = useState('');
  const [ativo, setAtivo] = useState(false);

  const handleCadastrar = () => {
    Alert.alert('Cadastro', 'Produto cadastrado com sucesso!');
    setNome('');
    setEstoque('');
    setPreco('');
  }

  return (
    <View style={style.container}>
      <View style={style.viewSuperior}>

      </View>
      <View style={style.viewInferior}>
        <Text style={style.label}>Nome: </Text>
        <TextInput
          placeholder="Digite o nome do produto"
          style={style.input}
          value={nome}
          onChangeText={setNome}

        />
        <Text style={style.label}>Estoque: </Text>
        <TextInput
          placeholder="Digite o Estoque do produto"
          style={style.input}
          value={estoque}
          onChangeText={setEstoque}
          keyboardType="numeric"
        />
        <Text style={style.label}>Preço: </Text>
        <TextInput
          placeholder="Digite o preço do produto"
          style={style.input}
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
        <Text style={style.label}>Ativo: </Text>
        <Switch
          style={style.input}
          value={ativo}
          onValueChange={setAtivo}
        />

        <View style={style.botao}>
          <Button
            title="Cadastrar/Salvar"
            onPress={handleCadastrar}
            color="#0056b3"
          />
        </View>
      <View style={style.botao}>
        <Button 
          title="Ir para a Listagem" 
          color="gray"
          onPress={() => navigation.navigate('Lista')} 
        />
      </View>

      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  viewSuperior: {
    flex: 2,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  viewInferior: {
    flex: 8,
    padding: 10
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


// //-- 5

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  ativo: boolean;
}

const { Navigator: TabNavigator, Screen: ScreenNavigator } = createBottomTabNavigator();

const Formulario = ({ navigation, onCadastrar }: any) => { 
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [ativo, setAtivo] = useState('true');

  const acaoCadastrar = () => {
    const novoObj: Produto = {
      id: Number(id),
      nome: nome,
      preco: Number(preco),
      estoque: Number(estoque),
      ativo: ativo.toLowerCase() === 'true'
    };

    onCadastrar(novoObj);
    
    setId(''); 
    setNome(''); 
    setPreco(''); 
    setEstoque(''); 
    setAtivo('true');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.input} placeholder="ID" value={id} onChangeText={setId} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Preço" value={preco} onChangeText={setPreco} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Estoque" value={estoque} onChangeText={setEstoque} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Ativo (true/false)" value={ativo} onChangeText={setAtivo} />
      
      <View style={styles.botaoEspaco}>
        <Button title="cadastrar" onPress={acaoCadastrar} />
      </View>
      
      <View style={styles.botaoEspaco}>
        <Button title="Ir para a Listagem" color="gray" onPress={() => navigation.navigate('Lista')} />
      </View>
    </View>
  );
}

const TelaLista = () => { 
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 24, fontWeight: "bold", color: "blue"}}>Tela de Listagem</Text>
    </View>
  );
}

export default function App() {
  const [listaProdutos, setListaProdutos] = useState<Produto[]>([]);

  const adicionarProduto = (novoProduto: Produto) => {
    setListaProdutos([...listaProdutos, novoProduto]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewSuperior}>
        <Text style={styles.textoTitulo}>Produto</Text>
      </View>

      <View style={styles.viewInferior}>
        <NavigationContainer>
          <TabNavigator screenOptions={{ headerShown: false }}>
            <ScreenNavigator 
              name="Formulário" 
              options={{ tabBarIcon : ({color, size}) => <Text style={{color: color, fontSize: size}}>F</Text>}}
            >
              {(props) => <Formulario {...props} onCadastrar={adicionarProduto} />}
            </ScreenNavigator>
            
            <ScreenNavigator 
              name="Lista" 
              component={TelaLista}
              options={{ tabBarIcon : ({color, size}) => <Text style={{color: color, fontSize: size}}>L</Text>}}
            />
          </TabNavigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  viewSuperior: {
    flex: 2,
    backgroundColor: 'navy',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoTitulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewInferior: {
    flex: 8,
  },
  formContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  botaoEspaco: {
    marginTop: 10,
  }
});