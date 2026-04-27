import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, FlatList,
  Image, Modal, StyleSheet, ImageBackground, TouchableOpacity
} from 'react-native';

interface Prato {
  id: string;
  nome: string;
  tipo: string;
  calorias: string;
  nomeImagem: string;
  ingredientes: string;
}

export default function App() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [calorias, setCalorias] = useState('');
  const [nomeImagem, setNomeImagem] = useState('');
  const [ingredientes, setIngredientes] = useState('');

  const [listaPratos, setListaPratos] = useState<Prato[]>([]);

  const [modalVisivel, setModalVisivel] = useState(false);
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null);

  const gravar = () => {
    if (!nome) {
      alert("O nome da refeição é obrigatório!");
      return;
    }

    const novoPrato: Prato = {
      id: Math.random().toString(),
      nome,
      tipo,
      calorias,
      nomeImagem,
      ingredientes
    };

    setListaPratos([...listaPratos, novoPrato]);

    setNome(''); setTipo(''); setCalorias(''); setNomeImagem(''); setIngredientes('');
  };

  const abrirDetalhes = (prato: Prato) => {
    setPratoSelecionado(prato);
    setModalVisivel(true);
  };

  const getImagem = (nomeArq: string) => {
    switch (nomeArq.toLowerCase()) {
      case 'img1.png': return require('./assets/img1.png');
      case 'img2.png': return require('./assets/img2.png');
      case 'img3.png': return require('./assets/img3.png');
      case 'img4.png': return require('./assets/img4.png');
      default: return require('./assets/img1.png');
    }
  };

  const ItemPrato = ({ prato }: { prato: Prato }) => (
    <TouchableOpacity style={s.cardPrato} onPress={() => abrirDetalhes(prato)}>
      <Image source={getImagem(prato.nomeImagem)} style={s.imagemCard} />
      <Text style={s.textoCard}>{prato.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={s.containerPrincipal}>

      <View style={s.viewSuperior}>
        <Text style={s.tituloRestaurante}>BRISTÔ-DONTE</Text>
        <ImageBackground
          source={require('./assets/img1.png')}
          style={s.bgImagem}
          imageStyle={{ opacity: 0.5 }}
        >

          <Text style={s.subtituloRestaurante}>ALIMENTAÇÃO SAUDÁVEL</Text>
        </ImageBackground>
      </View>

      <View style={s.viewInferior}>

        <View style={s.viewFormulario}>
          <Text style={s.tituloSecao}>Dados do prato</Text>
          <TextInput style={s.input} placeholder="Nome da Refeição" value={nome} onChangeText={setNome} />
          <TextInput style={s.input} placeholder="Tipo (refeição, bebida, sobremesa)" value={tipo} onChangeText={setTipo} />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TextInput style={[s.input, { flex: 1 }]} placeholder="Calorias" value={calorias} onChangeText={setCalorias} keyboardType="numeric" />
            <TextInput style={[s.input, { flex: 1 }]} placeholder="Nome da Imagem" value={nomeImagem} onChangeText={setNomeImagem} />
          </View>
          <TextInput style={s.input} placeholder="Ingredientes" value={ingredientes} onChangeText={setIngredientes} multiline={true}/>


          <View style={{ marginTop: 10 }}>
            <TouchableOpacity style={s.botao} onPress={gravar}>
              <Text style={s.textoBotao}>
                {"Gravar"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={s.viewLista}>
          <FlatList
            data={listaPratos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemPrato prato={item} />}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
          />
        </View>

      </View>

      <Modal visible={modalVisivel} animationType="slide" transparent={true}>
        <View style={s.modalContainer}>
          <View style={s.modalConteudo}>
            <View style={s.modalHeader}>
              <Text style={s.modalTitulo}>Detalhes do Prato</Text>

              <View style={s.botaoFecharModal}>
                <Button title="X" onPress={() => setModalVisivel(false)} color="#999999" />
              </View>

            </View>

            {pratoSelecionado && (
              <View style={s.modalCorpo}>
                <Text style={s.modalLabel}>Nome da Refeição:</Text>
                <Text style={s.modalTexto}>{pratoSelecionado.nome}</Text>

                <Text style={s.modalLabel}>Tipo da Refeição:</Text>
                <Text style={s.modalTexto}>{pratoSelecionado.tipo}</Text>

                <Text style={s.modalLabel}>Calorias:</Text>
                <Text style={s.modalTexto}>{pratoSelecionado.calorias} kcal</Text>

                <Text style={s.modalLabel}>Ingredientes:</Text>
                <Text style={s.modalTexto}>{pratoSelecionado.ingredientes}</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>

    </View>
  );
}

const s = StyleSheet.create({
  containerPrincipal: { flex: 1 },

  viewSuperior: { flex: 3, backgroundColor: '#EFE4E1' },
  bgImagem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tituloRestaurante: { fontSize: 32, fontWeight: 'bold', color: '#2c3e50', textShadowColor: 'white', textShadowRadius: 5, marginTop: 20 },
  subtituloRestaurante: { fontSize: 18, color: '#34495e', fontWeight: '500' },

  viewInferior: { flex: 7 },

  viewFormulario: { flex: 1, padding: 15, backgroundColor: '#f0d3f0' },
  viewLista: { flex: 1, backgroundColor: 'white', padding: 10 },

  tituloSecao: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#2c3e50' },
  input: { backgroundColor: 'white', borderWidth: 1, borderColor: '#bdc7c2', borderRadius: 50, padding: 8, marginBottom: 8 },

  botao: {
    backgroundColor: 'grey',
    padding: 9,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 3,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  cardPrato: { alignItems: 'center', margin: 10, width: '95%', backgroundColor: '#bbebdf', borderRadius: 10, padding: 10, elevation: 3, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 15 },
  imagemCard: { width: 100, height: 100, borderRadius: 10, marginBottom: 5 },
  textoCard: { fontWeight: 'bold', textAlign: 'center', color: '#2c3e50' },

  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modalConteudo: { width: '85%', backgroundColor: '#f5daf3', borderRadius: 10, padding: 20, elevation: 10, justifyContent: 'center', alignItems: 'center' },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    position: 'relative'
  },

  botaoFecharModal: {
    position: 'absolute',
    right: 0,
    borderRadius: 25,
    backgroundColor: '#999999',
  },
  modalTitulo: { fontSize: 20, fontWeight: 'bold' },
  modalCorpo: { marginTop: 10 },
  modalLabel: { fontWeight: 'bold', color: '#7f8c8d', marginTop: 10 },
  modalTexto: { fontSize: 16, color: '#2c3e50', marginBottom: 5 }
});