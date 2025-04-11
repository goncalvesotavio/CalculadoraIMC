import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Result from './Result';
import Classificacao from './Classificacao';
import PesoIdeal from './PesoIdeal'; 
import { useState } from "react";

// Definindo os estados para peso, altura, imc, classificação e peso ideal
const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [pesoIdeal, setPesoIdeal] = useState({ minimo: null, maximo: null });

// Função que calcula o IMC com base no peso e altura inseridos
const calcularIMC = () => {
  if (peso && altura && !isNaN(peso) && !isNaN(altura)) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);

    // Definindo a classificação do IMC com base nos valores calculados
    if (imcCalculado < 18.5) setClassificacao('Abaixo do peso');
      else if (imcCalculado <= 24.9) setClassificacao('Peso normal');
      else if (imcCalculado <= 29.9) setClassificacao('Sobrepeso');
      else if (imcCalculado <= 34.9) setClassificacao('Obesidade grau 1');
      else if (imcCalculado <= 39.9) setClassificacao('Obesidade grau 2');
      else setClassificacao('Obesidade grau 3 (obesidade mórbida)');

      // Calculando o peso mínimo e máximo ideal com base na altura
      const pesoMinimo = (18.5 * alturaMetros * alturaMetros).toFixed(2);
      const pesoMaximo = (24.9 * alturaMetros * alturaMetros).toFixed(2);
      setPesoIdeal({ minimo: pesoMinimo, maximo: pesoMaximo });
    };
  };

  //Retorno da interface do usuário
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <View style={styles.areaBotao}>
        <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
          <Text style={styles.textoBotao}>Calcular IMC</Text>
        </TouchableOpacity>
      </View>
      {imc && <Result imc={imc} />}
      {classificacao && <Classificacao classificacao={classificacao} />}
      {pesoIdeal.minimo && pesoIdeal.maximo && (
        <PesoIdeal pesoIdeal={pesoIdeal} />
      )}
    </View>
  );
};

// Estilos aplicados aos componentes
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#000000', 
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#ffffff',
  },
  areaBotao: {
    marginTop: 12,
    alignItems: 'center',
  },
  
  botao: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, 
  },
  
  textoBotao: {
    color: '#000', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormIMC;