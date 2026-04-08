import AsyncStorage from '@react-native-async-storage/async-storage';
import { Contato } from '../model/contato';
import axios from 'axios';

const salvarContato = async ( contato : Contato ) => { 
    await axios.post( "https://projeto-um-35846-default-rtdb.firebaseio.com/contatos.json",
        contato );
}

const salvarLista = ( lista : Contato[] ) => { 
}

const carregarLista = async () => {
    let lista : Contato[] = [];
    try { 
        const resposta = await axios.get("https://projeto-um-35846-default-rtdb.firebaseio.com/contatos.json");
        const mapContatos = resposta.data;
        if (mapContatos != null) {
            console.log("Map de contatos: ", mapContatos);
            for (const chave in mapContatos) { 
                const contato = mapContatos[chave];
                contato.id = chave;
                lista.push( contato );
            }
        }
    } catch ( err : any ) { 
        console.log("Erro ao carregar lista: " + err.message);
    }
    return lista;
}

const salvarContador = ( contador : number ) => { 
   
}

const carregarContador = async () => {
    
}

const apagarTodosContatos = async () => {
   
}

export {salvarContato, salvarLista, carregarLista, salvarContador, carregarContador, apagarTodosContatos};