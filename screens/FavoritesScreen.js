import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Animated, Alert, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Swipeable } from 'react-native-gesture-handler';
import { COLOR_PRIMARY } from '../shared/colors';

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState([
        { id: 1, name: 'Favorite 1', quote: 'Quote 1' },
        { id: 2, name: 'Favorite 2', quote: 'Quote 2' },
        { id: 3, name: 'Favorite 3', quote: 'Quote 3' },
        // Add your favorites objects here
    ]);

    const handleRemoveFavorite = (item) => {
        Alert.alert(
            'Remove Favorite',
            'Are you sure you want to remove this item from your favorites?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: () => {
                        const updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
                        setFavorites(updatedFavorites);
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const renderFavoriteItem = ({ item }) => {
        const renderRightActions = (progress, dragX) => {
            const transX = dragX.interpolate({
                inputRange: [-100, 0],
                outputRange: [0, 100],
                extrapolate: 'clamp',
            });

            return (
                <Animated.View
                    style={{
                        transform: [{ translateX: transX }],
                        width: 200,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity onPress={() => handleRemoveFavorite(item)}>
                        <View style={{ alignItems: 'center' }}>
                            <Icon name="trash" type="font-awesome" color="white" size={24} />
                            <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 5 }}>Delete</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            );
        };

        return (
            <Swipeable renderRightActions={renderRightActions} onSwipeableRightOpen={() => handleRemoveFavorite(item)}>
                <Card style={styles.favBox} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
                    <Text style={{ fontSize: 16, marginTop: 10, color: 'white' }}>{item.quote}</Text>
                </Card>
            </Swipeable>
        );
    };

    return (
        <View>
            <FlatList
                data={favorites}
                renderItem={renderFavoriteItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    favBox: {
        // flex: 1,
        borderRadius: 10,
        height: 200,
        backgroundColor: COLOR_PRIMARY,
    }
});

export default FavoritesScreen;
