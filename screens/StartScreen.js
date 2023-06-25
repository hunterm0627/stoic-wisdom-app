import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLOR_ACCENT, COLOR_PRIMARY, COLOR_SECONDARY, GRADIENT_SECONDARY, GRADIENT_PRIMARY } from '../shared/colors';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { normalize } from '../utils/scaleUtil';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';


const StartScreen = ({ navigation }) => {

    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Raleway_700Bold,
    });

    if (!fontsLoaded) {
        return null; // Render a fallback UI while the fonts are loading
    }

    return (
        <LinearGradient style={styles.container} colors={GRADIENT_PRIMARY}>
            <Text style={styles.titleStoic}>STOIC</Text>
            <Text style={styles.titleWisdom}>WISDOM</Text>
            <Image
                style={styles.image}
                source={require('../assets/images/default.png')}
            />
            <Text style={styles.subtitle}>Mastering the art of tranquility,</Text>
            <Text style={styles.subtitle}>one quote at a time.</Text>

            {/* Login Button */}

            <GradientButton
                title="Login"
                colors={GRADIENT_SECONDARY}
                onPress={() => { navigation.navigate('Login') }}
                style={{ marginTop: 20, width: '70%' }}
                textStyle={styles.buttonText}
            />

            {/* Sign Up Button */}

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.signUpBtn}
                onPress={() => {navigation.navigate('SignUp')}}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
        </LinearGradient>
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
        fontFamily: 'Raleway_700Bold',
        fontWeight: '800',
        fontSize: normalize(90),
        marginBottom: normalize(-35),
        color: 'white',
        includeFontPadding: false,
        // textAlignVertical: 'center'
    },
    titleWisdom: {
        fontFamily: 'Raleway_400Regular',
        fontWeight: '100',
        fontSize: normalize(60),
        marginBottom: normalize(5),
        color: 'white',
        // textAlignVertical: 'center'
    },
    subtitle: {
        fontSize: normalize(15),
        color: COLOR_ACCENT,
    },
    // Head image
    image: {
        width: normalize(270),
        height: normalize(270),
        marginTop: normalize(-35), // Adjust as needed to create overlap
        marginBottom: normalize(2),
        resizeMode: 'contain', // To maintain image aspect ratio
    },
    button: {
        backgroundColor: COLOR_SECONDARY,
    },
    // buttonText: {
    //     fontSize: normalize(20),
    // },
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
        fontSize: normalize(20),
        color: 'white',
    }
});

export default StartScreen;
