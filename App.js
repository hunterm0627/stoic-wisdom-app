import * as React from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContent } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { COLOR_ACCENT, COLOR_HEART, COLOR_INPUT_LIGHT, COLOR_PRIMARY, COLOR_SECONDARY, GRADIENT_PRIMARY } from './shared/colors';
import { normalize } from './utils/scaleUtil';
import { Ionicons } from '@expo/vector-icons';

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

    const [fontsLoaded] = useFonts({
        Raleway_400Regular,
        Raleway_700Bold,
    });

    if (!fontsLoaded) {
        return null; // Render a fallback UI while the fonts are loading
    }

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
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name="home" color={COLOR_PRIMARY} size={size} style={styles.drawerIcon} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>Favorites</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name="heart" color={COLOR_PRIMARY} size={size} style={styles.drawerIcon} />
                    ),
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>About</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name="information-circle" color={COLOR_PRIMARY} size={size} style={styles.drawerIcon} />
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
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name="mail" color={COLOR_PRIMARY} size={size} style={styles.drawerIcon} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>Profile</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Ionicons name="person" color={COLOR_PRIMARY} size={size} style={styles.drawerIcon} />
                    ),
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
                <Text style={styles.titleStoic}>STOIC</Text>
                <Text style={styles.titleWisdom}> WISDOM</Text>
                {/* <Image
                    source={require('./assets/images/default.png')}
                    style={styles.drawerImage}
                /> */}
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
                icon={({ size }) => (
                    <Ionicons name="exit-outline" color={COLOR_SECONDARY} size={size} style={styles.drawerIcon}/>
                )}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerHeader: {
        flex: 1,
        // flexDirection: 'row',
        height: normalize(130),
        backgroundColor: COLOR_PRIMARY,
        alignItems: 'center',
        paddingTop: normalize(10),
        paddingRight: normalize(15),
        // verticalAlign: 'middle',
        // textAlign: 'center',
        // justifyContent: 'center',
    },
    drawerText: {
        // color: COLOR_ACCENT,
        fontSize: 25,
        fontWeight: '700',
        letterSpacing: normalize(3),
        // marginLeft: normalize(5),
        paddingVertical: normalize(3),
    },
    drawerImage: {
        height: normalize(80),
        width: normalize(80),
        // borderRadius: 50,
    },
    titleStoic: {
        fontFamily: 'Raleway_700Bold',
        fontWeight: '800',
        fontSize: normalize(55),
        marginBottom: normalize(-15),
        color: 'white',
        // includeFontPadding: false,
    },
    titleWisdom: {
        fontFamily: 'Raleway_400Regular',
        fontWeight: '100',
        fontSize: normalize(38),
        // marginBottom: normalize(25),
        color: 'white',
    },
    text: {
        // color: 'white',
    },
    drawerIcon: {
        marginRight: normalize(-10), // Adjust the horizontal margin as needed
        paddingVertical: 0, // Adjust the vertical padding as needed
    },
});

export default App;