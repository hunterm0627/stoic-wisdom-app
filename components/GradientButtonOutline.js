import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { normalize } from '../utils/scaleUtil';

const GradientButtonOutline = ({ title, colors, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <LinearGradient
                colors={colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: normalize(50),
        borderWidth: normalize(3),
    },
    gradient: {
        paddingVertical: normalize(12),
        paddingHorizontal: normalize(24),
    },
    buttonText: {
        color: 'white',
        fontSize: normalize(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default GradientButtonOutline;
