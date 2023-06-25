import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { COLOR_SECONDARY } from '../shared/colors';

const PrivacyPolicyScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.header}>Introduction</Text>
            <Text style={styles.text}>
                Welcome to our Privacy Policy page! This policy describes how we collect, use, and protect your personal information.
            </Text>
            <Text style={styles.subtitle}>1. Information Collection</Text>
            <Text style={styles.text}>
                We collect personal information that you voluntarily provide to us when using our app, such as your name, email address, and contact details. We may also collect anonymous usage data.
            </Text>
            <Text style={styles.subtitle}>2. Use of Information</Text>
            <Text style={styles.text}>
                We use the collected information to improve our app, provide customer support, and send you updates and promotional materials. We do not sell or share your personal information with third parties.
            </Text>
            <Text style={styles.subtitle}>3. Data Security</Text>
            <Text style={styles.text}>
                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that no data transmission over the internet or storage system can be guaranteed as 100% secure.
            </Text>
            <Text style={styles.subtitle}>4. Cookies</Text>
            <Text style={styles.text}>
                We may use cookies to enhance your browsing experience. You have the option to disable cookies in your browser settings, but this may affect the functionality of our app.
            </Text>
            <Text style={styles.subtitle}>5. Third-Party Links</Text>
            <Text style={styles.text}>
                Our app may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those websites. Please review the privacy policies of any third-party sites you visit.
            </Text>
            <Text style={styles.subtitle}>6. Changes to the Privacy Policy</Text>
            <Text style={styles.text}>
                We reserve the right to modify this privacy policy at any time. Any changes will be effective immediately upon posting the updated policy on our app.
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

export default PrivacyPolicyScreen;
