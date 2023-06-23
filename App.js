import * as React from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContent } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { COLOR_ACCENT, COLOR_HEART, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, GRADIENT_PRIMARY } from './shared/colors';
import { normalize } from './utils/scaleUtil';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import StartScreen from './screens/StartScreen';
import PolicyScreen from './screens/PolicyScreen';
import TermsScreen from './screens/TermsScreen';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Main Stack Navigation

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='StartScreen'>
                <Stack.Screen name='StartScreen' component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Policy' component={PolicyScreen} />
                <Stack.Screen name='Terms' component={TermsScreen} />
                <Stack.Screen name='Home' component={HomeDrawer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Drawer Menu

function HomeDrawer({ label, focused }) {
    return (
        <Drawer.Navigator
            style={styles.navText}
            screenOptions={{ drawerStyle: { backgroundColor: '#fff', width: '70%' }, drawerActiveBackgroundColor: COLOR_SECONDARY }}
            initialRouteName="StartScreen"
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>Dashboard</Text>
                    )
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>Favorites</Text>
                    )
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>About</Text>
                    ),
                    drawerActiveBackgroundColor: COLOR_SECONDARY,
                }}
            />
            <Drawer.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>Contact</Text>
                    )
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>Profile</Text>
                    )
                }}
            />
        </Drawer.Navigator>
    );
}


function CustomDrawerContent(props) {
    const navigation = useNavigation();

    const resetFavoriteQuotes = async () => {
    try {
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        if (userLoggedIn === 'true') {
            await AsyncStorage.removeItem('favoriteQuotes');
            // Additional cleanup or reset logic if needed
        }
    } catch (error) {
        console.error('Error resetting favorites:', error);
    }
};

    useEffect(() => {
        const unFavorite = navigation.addListener('focus', resetFavoriteQuotes);

        return unFavorite;
    }, [navigation]);


    // additional menu buttons go here

    return (
        <DrawerContentScrollView {...props} >

            <View style={styles.drawerHeader}>
                <Image
                    source={require('./assets/images/default.png')}
                    style={styles.drawerImage}
                />
            </View>
            
            <DrawerItemList {...props} />

            <DrawerItem 
                label="Help"
                inactiveTintColor={COLOR_ACCENT}
                pressColor='lightgray'
                onPress={() => alert('For more assistance please go to our website by following this link. (link)')}
            // Add your own styling here
            />
            <DrawerItem
                label="Terms & Conditions"
                inactiveTintColor={COLOR_ACCENT}
                pressColor='lightgray'
                onPress={() => navigation.navigate('Terms')}
            // Add your own styling here
            />
            <DrawerItem
                label="Privacy Policy"
                inactiveTintColor={COLOR_ACCENT}
                pressColor='lightgray'
                onPress={() => navigation.navigate('Policy')}
            // Add your own styling here
            />
            <DrawerItem
                label="Log Out"
                inactiveTintColor={COLOR_SECONDARY}
                pressColor={COLOR_HEART}
                onPress={async () => {
                    await resetFavoriteQuotes();
                    navigation.navigate('Login');
                }}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerHeader: {
        height: 150,
        backgroundColor: COLOR_PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerText: {
        // color: COLOR_ACCENT,
        fontSize: 25,
        fontWeight: '700',
        letterSpacing: normalize(3),
        marginLeft: normalize(10),
        paddingVertical: normalize(3),
    },
    drawerImage: {
        height: normalize(100),
        width: normalize(100),
        // borderRadius: 50,
    },
    text: {
        // color: 'white',
    },
});

export default App;