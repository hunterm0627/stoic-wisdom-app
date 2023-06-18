import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { normalize } from '../utils/scaleUtil';
import { QUOTES } from '../shared/QUOTES';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';
import * as AuthorImages from '../shared/authorImages';

const Quotes = () => {
    const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
    const [prevQuotes, setPrevQuotes] = useState([]);

    useEffect(() => {
        const quote = QUOTES[quoteIndex];
        setPrevQuotes(prevQuotes => {
            if (prevQuotes.length === QUOTES.length) {
                return [quote.quote];
            }
            return [...prevQuotes, quote.quote];
        });
    }, [quoteIndex]);

    const getRandomQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * QUOTES.length);
        } while (prevQuotes.includes(QUOTES[newIndex].quote));
        if (prevQuotes.length === QUOTES.length) {
            setPrevQuotes([QUOTES[newIndex].quote]);
        }
        setQuoteIndex(newIndex);
    };

    const { quote, firstName, lastName, image } = QUOTES[quoteIndex];
    const ImageComponent = AuthorImages[image] || AuthorImages.defaultImg;

    return (
        <View style={styles.container}>
            <View style={styles.quoteContainer}>
                <Image source={ImageComponent} style={styles.image} resizeMode="cover" />
                <View style={styles.quoteTextContainer}>
                    <Text style={styles.quoteText}>{quote}</Text>
                    <Text style={styles.authorText}>- {firstName} {lastName}</Text>
                </View>
            </View>
            <Pressable onPress={getRandomQuote} style={styles.button}>
                <Text style={styles.text}>Inspire Me!</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(40),
    },
    quoteContainer: {
        marginVertical: normalize(20),
        alignItems: 'center',
    },
    image: {
        width: normalize(80),
        height: normalize(80),
        // borderRadius: 100,
    },
    quoteTextContainer: {
        marginTop: normalize(10),
        alignItems: 'center',
    },
    quoteText: {
        fontSize: normalize(16),
        textAlign: 'center',

    },
    authorText: {
        fontSize: normalize(14),
        textTransform: 'uppercase',
        color: COLOR_SECONDARY,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(12),
        width: '80%',
        borderRadius: normalize(50),
        elevation: normalize(3),
        backgroundColor: COLOR_SECONDARY,
    },
    text: {
        fontSize: normalize(16),
        lineHeight: normalize(21),
        fontWeight: '500',
        letterSpacing: normalize(0.25),
        color: 'white',
    },
});

export default Quotes;
