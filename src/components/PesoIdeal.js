import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Componente que exibe o intervalo de peso ideal com base no IMC
const PesoIdeal = ({ pesoIdeal }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.pesoIdeal}>Peso ideal mínimo: {pesoIdeal.minimo} kg</Text>
            <Text style={styles.pesoIdeal}>Peso ideal máximo: {pesoIdeal.maximo} kg</Text>
        </View>
    );
};

// Estilos aplicados ao componente
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
    },
    pesoIdeal: {
        fontSize: 18,
        textAlign: 'center',
        color: '#ffffff',
    },
});

export default PesoIdeal;