import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useLayoutEffect, ReactElement } from 'react';
import { useColorScheme, useWindowDimensions, Button, StyleSheet,
          Text, TextInput, View, 
          ScrollView,
          ListRenderItem,
          FlatList,
          FlatListProps,
          Modal,
          ListRenderItemInfo,
          Pressable} from 'react-native';
import { MaterialIcons as Icons } from "@expo/vector-icons";

interface Contato {
  id? : string;
  nome: string;
  telefone: string;
  email: string;
}

interface DetalhesContatoProps extends ListRenderItemInfo<Contato> {
  estilo: any;
}

const DetalhesContato = ( {item, estilo} : DetalhesContatoProps ) => { 
  return (
    <View key={"id-contato-" + item.id} style={estilo.card}>
      <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.nome}</Text>
      <Text>{item.telefone}</Text>
      <Text>{item.email}</Text>
    </View>
  );
}

export default function App() {
  const screenMode = useColorScheme();

  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [filtro, setFiltro] = useState<string>("");
  const [isDark, setDark] = useState<boolean>( screenMode === "dark");

  const [lista, setLista] = useState<Array<Contato>> ([
    {id: "001", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "002", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "003", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    {id: "004", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "005", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "006", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    {id: "007", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "008", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "009", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"}        
  ]);


  const toggleScreenMode = () => { 
    setDark(!isDark);
  }

  const estilos = isDark ? estilosDark : estilosLight;
  const screenModeIcon = isDark ? "light-mode" : "dark-mode";

  const listaFiltrada = lista.filter(  ( obj : Contato, idx : number  ) : boolean => { 
    return obj.nome.includes(filtro);
  })

  const [modalVisivel, setModalVisivel] = useState<boolean>(true);
  const [modalFecharVisivel, setModalFecharVisivel] = useState<boolean>(false);

  useEffect( () => {
    setTimeout( ()=> {
      setModalFecharVisivel(true);
    }, 3000);
  });


  return (
    <View style={estilos.main}>
      <StatusBar hidden={false} style='l'/>
      <View style={[estilos.topBar, 
          {flexDirection: "row", justifyContent: "space-between", 
            marginHorizontal: 15
          }]}>
        <Text style={[estilos.body, {fontSize: 28}]}>Agenda de Contatos</Text>
        <Icons name={screenModeIcon} size={32} color={estilos.body.color}
          onPress={toggleScreenMode} />
      </View>
      <Modal visible={modalVisivel} transparent={true}>
        <View style={{flex: 1, justifyContent: "flex-start", alignItems: "stretch",
           marginTop: 50}}>
          {modalFecharVisivel && <Icons name="close" size={32} 
          style={{alignSelf: "flex-end"}}
          color={estilos.body.color}
          onPress={()=>{
            setModalVisivel( false );
          }} />}
          <View style={[estilos.container, {justifyContent: "center", 
            backgroundColor: "#FFFFFFAA"}]}>
            <TextInput style={estilos.input}
              placeholder="Nome" placeholderTextColor={estilos.body.color}
              value={nome} onChangeText={setNome}/> 
            <TextInput style={estilos.input}
              placeholder="Telefone" placeholderTextColor={estilos.body.color}
              value={telefone} onChangeText={setTelefone}/>
            <TextInput style={estilos.input}
              placeholder="Email" placeholderTextColor={estilos.body.color}
              value={email} onChangeText={setEmail}/>
            <Button title="Salvar" onPress={()=>{
              const obj : Contato = {nome, telefone, email};
              setLista( [ ... lista, obj ] );
              setNome("");
              setTelefone("");
              setEmail("");
              setModalVisivel( false );
            }} />
            <Button title="Pesquisar" onPress={()=>{
              for(let contato of lista) { 
                if (contato.nome.includes(nome)) { 
                  setNome(contato.nome);
                  setTelefone(contato.telefone);
                  setEmail(contato.email);
                }
              }
            }} />
          </View>
        </View>
      </Modal>
      <View style={estilos.container}>
          <Text style={estilos.body}>Contatos Salvos:</Text>
          <TextInput value = {filtro} onChangeText={setFiltro}
          style={estilos.input}
          placeholder="Filtro" placeholderTextColor={estilos.body.color}/>
          <FlatList data={listaFiltrada} 
            renderItem={( flatListProps : ListRenderItemInfo<Contato>)=>
                <DetalhesContato {...flatListProps} estilo={estilos}/>}
            keyExtractor={(item :Contato, idx : number)=>"id-contato-" + item.id}
            style={{flex: 1}}/>
        <Pressable onPress={()=>{
          setModalVisivel(true);
          setModalFecharVisivel(false);
        }}>
          <View style={{width: 50, height: 50, backgroundColor: "blue", 
            borderRadius: 25, shadowOpacity: 1, elevation: 10,
            shadowColor: "black", shadowRadius: 5,
            shadowOffset: {width: 3, height: 3},
            position: "absolute", bottom: 50, right: 50,
            justifyContent: "center", alignItems: "center"
            }}>   
            <Icons name="add" size={32} color="white"/>         
          </View>
        </Pressable>
      </View>
      <StatusBar barStyle={'dark-content'} backgroundColor="black" />
    </View>
  );
}

const estilosLight = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'white'
  },
  topBar: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 11,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: "black"
  },
  input : {
    backgroundColor: "lightblue",
    borderColor: "magenta",
    borderRadius:20,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    color: "black"
  },
  body : { 
    color: "black"
  },
  card : {
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
  }
});

