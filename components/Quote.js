import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { QUOTES } from '../shared/quotesData';

const Quote = () => {
    const [previousIndex, setPreviousIndex] = useState(-1);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const generateRandomQuote = () => {
        let newIndex = currentQuoteIndex;
        while (newIndex === currentQuoteIndex || newIndex === previousIndex) {
            newIndex = Math.floor(Math.random() * QUOTES.length);
        }
        setPreviousIndex(currentQuoteIndex);
        setCurrentQuoteIndex(newIndex);
    };

    const quote = QUOTES[currentQuoteIndex];

    return (
        <View style={styles.container}>
            <Text>{quote.name}</Text>
            <Text>{quote.quote}</Text>
            <Button style={styles.button} title="Generate Random Quote" onPress={generateRandomQuote} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        color: 'blue'
    }
});
export default Quote;
