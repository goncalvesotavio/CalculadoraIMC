import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Componente que exibe o resultado do IMC calculado
const Result = ({ imc }) => {
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

// Estilos aplicados ao texto do resultado
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
    },
});

export default Result;