const estilosDark = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'black'
  },
  topBar: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 11,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: 'white'
  },
  input : {
    backgroundColor: "darkblue",
    borderColor: "pink",
    borderRadius:20,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    color: "white"
  },
  body : { 
    color: "white"
  },
  card : {
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 5,
    backgroundColor: "gray",
    borderColor: "lightgray",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    elevation: 5
  }
});



import React from 'react';
import {Button, View, Text, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default () => {

  const a = 1048;

  const contato = {nome: "Joao Silva", telefone: "(11) 1111-1111"} 

  return ( 
    <View style={{flex: 1, marginTop: 50,justifyContent: "center"}}>
      <Text> Teste de Async Storage </Text>
      <Button title="Gravar Numero" onPress={()=>{
        AsyncStorage.setItem( "MEU_NUMERO", 
                          a.toString() // "1048"
                        );
        ToastAndroid.show("Numero gravado com sucesso", ToastAndroid.LONG)
      }}/>

      <Button title="Gravar Objeto" onPress={()=>{
        AsyncStorage.setItem( "CONTATO", 
                          JSON.stringify(contato)
                        );
        ToastAndroid.show("Contato gravado com sucesso", ToastAndroid.LONG)
      }}/>

      <Button title="Ler Numero" onPress={ ()=>{
        console.log("Lendo numero do AsyncStorage - inicio");
        AsyncStorage.getItem( "MEU_NUMERO" )
        .then(( valor : string | null )=>{
          console.log("Numero lido com sucesso: " + valor);
          ToastAndroid.show("Numero lido com sucesso: " + valor, ToastAndroid.LONG);
        })
        .catch(( err : any)=>{
          console.log("Erro ao executar a leitura: " + err);
          ToastAndroid.show("Erro ao executar a leitura: " + err, ToastAndroid.LONG);
        })
        console.log("Lendo numero do AsyncStorage - termino");
      }}/>

      <Button title="Ler Todas as Chaves" onPress={ ()=>{
        AsyncStorage.getAllKeys()
        .then(( valor : any | null )=>{
          console.log("Chaves lidas: " + valor);
          ToastAndroid.show("Chaves lidas: " + valor, ToastAndroid.LONG);
        })
        .catch(( err : any)=>{
          console.log("Erro ao executar a leitura: " + err);
          ToastAndroid.show("Erro ao executar a leitura: " + err, ToastAndroid.LONG);
        })
      }}/>
      <Button title="Ler Contato" onPress={ ()=>{
        AsyncStorage.getItem("CONTATO")
        .then(( valor : string | null )=>{
          console.log("Contato lido: " + valor);
          if ( valor != null) {
            const c = JSON.parse( valor );
            console.log("Nome: " + c.nome);
            console.log("Telefone: " + c.telefone);
          }

        })
        .catch(( err : any)=>{
          console.log("Erro ao executar a leitura: " + err);
          ToastAndroid.show("Erro ao executar a leitura: " + err, ToastAndroid.LONG);
        })
      }}/>    
    </View>
  )
}


import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useLayoutEffect, ReactElement } from 'react';
import { useColorScheme, useWindowDimensions, Button, StyleSheet,
          Text, TextInput, View, 
          ScrollView,
          ListRenderItem,
          FlatList,
          FlatListProps,
          Modal,
          ListRenderItemInfo,
          RefreshControl,
          Pressable,
          SectionList} from 'react-native';
import { MaterialIcons as Icons } from "@expo/vector-icons";

interface Contato {
  id? : string;
  nome: string;
  telefone: string;
  email: string;
}

interface DetalhesContatoProps extends ListRenderItemInfo<Contato> {
  estilo: any;
}

const DetalhesContato = ( {item, estilo} : DetalhesContatoProps ) => { 
  return (
    <View key={"id-contato-" + item.id} style={estilo.card}>
      <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.nome}</Text>
      <Text>{item.telefone}</Text>
      <Text>{item.email}</Text>
    </View>
  );
}

