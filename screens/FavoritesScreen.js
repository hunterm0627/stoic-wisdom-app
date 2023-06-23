import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { normalize } from '../utils/scaleUtil';
import { COLOR_HEART } from '../shared/colors';
import { Text as RneuiText } from '@rneui/themed';

const FavoritesScreen = () => {
    const [favoriteQuotes, setFavoriteQuotes] = useState([]);
    const [error, setError] = useState(false);



    const retrieveFavoriteQuotes = useCallback(async () => {
        try {
            const favoriteQuotesJSON = await AsyncStorage.getItem('favoriteQuotes');
            if (favoriteQuotesJSON !== null) {
                setFavoriteQuotes(JSON.parse(favoriteQuotesJSON));
            }
        } catch (error) {
            setError(true);
            console.error('Error fetching favorites:', error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            retrieveFavoriteQuotes();
            return () => {}; // cleanup function
        }, [retrieveFavoriteQuotes])
    );

    const removeFavoriteQuote = async (item) => {
        const { id } = item;
        const quote = favoriteQuotes.find((favorite) => favorite.id === id);
        try {
            const newFavoriteQuotes = favoriteQuotes.filter((quote) => quote.id !== id);
            setFavoriteQuotes(newFavoriteQuotes);
            await AsyncStorage.setItem('favoriteQuotes', JSON.stringify(newFavoriteQuotes));
            console.log(`${quote.firstName} ${quote.lastName}quote (id ${id}) has been removed from favorites list`);
        } catch (error) {
            setError(true);
            console.error('Error removing favorite:', error);
        }
    };

    const renderRightActions = (progress, dragX, item) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });
        return (
            <TouchableOpacity onPress={() => removeFavoriteQuote(item, item.quote)} style={styles.deleteBox}>
                <Animated.Text
                    style={[
                        styles.deleteText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}
                >
                    <Text>Delete    </Text>
                    <Icon name="trash" size={30} color="#FFF" />
                </Animated.Text>
            </TouchableOpacity>
        );
    };

    if (error) {
        return (
            <View>
                <Text style={styles.errorText}>Error fetching favorites. Please try again later.</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <RneuiText h1 style={styles.title}>Favorites</RneuiText>
                <Icon style={styles.favIcon} name='heart' />
            </View>

            {favoriteQuotes.length === 0 ? (
                <View style={styles.noFavoritesContainer}>
                    <Text style={styles.noFavoritesText}>
                        You haven't selected any favorites.
                        {'\n'}
                        <Icon style={styles.favIconSad} name='frown-o' />
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={favoriteQuotes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item)}>
                            <View style={styles.favoriteItem}>
                                <Text style={styles.quoteText}>{item.quote}</Text>
                                <Text style={styles.quoteName}>{item.firstName}{` `}{item.lastName}</Text>
                            </View>
                        </Swipeable>
                    )}
                    contentContainerStyle={styles.container}
                />
            )}
        </View>
    );
};

const styles = {
    container: {
        marginVertical: normalize(10),
        paddingHorizontal: normalize(20),
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: normalize(20),
    },
    title: {
        fontSize: normalize(35),
        // marginTop: normalize(20),
        letterSpacing: normalize(4),
        fontWeight: '600',
    },
    favIcon: {
        marginLeft: normalize(10),
        fontSize: normalize(24),
        color: COLOR_HEART, // Set the desired color for the heart icon
    },
    favoriteItem: {
        fontSize: normalize(15),
        marginBottom: normalize(10),
        padding: normalize(10),
        backgroundColor: '#fff',
        borderLeftWidth: normalize(10), // Add this line to add a border to the left side
        borderLeftColor: COLOR_HEART, // Set the desired color for the border
    },
    quoteText: {
        fontSize: normalize(18),
        padding: normalize(5),
    },
    quoteName: {
        fontSize: normalize(18),
        padding: normalize(5),
        color: COLOR_HEART,
    },
    deleteBox: {
        flex: 1,
        flexDirection: 'row', // Add this line to make the contents align horizontally
        backgroundColor: COLOR_HEART,
        justifyContent: 'flex-end', // Update this line to align the contents at the end
        alignItems: 'center', // Update this line to align the contents vertically centered
        // paddingHorizontal: normalize(),
        marginBottom: normalize(10),
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: normalize(18),
        // marginLeft: normalize(10), // Add this line to add spacing between the icon and the text
    },
    errorText: {
        fontSize: normalize(18),
        textAlign: 'center',
        marginVertical: normalize(20),
        color: 'red',
    },
    noFavoritesContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noFavoritesText: {
        fontSize: normalize(15),
        textAlign: 'center',
    },
    centerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    favIconSad: {
        // Add any additional styles for the icon
        // marginLeft: normalize(10),
        fontSize: normalize(40),
        color: COLOR_HEART, // Set the desired color for the heart icon
    },
};

export default FavoritesScreen;
