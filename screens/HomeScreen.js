import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { normalize } from '../utils/scaleUtil';
import { COLOR_HEART, COLOR_SECONDARY, GRADIENT_SECONDARY, GRADIENT_WHITE } from '../shared/colors';
import * as AuthorImages from '../shared/authorImages';
import Icon from 'react-native-vector-icons/FontAwesome';
import { QUOTES } from '../QUOTES';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../components/GradientButton';

const Quotes = () => {
    const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
    const [prevQuotes, setPrevQuotes] = useState([]);
    const [favoriteQuotes, setFavoriteQuotes] = useState([]);

    useEffect(() => {
        retrieveFavoriteQuotes();
    }, []);

    useEffect(() => {
        const quote = QUOTES[quoteIndex];

        setPrevQuotes((prevQuotes) => {
            if (prevQuotes.length >= QUOTES.length) {
                return [quote.quote];
            } else {
                return [...prevQuotes, quote.quote];
            }
        });
    }, [quoteIndex]);

    useEffect(() => {
        saveFavoriteQuotes();
    }, [favoriteQuotes]);

    const retrieveFavoriteQuotes = useCallback(async () => {
        try {
            const favoriteQuotesJSON = await AsyncStorage.getItem('favoriteQuotes');
            if (favoriteQuotesJSON !== null) {
                setFavoriteQuotes(JSON.parse(favoriteQuotesJSON));
            } else {
                setFavoriteQuotes([]);  // set to empty array if no quotes are stored
            }
        } catch (error) {
            console.log('Error retrieving favorite quotes:', error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            retrieveFavoriteQuotes();
            return () => {}; // cleanup function
        }, [retrieveFavoriteQuotes])
    );

    const saveFavoriteQuotes = async () => {
        try {
            await AsyncStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
        } catch (error) {
            console.log('Error saving favorite quotes:', error);
        }
    };

    const getRandomQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * QUOTES.length);
        } while (prevQuotes.includes(QUOTES[newIndex].id));
        setQuoteIndex(newIndex);
    };

    const toggleFavorite = () => {
        const quote = QUOTES[quoteIndex];

        if (favoriteQuotes.some((favorite) => favorite.id === quote.id)) {
            setFavoriteQuotes((prevFavoriteQuotes) =>
                prevFavoriteQuotes.filter((favorite) => favorite.id !== quote.id)
            );
            console.log(`${quote.firstName} ${quote.lastName}quote (id ${quote.id}) has been unfavorited`)
        } else {
            setFavoriteQuotes((prevFavoriteQuotes) => [...prevFavoriteQuotes, quote]);
            console.log(`${quote.firstName} ${quote.lastName}quote (id ${quote.id}) has been favorited`)
        }
    };

    const { quote, firstName, lastName, image } = QUOTES[quoteIndex];
    const ImageComponent = AuthorImages[image] || AuthorImages.defaultImg;

    const isFavorite = favoriteQuotes.some((favorite) => favorite.id === QUOTES[quoteIndex].id);

    return (
        <LinearGradient style={styles.container} colors={GRADIENT_WHITE}>
            <View style={styles.quoteContainer}>
                <Image source={ImageComponent} style={styles.image} resizeMode="cover" />
                <View style={styles.quoteTextContainer}>
                    <View style={styles.quoteWrapper}>
                        <Text style={styles.quoteText} adjustsFontSizeToFit>
                            {quote}
                        </Text>
                    </View>
                    <Text style={styles.authorText}>
                        <Text style={styles.lastNameText}>{firstName}</Text> {lastName}
                    </Text>
                </View>
            </View>
            <Image style={styles.leafIcon} source={require('../assets/images/leafIcon.png')} />

            <GradientButton
                title="Inspire Me!"
                colors={GRADIENT_SECONDARY}
                onPress={getRandomQuote}
                style={{ marginVertical: normalize(2), width: '50%' }}
            />
            <Pressable onPress={toggleFavorite}>
                <Icon style={styles.favIcon} name={isFavorite ? 'heart' : 'heart-o'} />
            </Pressable>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(20),
    },
    quoteContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: normalize(10),
    },
    image: {
        width: normalize(70),
        height: normalize(70),
        marginBottom: normalize(10),
    },
    quoteWrapper: {
        height: normalize(250),
        justifyContent: 'space-around',
    },
    quoteTextContainer: {
        alignItems: 'center',
        paddingHorizontal: normalize(20),
        marginBottom: normalize(5),
    },
    quoteText: {
        fontSize: normalize(24),
        textAlign: 'center',
        lineHeight: normalize(36),
    },
    authorText: {
        fontSize: normalize(18),
        color: COLOR_SECONDARY,
        marginTop: normalize(10),
        fontWeight: '500',
    },
    lastNameText: {
        fontWeight: '300',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(12),
        width: '60%',
        borderRadius: normalize(50),
        elevation: normalize(3),
        backgroundColor: COLOR_SECONDARY,
        marginVertical: normalize(10),
    },
    text: {
        fontSize: normalize(16),
        lineHeight: normalize(21),
        fontWeight: '500',
        letterSpacing: normalize(2),
        color: 'white',
    },
    favIcon: {
        color: COLOR_HEART,
        fontSize: normalize(40),
        marginTop: normalize(20),
    },
    leafIcon: {
        height: normalize(50),
        width: normalize(50),
        resizeMode: 'contain',
        // marginBottom: normalize(10),
        opacity: 0.8,
    },
});

export default Quotes;