const contatosIniciais : Contato[] = [
    {id: "001", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "002", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "003", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    {id: "004", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "005", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "006", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    {id: "007", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "008", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "009", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},       
    // {id: "011", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "012", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "013", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "014", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "015", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "016", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "017", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "018", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "019", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},       
    // {id: "021", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "022", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "023", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "024", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "025", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "026", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "027", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "028", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "029", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"}                
  ];

const sectionData = [
  {title: "Masculino", data: [
    {id: "026", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    {id: "027", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"}
  ] },
  {title: "Feminino", data: [
    {id: "028", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "029", nome: "Carla Almeida", telefone: "(11)3333-3333", email: "carla@teste.com"}                

  ] }
]

export default function App() {
  const screenMode = useColorScheme();

  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [filtro, setFiltro] = useState<string>("");
  const [isDark, setDark] = useState<boolean>( screenMode === "dark");

  const [lista, setLista] = useState<Array<Contato>> ([]);

  const [recarregando, setRecarregando] = useState<boolean>(false);

  const toggleScreenMode = () => { 
    setDark(!isDark);
  }

  const carregar = () => { 
    setRecarregando(true);
    setTimeout( ()=> {
      const listaTemp = contatosIniciais.map( (c, i) => {
        const contato = { ...c };
        contato.id = "contato-"  + lista.length + i + 1;
        return contato })
      setLista( [...lista, ...listaTemp] );
      setRecarregando(false);
    }, 3000);
  }

  const estilos = isDark ? estilosDark : estilosLight;
  const screenModeIcon = isDark ? "light-mode" : "dark-mode";

  const [modalVisivel, setModalVisivel] = useState<boolean>(true);
  const [modalFecharVisivel, setModalFecharVisivel] = useState<boolean>(false);

  useEffect( () => {
    setTimeout( ()=> {
      setModalFecharVisivel(true);
    }, 3000);
  });


  return (
    <View style={estilos.main}>
      <StatusBar hidden={false} style='auto' animated={true} />
      <View style={[estilos.topBar, 
          {flexDirection: "row", justifyContent: "space-between", 
            marginHorizontal: 15
          }]}>
        <Text style={[estilos.body, {fontSize: 28}]}>Agenda de Contatos</Text>
        <Icons name={screenModeIcon} size={32} color={estilos.body.color}
          onPress={toggleScreenMode} />
      </View>
      <View style={estilos.container}>
        <TextInput style={estilos.input}
          placeholder="Nome" placeholderTextColor={estilos.body.color}
          value={nome} onChangeText={setNome}/> 
        <TextInput style={estilos.input}
          placeholder="Telefone" placeholderTextColor={estilos.body.color}
          value={telefone} onChangeText={setTelefone}/>
        <TextInput style={estilos.input}
          placeholder="Email" placeholderTextColor={estilos.body.color}
          value={email} onChangeText={setEmail}/>
        <Button title="Salvar" onPress={()=>{
          const obj : Contato = {nome, telefone, email};
          setLista( [ ... lista, obj ] );
          setNome("");
          setTelefone("");
          setEmail("");
          setModalVisivel( false );
        }} />
      </View>
      <View style={[estilos.container, {flex: 25}]}>
          <SectionList sections={sectionData}
              renderItem={( sectionProps : any ) =>
                <View>
                    <Text>{sectionProps.item.nome}</Text>
                </View>}
              renderSectionHeader={
                ( h : any ) =>
                  <Text style={{fontSize: 18}}>{h.section.title}</Text> 
              } 
          />
              
      </View>
    </View>
  );
}

const estilosLight = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'white'
  },
  topBar: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 11,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: "black"
  },
  input : {
    backgroundColor: "lightblue",
    borderColor: "magenta",
    borderRadius:20,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    color: "black"
  },
  body : { 
    color: "black"
  },
  card : {
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
  }
});

const estilosDark = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'black'
  },
  topBar: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 11,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: 'white'
  },
  input : {
    backgroundColor: "darkblue",
    borderColor: "pink",
    borderRadius:20,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    color: "white"
  },
  body : { 
    color: "white"
  },
  card : {
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 5,
    backgroundColor: "gray",
    borderColor: "lightgray",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    elevation: 5
  }
});



import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useLayoutEffect, ReactElement } from 'react';
import { useColorScheme, useWindowDimensions, Button, StyleSheet,
          Text, TextInput, View, 
          ScrollView,
          ListRenderItem,
          FlatList,
          FlatListProps,
          Modal,
          ListRenderItemInfo,
          RefreshControl,
          Pressable} from 'react-native';
import { MaterialIcons as Icons } from "@expo/vector-icons";

interface Contato {
  id? : string;
  nome: string;
  telefone: string;
  email: string;
}

interface DetalhesContatoProps extends ListRenderItemInfo<Contato> {
  estilo: any;
}

