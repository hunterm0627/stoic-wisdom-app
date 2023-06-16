import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';
import { Button } from '@rneui/themed';

const LoginScreen = ({ route, navigation }) => {
    /* 2. Get the param */
    // const { itemId, otherParam } = route.params;

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
            <Text style={styles.title}>Stoic</Text>
            <Text style={[styles.title, { marginBottom: 30 }]}>Wisdom</Text>
            {/* <Text>itemID:{JSON.stringify(itemId)}</Text> */}
            {/* <Text>otherParam:{JSON.stringify(otherParam)}</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor= {COLOR_ACCENT}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor= {COLOR_ACCENT}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Pressable title="Login" onPress={handleLogin} style={styles.button} TouchableOpacity>
                <Text style={styles.text}>Login</Text>
            </Pressable>
            <Text style={styles.textLight}>Forgot Password?</Text>
            <Text style={styles.textLight}>Don't have an account? Sign Up!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: COLOR_PRIMARY,
        
    },
    title: {
        fontSize: 70,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    input: {
        width: '80%',
        height: 40,
        // borderWidth: 1,
        // borderColor: 'gray',
        color: COLOR_ACCENT,
        backgroundColor: COLOR_INPUT_LIGHT,
        marginBottom: 16,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: COLOR_SECONDARY,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textLight: {
        color: COLOR_ACCENT,
    },

});

export default LoginScreen;
