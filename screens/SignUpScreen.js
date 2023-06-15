import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSignUp = () => {
        if (username && password && email && termsAccepted) {
            Alert.alert('Sign up successful');
        } else {
            Alert.alert('Please fill in all fields and accept terms');
        }
    };

    const toggleTermsAcceptance = () => {
        setTermsAccepted(!termsAccepted);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={toggleTermsAcceptance}
            >
                {termsAccepted ? (
                    <Ionicons name="checkbox-outline" size={24} color="green" />
                ) : (
                    <Ionicons name="square-outline" size={24} color="gray" />
                )}
                <Text style={styles.checkboxLabel}>A agree to the Terms & Conditions and Privacy Policy</Text>
            </TouchableOpacity>
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
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
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 11
    },
});

export default SignUpScreen;