const DetalhesContato = ( {item, estilo} : DetalhesContatoProps ) => { 
  return (
    <View key={"id-contato-" + item.id} style={estilo.card}>
      <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.nome}</Text>
      <Text>{item.telefone}</Text>
      <Text>{item.email}</Text>
    </View>
  );
}

const contatosIniciais : Contato[] = [
    {id: "001", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "002", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "003", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    {id: "004", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "005", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "006", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    {id: "007", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    {id: "008", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    {id: "009", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},       
    // {id: "011", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "012", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "013", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "014", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "015", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "016", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "017", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "018", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "019", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},       
    // {id: "021", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "022", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "023", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "024", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "025", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "026", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"},
    // {id: "027", nome: "Joao Silva", telefone: "(11)1111-1111", email: "joao@teste.com"},
    // {id: "028", nome: "Maria Silva", telefone: "(11)2222-2222", email: "maria@teste.com"},
    // {id: "029", nome: "Jose Santos", telefone: "(11)3333-3333", email: "jose@teste.com"}                
  ];

export default function App() {
  const screenMode = useColorScheme();

  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [filtro, setFiltro] = useState<string>("");
  const [isDark, setDark] = useState<boolean>( screenMode === "dark");

  const [lista, setLista] = useState<Array<Contato>> ([]);

  const [recarregando, setRecarregando] = useState<boolean>(false);

  const toggleScreenMode = () => { 
    setDark(!isDark);
  }

  const carregar = () => { 
    setRecarregando(true);
    setTimeout( ()=> {
      const listaTemp = contatosIniciais.map( (c, i) => {
        const contato = { ...c };
        contato.id = "contato-"  + lista.length + i + 1;
        return contato })
      setLista( [...lista, ...listaTemp] );
      setRecarregando(false);
    }, 3000);
  }

  const estilos = isDark ? estilosDark : estilosLight;
  const screenModeIcon = isDark ? "light-mode" : "dark-mode";

  const [modalVisivel, setModalVisivel] = useState<boolean>(true);
  const [modalFecharVisivel, setModalFecharVisivel] = useState<boolean>(false);

  useEffect( () => {
    setTimeout( ()=> {
      setModalFecharVisivel(true);
    }, 3000);
  });


  return (
    <View style={estilos.main}>
      <StatusBar hidden={false} style='auto' animated={true} />
      <View style={[estilos.topBar, 
          {flexDirection: "row", justifyContent: "space-between", 
            marginHorizontal: 15
          }]}>
        <Text style={[estilos.body, {fontSize: 28}]}>Agenda de Contatos</Text>
        <Icons name={screenModeIcon} size={32} color={estilos.body.color}
          onPress={toggleScreenMode} />
      </View>
      <View style={estilos.container}>
        <TextInput style={estilos.input}
          placeholder="Nome" placeholderTextColor={estilos.body.color}
          value={nome} onChangeText={setNome}/> 
        <TextInput style={estilos.input}
          placeholder="Telefone" placeholderTextColor={estilos.body.color}
          value={telefone} onChangeText={setTelefone}/>
        <TextInput style={estilos.input}
          placeholder="Email" placeholderTextColor={estilos.body.color}
          value={email} onChangeText={setEmail}/>
        <Button title="Salvar" onPress={()=>{
          const obj : Contato = {nome, telefone, email};
          setLista( [ ... lista, obj ] );
          setNome("");
          setTelefone("");
          setEmail("");
          setModalVisivel( false );
        }} />
      </View>
      <View style={[estilos.container, {flex: 25}]}>
          <FlatList data={lista} 
            renderItem={( flatListProps : ListRenderItemInfo<Contato>)=>
                <DetalhesContato {...flatListProps} estilo={estilos}/>}
            keyExtractor={(item :Contato, idx : number)=>"id-contato-" + item.id}
            initialNumToRender={7}
            windowSize={5}
            maxToRenderPerBatch={6}
            onEndReached={carregar}
            refreshControl={<RefreshControl
              refreshing={recarregando}
              onRefresh={carregar}
            />}
            numColumns={3}
            horizontal={false}
            />
      </View>
    </View>
  );
}

const estilosLight = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'white'
  },
  topBar: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 11,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: "black"
  },
  input : {
    backgroundColor: "lightblue",
    borderColor: "magenta",
    borderRadius:20,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    color: "black"
  },
  body : { 
    color: "black"
  },
  card : {
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
  }
});

const estilosDark = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    backgroundColor: 'black'
  },
  topBar: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 11,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: 'white'
  },
  input : {
    backgroundColor: "darkblue",
    borderColor: "pink",
    borderRadius:20,
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    color: "white"
  },
  body : { 
    color: "white"
  },
  card : {
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 5,
    backgroundColor: "gray",
    borderColor: "lightgray",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    elevation: 5
  }
});
