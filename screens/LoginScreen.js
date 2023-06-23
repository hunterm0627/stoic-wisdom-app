import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, GRADIENT_SECONDARY, GRADIENT_PRIMARY } from '../shared/colors';

import { normalize } from '../utils/scaleUtil';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';

const LoginScreen = ({ route, navigation }) => {
    /* 2. Get the param */
    // const { itemId, otherParam } = route.params;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const loginUser = async () => {
        try {
            const userProfileJSON = await AsyncStorage.getItem('userProfile');
            if (userProfileJSON !== null) {
                const userProfile = JSON.parse(userProfileJSON);
                if (userProfile.email === email) {
                    navigation.navigate('Home');
                    console.log('Login was successful!');
                } else {
                    Alert.alert('Invalid user', 'User does not exist. Please sign up.');
                }
            } else {
                Alert.alert('No users', 'No users exist. Please sign up.');
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
    };

    return (
        <LinearGradient style={styles.container} colors={GRADIENT_PRIMARY}>
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
                placeholderTextColor={COLOR_ACCENT}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <GradientButton
                title="Login"
                colors={GRADIENT_SECONDARY}
                onPress={loginUser}
                style={{ marginTop: 20, width: '70%' }}
            />

            <TouchableWithoutFeedback onPress={handleLoginPress} >
                    <Text style={styles.textForgot}>Forgot Password?</Text>
                </TouchableWithoutFeedback>

            <Text style={styles.text}>
                Don't have an account?{'  '}
                <TouchableWithoutFeedback onPress={handleSignUpPress} >
                    <Text style={[styles.text, styles.linkText]}>Sign Up</Text>
                </TouchableWithoutFeedback>
            </Text>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: normalize(25),
        color: 'white',
        textAlignVertical: 'center'
        
    },
    input: {
        width: '80%',
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
    textForgot: {
        fontSize: normalize(15),
        letterSpacing: normalize(2),
        color: COLOR_ACCENT,
        fontWeight: '600',
        marginTop: normalize(15),
        marginBottom: normalize(70),
    },
    textLight: {
        color: COLOR_ACCENT,
    },
    linkText: {
        color: COLOR_SECONDARY,
        // fontWeight: '800',
    }

});

export default LoginScreen;