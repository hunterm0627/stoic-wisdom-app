import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        // Handle submit
    };

    return (
        <View>
            <TextInput placeholder="Name" onChangeText={setName} />
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Message" onChangeText={setMessage} multiline />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default ContactScreen;