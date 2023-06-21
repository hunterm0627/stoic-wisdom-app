import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { normalize } from '../utils/scaleUtil';

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
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button title="Save" onPress={saveUserProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: normalize(30),
        fontWeight: '500',
        marginBottom: normalize(20),
    },
    input: {
        width: '80%',
        height: normalize(40),
        marginBottom: normalize(10),
        paddingHorizontal: normalize(10),
        borderRadius: normalize(5),
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default ProfileScreen;
