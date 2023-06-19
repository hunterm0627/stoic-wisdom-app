import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, Pressable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';
import { normalize } from '../utils/scaleUtil';

const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleTermsPress = () => {
        navigation.navigate('Terms');
    };
    const handlePolicyPress = () => {
        navigation.navigate('Policy');
    };
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };
    
    const handleSignUp = () => {
        if (firstName && lastName && password && email && termsAccepted) {
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
            <Text style={styles.title}>Sign Up</Text> 
            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor= {COLOR_ACCENT}
                value={firstName}
                onChangeText={setFirstName}
                />
                <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor= {COLOR_ACCENT}
                value={lastName}
                onChangeText={setLastName}
                />
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

            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={toggleTermsAcceptance}
                >
                {termsAccepted ? (
                    <Ionicons name="checkbox-outline" size={24} color={COLOR_SECONDARY} />
                    ) : (
                        <Ionicons name="square" size={24} color={COLOR_ACCENT} />
                        )}
                <Text style={styles.checkboxLabel}>
                    I agree to the{' '}
                    <Text style={styles.textLink} onPress={handleTermsPress}>Terms & Conditions</Text>{' '}
                    and{' '}
                    <Text onPress={handlePolicyPress}>Privacy Policy</Text>
                </Text>
            </TouchableOpacity>

            <Pressable title="Create Account" onPress={handleSignUp} style={styles.button} >
                <Text style={styles.textBtn}>Create Account</Text>
            </Pressable>

            <Text style={styles.text}>
                Already have an account?{'  '}
                <TouchableWithoutFeedback onPress={handleLoginPress} >
                    <Text style={[styles.text, styles.linkText]}>Log in</Text>
                </TouchableWithoutFeedback>
            </Text>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: normalize(16),
        backgroundColor: COLOR_PRIMARY,
    },
    bgShift: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY,
    },
    title: {
        fontSize: normalize(24),
        fontWeight: 'bold',
        marginBottom: normalize(16),
    },
    // Checkbox 
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: normalize(16),
    },
    checkboxLabel: {
        marginLeft: normalize(8),
        fontSize: normalize(11),
        color: 'white',
        fontSize: normalize(10),
    },
    // inputs
    input: {
        width: '80%',
        height: normalize(40),
        color: COLOR_ACCENT,
        backgroundColor: COLOR_INPUT_LIGHT,
        marginVertical: normalize(12),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(20),
        fontSize: normalize(18),

    },
    // button
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(10),
        marginTop: normalize(35),
        width: '80%',
        borderRadius: normalize(50),
        elevation: normalize(3),
        backgroundColor: COLOR_SECONDARY,
    },
    text: {
        fontSize: normalize(14),
        lineHeight: normalize(21),
        fontWeight: '500',
        letterSpacing: normalize(1.5),
        color: 'white',
    },
    textBtn: {
        fontSize: normalize(18),
        fontWeight: '400',
        color: 'white',
    },
    title: {
        color: 'white',
    },
    linkText: {
        color: COLOR_SECONDARY,
        // fontWeight: '800',
    },
    textPolicy: {
        fontSize: normalize(15),
        letterSpacing: normalize(2),
        color: COLOR_ACCENT,
        fontWeight: '600',
        marginTop: normalize(15),
        marginBottom: normalize(70),
    },
});

export default SignUpScreen;
