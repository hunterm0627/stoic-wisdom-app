import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { COLOR_ACCENT, COLOR_INDIGO, COLOR_LAVENDER, COLOR_ORANGE, COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>STOIC</Text>
            <Text style={styles.title}>WISDOM</Text>
            <Text style={styles.subtitle}>Mastering the art of tranquility,</Text>
            <Text style={styles.subtitle}>one quote at a time.</Text>
            <Button
                title="Login"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Login', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_PRIMARY,
    },
    title: {
        fontSize: 55,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white'
    },
    subtitle: {
        fontSize: 15,
        color: COLOR_ACCENT,
    },
    button: {
        backgroundColor: COLOR_SECONDARY,
    }
});

export default StartScreen;
