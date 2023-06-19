import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { normalize } from '../utils/scaleUtil';
import { QUOTES } from '../shared/QUOTES';
import { COLOR_HEART, COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';
import * as AuthorImages from '../shared/authorImages';
import Icon from 'react-native-vector-icons/FontAwesome'; // new import

const Quotes = () => {
    const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
    const [prevQuotes, setPrevQuotes] = useState([]);
    const [favorites, setFavorites] = useState([]); // new state variable for favorites

    useEffect(() => {
        const quote = QUOTES[quoteIndex];

        // Update the previous quotes state
        setPrevQuotes((prevQuotes) => {
            if (prevQuotes.length >= QUOTES.length) {
                // If all quotes have been shown, start with a new array containing the current quote
                return [quote.quote];
            } else {
                // Otherwise, add the current quote to the existing array of previous quotes
                return [...prevQuotes, quote.quote];
            }
        });
    }, [quoteIndex]);

    const getRandomQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * QUOTES.length);
        } while (prevQuotes.includes(QUOTES[newIndex].id)); // Check if the quote ID exists in prevQuotes
        setQuoteIndex(newIndex);
    };

    const toggleFavorite = () => {
        const quote = QUOTES[quoteIndex];

        // Toggle the favorites state
        setFavorites((prevFavorites) => {
            // Check if the current quote is already in the favorites array
            if (prevFavorites.some((favorite) => favorite.id === quote.id)) {
                // If it is, remove it from the favorites array
                return prevFavorites.filter((favorite) => favorite.id !== quote.id);
            } else {
                // If it is not, add it to the favorites array
                return [...prevFavorites, quote];
            }
        });

        // Log whether the quote has been favorited or unfavorited
        console.log(
            `Quote ${quote.id} ${favorites.some((favorite) => favorite.id === quote.id) ? 'favorited' : 'unfavorited'
            }`
        );
    };

    const { quote, firstName, lastName, image } = QUOTES[quoteIndex];
    const ImageComponent = AuthorImages[image] || AuthorImages.defaultImg;

    const isFavorite = favorites.some((favorite) => favorite.id === QUOTES[quoteIndex].id); // check if the current quote is favorited

    return (
        <View style={styles.container}>

            <View style={styles.quoteContainer}>
                <Image source={ImageComponent} style={styles.image} resizeMode="cover" />
                <View style={styles.quoteTextContainer}>
                    <View style={styles.quoteWrapper}>
                        <Text style={styles.quoteText}>{quote}</Text>
                    </View>
                    <Text style={styles.authorText}>
                        <Text style={styles.lastNameText}>{firstName}</Text> {lastName}
                    </Text>
                </View>
            </View>
            <Image
                style={styles.leafIcon}
                source={require('../assets/images/leafIcon.png')}
            />
            <Pressable onPress={getRandomQuote} style={styles.button}>
                <Text style={styles.text}>Inspire Me!</Text>
            </Pressable>
            <Pressable onPress={toggleFavorite}>
                <Icon style={styles.favIcon} name={isFavorite ? 'heart' : 'heart-o'} />
            </Pressable>

        </View>
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
        height: normalize(250), // Set a fixed height for the quote text container
        justifyContent: 'space-around',
    },
    quoteTextContainer: {
        //   flex: 1, // Allow the container to expand within the quoteWrapper
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
        // textTransform: 'uppercase',
        color: COLOR_SECONDARY,
        marginTop: normalize(10),
        fontWeight: '500', // Thinner font weight for the first name
    },
    lastNameText: {
        fontWeight: '300', // Heavier font weight for the last name
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(12),
        width: '60%',
        borderRadius: normalize(50),
        elevation: normalize(3),
        backgroundColor: COLOR_SECONDARY,
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
        fontSize: normalize(30),
        marginTop: normalize(20),
    },
    leafIcon: {
        height: normalize(50),
        width: normalize(50),
        resizeMode: 'contain',
        marginBottom: normalize(10),
        opacity: 0.8,
    },
});

export default Quotes;