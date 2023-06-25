import React from 'react';
import { COLOR_SECONDARY, GRADIENT_WHITE } from '../shared/colors';
import { StyleSheet, } from 'react-native';
import { Card, Text } from '@rneui/themed';
import { normalize } from '../utils/scaleUtil';
import { LinearGradient } from 'expo-linear-gradient';

const AboutScreen = () => {


    return (
        <LinearGradient style={styles.container} colors={GRADIENT_WHITE}>
            <Text h1 style={styles.title}>About</Text>
            <Text h4 h4Style={styles.h4}>
                At the Stoic Wisdom App, our mission is to promote the principles of Stoicism and encourage individuals to embrace a more mindful, resilient, and virtuous approach to life. We believe that the timeless wisdom of Stoicism can provide valuable guidance in navigating the challenges and complexities of the modern world.
            </Text>
            <Card.Divider style={styles.dividerStyle} />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    title: {
        // textAlign: 'left',
        // marginLeft: '10%',
        marginVertical: '5%',
        fontWeight: '600',
        letterSpacing: normalize(4),
    },
    h4: {
        fontSize: normalize(20),
        marginHorizontal: '10%',
        fontWeight: '400',
        color: 'slategray',
        letterSpacing: normalize(2),
        lineHeight: normalize(28),
    },
    dividerStyle: {
        backgroundColor: COLOR_SECONDARY, // Customize the color of the divider
        height: normalize(15), // Customize the height of the divider
        width: '80%',
        alignSelf: 'center',
        marginTop: normalize(15),
    },
});

export default AboutScreen;