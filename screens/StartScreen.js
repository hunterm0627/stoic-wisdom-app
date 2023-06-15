import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { COLOR_INDIGO, COLOR_LAVENDER, COLOR_ORANGE } from '../shared/colors';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>STOIC</Text>
            <Text style={styles.title}>WISDOM</Text>
            <Text style={styles.subtitle}>Mastering the art of tranquility,</Text>
            <Text style={styles.subtitle}>one quote at a time.</Text>
            <Button style={styles.button} title="Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_INDIGO
    },
    title: {
        fontSize: 55,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white'
    },
    subtitle: {
        fontSize: 15,
        color: COLOR_LAVENDER
    },
    button: {
        backgroundColor: COLOR_ORANGE
    }
});

export default StartScreen;
