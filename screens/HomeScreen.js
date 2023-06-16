import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { QUOTES } from '../shared/QUOTES';
import defaultImg from '../assets/images/defaultImg.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
// Import other required images here

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [name, setName] = useState('');

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * QUOTES.length);
        const randomQuote = QUOTES[randomIndex];

        const newArr = QUOTES[0];
        const { name } = newArr;
        console.log(name);

        if (randomQuote.quote === quote) {
            getRandomQuote();
        }

        setQuote(randomQuote.quote);
        setName(randomQuote.name);
    };

    const getImageSource = () => {
        switch (name.toLowerCase()) {
            case 'name1':
                return image1;
            case 'name2':
                return image2;
            // Add cases for other image names
            default:
                return defaultImg;
        }
    };

    return (
        <View style={styles.container}>
            {quote && name && (
                <View style={styles.quoteContainer}>
                    <Image source={getImageSource()} style={styles.image} resizeMode="cover" />
                    <View style={styles.quoteTextContainer}>
                        <Text style={styles.quoteText}>{quote}</Text>
                        <Text style={styles.authorText}>
                            - {name.split('_').length > 1 ? `${name.split('_')[0]} ${name.split('_')[1]}` : name}
                        </Text>
                    </View>
                </View>
            )}
            <Button title="Inspire Me" onPress={getRandomQuote} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    quoteContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    quoteTextContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    quoteText: {
        fontSize: 16,
        textAlign: 'center',
    },
    authorText: {
        fontSize: 14,
        textTransform: 'uppercase',
        color: '#999',
    },
});

export default Quotes;



// import React, { useState } from 'react';
// import { Button, Text, View } from 'react-native';


// const quotes = ["quote 1", "quote 2", "quote 3"]; // add your quotes here

// const HomeScreen = () => {
//     const [quote, setQuote] = useState('');

//     const generateQuote = () => {
//         const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//         setQuote(randomQuote);
//     };

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Text>{quote}</Text>
//             <Button title="Generate Quote" onPress={generateQuote} />
//         </View>
//     );
// };

// export default HomeScreen;



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
