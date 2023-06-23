import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, Pressable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, GRADIENT_PRIMARY, GRADIENT_SECONDARY } from '../shared/colors';
import { normalize } from '../utils/scaleUtil';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';

const SignUpScreen = ({ navigation }) => {

    // useStates

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');


    // navigation onPress events

    const handleTermsPress = () => {
        navigation.navigate('Terms');
    };
    const handlePolicyPress = () => {
        navigation.navigate('Policy');
    };
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    // Create Account button logic

    const signUpUser = async () => {
        if (!firstName || !lastName || !email || !password || !termsAccepted) {
            setError('Please fill in all fields and accept terms');
            return;
        }

        const userProfile = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password, // Note: It's not secure to store passwords in AsyncStorage in a production app
        };

        console.log(userProfile);

        try {
            await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
            Alert.alert('Sign up successful');
            navigation.navigate('Home');
            console.log('Sign Up was successful!');
        } catch (error) {
            console.log('Error during sign up:', error);
        }
    };

    // Checkbox

    const toggleTermsAcceptance = () => {
        setTermsAccepted(!termsAccepted);
    };

    return (
        <LinearGradient style={styles.container} colors={GRADIENT_PRIMARY} >
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor={COLOR_ACCENT}
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor={COLOR_ACCENT}
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={COLOR_ACCENT}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={COLOR_ACCENT}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.checkboxContainer} onPress={toggleTermsAcceptance}>
                {termsAccepted ? (
                    <Ionicons name="checkbox-outline" size={24} color={COLOR_SECONDARY} />
                ) : (
                    <Ionicons name="square" size={24} color={COLOR_ACCENT} />
                )}
                <Text style={styles.checkboxLabel}>
                    I agree to the{' '}
                    <Text style={styles.textLink} onPress={handleTermsPress}>
                        Terms & Conditions
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.textLink} onPress={handlePolicyPress}>
                        Privacy Policy
                    </Text>
                </Text>
            </TouchableOpacity>

            {error ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            ) : null}
            <GradientButton
                title="Create Account"
                colors={GRADIENT_SECONDARY}
                onPress={signUpUser}
                style={{ marginTop: normalize(20), marginBottom: normalize(20), width: '70%' }}
            />

            <Text style={styles.text}>
                Already have an account?{' '}
                <Text style={styles.textLink} onPress={handleLoginPress}>
                    Log in.
                </Text>{' '}
            </Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: normalize(16),
        backgroundColor: COLOR_PRIMARY,
    },
    title: {
        fontSize: normalize(30),
        color: 'white',
        fontWeight: '500',
        marginVertical: normalize(16),
    },
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
    input: {
        width: '85%',
        height: normalize(40),
        color: 'white',
        backgroundColor: COLOR_INPUT_LIGHT,
        marginVertical: normalize(12),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(20),
        fontSize: normalize(18),
    },
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
    textLink: {
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
    errorContainer: {
        backgroundColor: 'white',
        borderRadius: normalize(8),
        padding: normalize(8),
        marginTop: normalize(8),
    },
    errorText: {
        color: 'red',
        fontSize: normalize(14),
        textAlign: 'center',
    },
});

export default SignUpScreen;

