import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Componente que exibe a classificação do IMC
const Classificacao = ({ classificacao }) => {
    return (
        <Text style={styles.classificacao}>{classificacao}</Text>
    );
};

// Estilos aplicados ao texto da classificação
const styles = StyleSheet.create({
    classificacao: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff', 
    },
});

export default Classificacao;
