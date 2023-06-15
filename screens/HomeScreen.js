import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const quotes = ["quote 1", "quote 2", "quote 3"]; // add your quotes here

const HomeScreen = () => {
    const [quote, setQuote] = useState('');

    const generateQuote = () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    };

    return (
        <View>
            <Text>Home Screen</Text>
            <Text>{quote}</Text>
            <Button title="Generate Quote" onPress={generateQuote} />
        </View>
    );
};

export default HomeScreen;



// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HomeScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Home Screen</Text>
//             <Text>Welcome to the home screen!</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
// });

// export default HomeScreen;
