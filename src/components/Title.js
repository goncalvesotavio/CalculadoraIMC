import { Text, StyleSheet } from 'react-native';

// Componente que exibe o título da aplicação
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

// Estilos para o título
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#ffffff',
    }
});

export default Title;