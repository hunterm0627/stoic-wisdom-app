import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import { COLOR_ACCENT, COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';
import { normalize } from '../utils/scaleUtil';

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStoic}>STOIC</Text>
            <Text style={styles.titleWisdom}>WISDOM</Text>
            <Image
                style={styles.image}
                source={require('../assets/images/default.png')}
            />
            <Text style={styles.subtitle}>Mastering the art of tranquility,</Text>
            <Text style={styles.subtitle}>one quote at a time.</Text>


            {/* Login Button */}

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.loginBtn}
                onPress={() => {
                    navigation.navigate('Login', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            {/* Sign Up Button */}

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.signUpBtn}
                onPress={() => {
                    navigation.navigate('SignUp', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            >
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    subtitle: {
        fontSize: normalize(15),
        color: COLOR_ACCENT,
    },
    // Head image
    image: {
        width: normalize(220),
        height: normalize(220),
        marginTop: normalize(-35), // Adjust as needed to create overlap
        marginBottom: normalize(2),
        resizeMode: 'contain', // To maintain image aspect ratio
    },
    button: {
        backgroundColor: COLOR_SECONDARY,
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(40),
        borderRadius: normalize(50),
        marginTop: normalize(20),
        elevation: 3,
        backgroundColor: COLOR_SECONDARY,
        width: '68%',
    },
    signUpBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(40),
        borderColor: COLOR_SECONDARY,
        borderRadius: normalize(50),
        borderWidth: normalize(3),
        marginTop: normalize(15),
        elevation: 3,
        width: '60%',
    },
    text: {
        fontSize: normalize(16),
        color: 'white',
    }
});

export default StartScreen;
