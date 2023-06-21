import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoritesPage = () => {
    const [favoriteQuotes, setFavoriteQuotes] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        retrieveFavoriteQuotes();
    }, []);

    const retrieveFavoriteQuotes = async () => {
        try {
            const favoriteQuotesJSON = await AsyncStorage.getItem('favoriteQuotes');
            if (favoriteQuotesJSON !== null) {
                setFavoriteQuotes(JSON.parse(favoriteQuotesJSON));
            }
        } catch (error) {
            setError(true);
            console.error('Error fetching favorites:', error);
        }
    };

    const removeFavoriteQuote = async (id) => {
        try {
            const newFavoriteQuotes = favoriteQuotes.filter((quote) => quote.id !== id);
            setFavoriteQuotes(newFavoriteQuotes);
            await AsyncStorage.setItem('favoriteQuotes', JSON.stringify(newFavoriteQuotes));
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
            <TouchableOpacity onPress={() => removeFavoriteQuote(item.id)} style={styles.deleteBox}>
                <Animated.Text
                    style={[
                        styles.deleteText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}
                >
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
            <Text style={styles.header}>Favorites</Text>
            <FlatList
                data={favoriteQuotes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item)}>
                        <View style={styles.favoriteItem}>
                            <Text style={styles.quoteText}>{item.quote}</Text>
                        </View>
                    </Swipeable>
                )}
                contentContainerStyle={styles.container}
            />
        </View>
    );
};

const styles = {
    container: {
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    favoriteItem: {
        fontSize: 18,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    quoteText: {
        fontSize: 18,
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 15,
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
        color: 'red',
    },
};

export default FavoritesPage;
