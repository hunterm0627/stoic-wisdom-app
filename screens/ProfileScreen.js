import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, InputLabel, StyleSheet, Button, Alert } from 'react-native';
import { COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, GRADIENT_PRIMARY, GRADIENT_SECONDARY, GRADIENT_WHITE } from '../shared/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { normalize } from '../utils/scaleUtil';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';

const ProfileScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        retrieveUserProfile();
    }, []);

    const retrieveUserProfile = async () => {
        try {
            const userProfileJSON = await AsyncStorage.getItem('userProfile');
            if (userProfileJSON !== null) {
                const userProfile = JSON.parse(userProfileJSON);
                setFirstName(userProfile.firstName);
                setLastName(userProfile.lastName);
                setEmail(userProfile.email);
            }
        } catch (error) {
            console.log('Error retrieving user profile:', error);
        }
    };

    const saveUserProfile = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            const userProfile = { firstName, lastName, email, password };
            await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
            console.log('User profile saved:', userProfile);
        } catch (error) {
            console.log('Error saving user profile:', error);
        }
    };

    return (
        <LinearGradient style={styles.container} colors={GRADIENT_WHITE}>
            <View style={styles.content}>
                <Text style={styles.title}>Profile</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>New Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm New Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm New Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <GradientButton
                title="Update"
                colors={GRADIENT_SECONDARY}
                onPress={saveUserProfile}
                style={{ marginTop: 20, width: '70%' }}
            />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
      },
      content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    title: {
        fontSize: normalize(30),
        fontWeight: '500',
        marginBottom: normalize(20),
    },
    inputContainer: {
        marginBottom: normalize(10),
        width: '80%',
    },
    label: {
        fontSize: normalize(12),
        marginBottom: normalize(5),
    },
    input: {
        // width: '80%',
        height: normalize(40),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(100),
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default ProfileScreen;