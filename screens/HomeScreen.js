import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { normalize } from '../utils/scaleUtil';
import { COLOR_HEART, COLOR_PRIMARY, COLOR_SECONDARY } from '../shared/colors';
import * as AuthorImages from '../shared/authorImages';
import Icon from 'react-native-vector-icons/FontAwesome';
import { QUOTES } from '../QUOTES';

const Quotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [prevQuotes, setPrevQuotes] = useState([]);
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

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
    } else {
      setFavoriteQuotes((prevFavoriteQuotes) => [...prevFavoriteQuotes, quote]);
    }
  };

  const { quote, firstName, lastName, image } = QUOTES[quoteIndex];
  const ImageComponent = AuthorImages[image] || AuthorImages.defaultImg;

  const isFavorite = favoriteQuotes.some((favorite) => favorite.id === QUOTES[quoteIndex].id);

    return (
        <View style={styles.container}>
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
