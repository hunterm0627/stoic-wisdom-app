import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { COLOR_PRIMARY, COLOR_ACCENT, COLOR_INPUT_LIGHT, COLOR_SECONDARY } from '../shared/colors'
// import { Card } from 'react-native-elements';
import { Card, Text } from '@rneui/themed';


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
        // backgroundColor: COLOR_SECONDARY,
        
    },
    text: {
        color: 'white',
    },
    title: {
        textAlign: 'left',
        marginLeft: '10%',
        marginVertical: '5%',
        letterSpacing: 4,
        color: 'white',
    },
    h4: {
        fontSize: 28,
        marginHorizontal: '10%',
        fontWeight: '400',
        color: 'slategray',
        letterSpacing: 2,
        lineHeight: 45,
    },
    dividerStyle: {
        backgroundColor: COLOR_SECONDARY, // Customize the color of the divider
        height: 15, // Customize the height of the divider
        marginVertical: 10, // Add vertical margin to the divider
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 100,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: 'white',
        width: '80%',
    },
    input: {
        width: '80%',
        height: 40,
        // borderWidth: 1,
        // borderColor: 'gray',
        color: COLOR_ACCENT,
        backgroundColor: 'white',
        marginVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
});

export default ContactScreen;