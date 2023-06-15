import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        if (username === '1' && password === '1') {
            navigation.navigate('Home');
        } else {
            Alert.alert('Invalid username or password');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 16,
        paddingHorizontal: 8,
    }
});

export default LoginScreen;
