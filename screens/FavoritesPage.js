import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { QUOTES } from '../QUOTES';

const FavoritesPage = () => {
    const [favoriteQuotes, setFavoriteQuotes] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                setFavoriteQuotes(QUOTES.filter((quote) => quote.favorite));
            } catch (error) {
                setError(true);
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, []);

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
                    <Text style={styles.favoriteItem}>{item.quote}</Text>
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
    },
    errorText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
        color: 'red',
    },
};

export default FavoritesPage;
