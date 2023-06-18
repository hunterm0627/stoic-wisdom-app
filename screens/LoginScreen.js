import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';
import { Button } from '@rneui/themed';
import { normalize } from '../utils/scaleUtil';

const LoginScreen = ({ route, navigation }) => {
    /* 2. Get the param */
    // const { itemId, otherParam } = route.params;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    const handleLogin = () => {
        // Perform login logic here
        if (email === '1' && password === '1') {
            navigation.navigate('Home');
        } else {
            Alert.alert('Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.absoluteText}>
                <Text style={styles.titleStoic}>STOIC</Text>
                <Text style={styles.titleWisdom}>WISDOM</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor= {COLOR_ACCENT}
                value={email}
                onChangeText={setEmail}
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
            <Text style={styles.textLight}>Don't have an account?{' '}
                <TouchableOpacity onPress={handleSignUpPress}>
                    <Text style={styles.linkText}>Sign Up!</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: COLOR_PRIMARY,
        
    },
    // Title styling
    titleStoic: {
        fontSize: normalize(73),
        fontWeight: '800',
        marginBottom: normalize(-28),
        color: 'white',
        includeFontPadding: false,
        textAlignVertical: 'center'
    },
    titleWisdom: {
        fontSize: normalize(50),
        fontWeight: '100',
        marginBottom: normalize(5),
        color: 'white',
        textAlignVertical: 'center'
        
    },
    input: {
        width: '80%',
        height: normalize(40),
        color: COLOR_ACCENT,
        backgroundColor: COLOR_INPUT_LIGHT,
        marginBottom: normalize(16),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(20),
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(12),
        width: '80%',
        borderRadius: normalize(50),
        elevation: normalize(3),
        backgroundColor: COLOR_SECONDARY,
    },
    text: {
        fontSize: normalize(16),
        lineHeight: normalize(21),
        fontWeight: '500',
        letterSpacing: normalize(0.25),
        color: 'white',
    },
    textLight: {
        color: COLOR_ACCENT,
    },
    linkText: {
        color: COLOR_ACCENT,
        fontWeight: '800',
    }

});

export default LoginScreen;