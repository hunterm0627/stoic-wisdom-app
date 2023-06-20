import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { COLOR_PRIMARY, COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_SECONDARY } from '../shared/colors'
// import { Card } from 'react-native-elements';
import { Card, Text } from '@rneui/themed';
import { normalize } from '../utils/scaleUtil';


const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        // Handle submit
    };

    return ( 
        <View style={styles.container}>
            <Text h1 style={styles.title}>Contact Us</Text>
            <Text style={styles.text}>Questions or concerns?</Text>
            <Text style={styles.text}>Feel free to reach out!</Text>
            <TextInput style={styles.input} placeholder="Name" onChangeText={setName}  />
            <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail}  />
            <TextInput style={styles.input} placeholder="Message..." onChangeText={setMessage} multiline />

            <TouchableOpacity activeOpacity={0.7} onPress={handleSubmit}>
                <Pressable title="Submit" style={styles.submitBtn}>
                    <Text>Submit</Text>
                </Pressable>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_SECONDARY,
        
    },
    text: {
        color: 'white',
    },
    title: {
        textAlign: 'left',
        marginLeft: normalize(10),
        marginVertical: '5%',
        letterSpacing: normalize(4),
        color: 'white',
    },
    h4: {
        fontSize: normalize(28),
        marginHorizontal: '10%',
        fontWeight: '400',
        color: 'slategray',
        letterSpacing: normalize(2),
        lineHeight: normalize(45),
    },
    dividerStyle: {
        backgroundColor: COLOR_SECONDARY, // Customize the color of the divider
        height: normalize(15), // Customize the height of the divider
        marginVertical: normalize(10), // Add vertical margin to the divider
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
        // borderWidth: 1,
        // borderColor: 'gray',
        color: COLOR_ACCENT,
        backgroundColor: 'white',
        marginVertical: normalize(20),
        paddingHorizontal: normalize(20),
        borderRadius: normalize(20),
    },
});

export default ContactScreen;