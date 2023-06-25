import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const UserScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUpdate = () => {
        // Handle update
    };

    return (
        <View>
            <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} />
            <TextInput placeholder="Last Name"  value={lastName} onChangeText={setLastName} />
            <TextInput placeholder="Email"  value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Update" onPress={handleUpdate} />
        </View>
    );
};

export default UserScreen;