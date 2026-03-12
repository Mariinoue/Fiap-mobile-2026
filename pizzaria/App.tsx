import React from "react";

import { View, Text, TextInput, Button } from "react-native";

function Principal() {
  return (
    <View style={{ flex: 1, marginTop: 40, alignItems: "center" }}>
      <Text style={{ fontSize: 32, marginBottom: 25 }}>Pizzaria - gestão do Cardapio</Text>
      <Text>Sabor da Pizza:</Text>
      <TextInput style={{ backgroundColor: "#a7c4f0ff" }} />
      <Text>Valor:</Text>
      <TextInput style={{ backgroundColor: "#a7c4f0ff" }} />
      <Text>Ingredientes:</Text>
      <TextInput style={{ backgroundColor: "#a7c4f0ff" }} />

      <Button title="Salvar" />

    </View>
  );
}
export default Principal;