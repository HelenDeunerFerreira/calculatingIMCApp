import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from "react-native";

export default function App() {

  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [resultadoText, setResultadoText] = useState("");
  
  const calcularIMC = () => {
    var alturaFormatada = Number(altura.toString().replace(',', '.'));
    var imc = massa/(alturaFormatada * alturaFormatada);

    if(resultado < 16){
      setResultadoText("Magreza Grave");
    } else if (resultado < 17){
      setResultadoText("Magreza Moderada");
    } else if (resultado < 18.5){
      setResultadoText("Magreza Leve");
    } else if (resultado < 25){
      setResultadoText("Saudável");
    } else if (resultado < 30){
      setResultadoText("Sobrepeso");
    } else if (resultado < 35){
      setResultadoText("Obesidade Grau I");
    } else if (resultado < 40){
      setResultadoText("Obesidade Grau II");
    } else {
      setResultadoText("Obesidade Grau III");
    }

    setResultado(imc); 
  }

  return (
    <View style={styles.container}>

      <View style = {styles.entradas}> 
        <TextInput placeholder = "Massa:" keyboardType = {Platform.OS === 'iOS' ? "numbers-and-punctuation" : 'numeric'} style = {styles.input} onChangeText = {(massa) => {setMassa(massa)}}></TextInput>
        <TextInput placeholder = "Altura:" keyboardType = {Platform.OS === 'iOS' ? "numbers-and-punctuation" : 'numeric'}  style = {styles.input} onChangeText = {(altura) => {setAltura(altura)}}></TextInput>
      </View>

      <TouchableOpacity onPress = {() => calcularIMC()} style = {styles.button}> 
        <Text style = {styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style = {styles.resultado}>{resultado.toFixed(2)}</Text>
      <Text style = {[styles.resultado, {fontSize: 25}]}>{resultadoText}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 80,
    width: "50%",
    textAlign: "center",
    fontSize: 30,
    marginTop: 24,
  },

  button: {
    backgroundColor: "#89ffa5"
  },

  entradas: {
    flexDirection: "row",
  },

  buttonText: {
    alignSelf: "center",
    padding: 15,
    fontSize: 20,
    color: "#6dc4a4",
    fontWeight: "bold",
  },

  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 40,
    padding: 15,
  }
});