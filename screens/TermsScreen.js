import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { COLOR_SECONDARY } from '../shared/colors';


const TermsScreen = () => {
    return (

        <ScrollView contentContainerStyle={styles.container}>
            
            <Text style={styles.title}>Terms and Conditions</Text>
            <Text style={styles.header}>Introduction</Text>
            <Text style={styles.text}>
                Welcome to our Terms and Conditions page! Please read these terms and conditions carefully before using our app.
            </Text>
            <Text style={styles.subtitle}>1. Acceptance of Terms</Text>
            <Text style={styles.text}>
                By accessing and using our app, you accept and agree to be bound by the terms and conditions set forth in this agreement. If you do not agree to these terms, please do not use the app.
            </Text>
            <Text style={styles.subtitle}>2. Use of the App</Text>
            <Text style={styles.text}>
                You must be at least 18 years old or have parental consent to use this app. You agree not to use the app for any illegal or unauthorized purposes and to comply with all applicable laws and regulations.
            </Text>
            <Text style={styles.subtitle}>3. Intellectual Property</Text>
            <Text style={styles.text}>
                All content and materials provided in this app are the property of our company and are protected by intellectual property laws. You may not copy, distribute, or modify any content without prior written consent.
            </Text>
            <Text style={styles.subtitle}>4. Disclaimer</Text>
            <Text style={styles.text}>
                The information provided in this app is for general informational purposes only. We make no warranties or representations about the accuracy or completeness of the content. Use the app at your own risk.
            </Text>
            <Text style={styles.subtitle}>5. Limitation of Liability</Text>
            <Text style={styles.text}>
                In no event shall our company be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the app.
            </Text>
            <Text style={styles.subtitle}>6. Governing Law</Text>
            <Text style={styles.text}>
                These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in your jurisdiction.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        // color: COLOR_SECONDARY,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        color: COLOR_SECONDARY,

    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        color: COLOR_SECONDARY,

    },
    text: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default TermsScreen;
