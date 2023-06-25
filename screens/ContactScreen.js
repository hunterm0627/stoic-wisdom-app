import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { COLOR_PRIMARY, COLOR_SECONDARY, GRADIENT_SECONDARY, GRADIENT_PRIMARY } from '../shared/colors'
import { Text } from '@rneui/themed';
import { normalize } from '../utils/scaleUtil';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';

const ContactScreen = () => {
    // State variables for form input values and error flags
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    // Form submit handler
    const handleSubmit = () => {
        let hasError = false;

        // Validate input fields
        if (!name) {
            setNameError(true);
            hasError = true;
        } else {
            setNameError(false);
        }

        if (!email) {
            setEmailError(true);
            hasError = true;
        } else {
            setEmailError(false);
        }

        if (!message) {
            setMessageError(true);
            hasError = true;
        } else {
            setMessageError(false);
        }

        // Show error alert if there are validation errors
        if (hasError) {
            Alert.alert(
                'Error',
                'Please fill in all required fields.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ]
            );
        } else {
            // Show success alert and clear form on successful submission
            Alert.alert(
                'Message Sent',
                'Your message has been submitted successfully.',
                [
                    { text: 'OK', onPress: () => console.log('Message sent successfully') }
                ]
            );

            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <LinearGradient style={styles.container} colors={GRADIENT_SECONDARY}>
            {/* Contact Us title */}
            <Text h1 style={styles.title}>Contact Us</Text>

            {/* Subtext */}
            <View style={styles.subText}>
                <Text style={styles.text}>Questions or concerns?</Text>
                <Text style={styles.text}>Feel free to reach out!</Text>
            </View>

            {/* Name input field */}
            <TextInput
                style={[styles.input, nameError && styles.inputError]}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            {nameError && <Text style={styles.errorText}>Please enter your name</Text>}

            {/* Email input field */}
            <TextInput
                style={[styles.input, emailError && styles.inputError]}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            {emailError && <Text style={styles.errorText}>Please enter a valid email</Text>}

            {/* Message input field */}
            <TextInput
                style={[styles.input, styles.messageInput, messageError && styles.inputError]}
                placeholder="Message..."
                value={message}
                onChangeText={setMessage}
                multiline
            />
            {messageError && <Text style={styles.errorText}>Please enter your message</Text>}

            {/* Submit button */}
            <GradientButton
                title="Submit"
                colors={GRADIENT_PRIMARY}
                onPress={handleSubmit}
                style={{ marginTop: normalize(20), width: '80%' }}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Align content at the top
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
    subText: {
        color: 'white',
        marginBottom: normalize(10),
    },
    title: {
        fontSize: normalize(35),
        marginTop: normalize(20),
        letterSpacing: normalize(4),
        fontWeight: '600',
        color: 'white',
    },
    dividerStyle: {
        backgroundColor: COLOR_SECONDARY,
        height: normalize(15),
        marginVertical: normalize(10),
        width: '80%',
        alignSelf: 'center',
        marginTop: normalize(30),
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(100),
        borderRadius: normalize(50),
        elevation: normalize(3),
        backgroundColor: 'white',
        width: '80%',
    },
    input: {
        width: '80%',
        height: normalize(40),
        color: COLOR_PRIMARY,
        backgroundColor: 'white',
        marginVertical: normalize(10),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(20),
    },
    inputError: {
        borderColor: 'darkred',
        borderWidth: normalize(3),
    },
    messageInput: {
        height: normalize(120),
        textAlignVertical: 'top',
        padding: normalize(15),
    },
    errorText: {
        color: 'white',
        backgroundColor: 'darkred',
        fontSize: normalize(12),
        padding: normalize(5),
    },
});

export default ContactScreen;
