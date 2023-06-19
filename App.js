import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { COLOR_ACCENT, COLOR_PRIMARY, COLOR_SECONDARY } from './shared/colors';
import { normalize } from './utils/scaleUtil';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import UserScreen from './screens/UserScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import StartScreen from './screens/StartScreen';
import PolicyScreen from './screens/PolicyScreen';
import TermsScreen from './screens/TermsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <Image
                    source={require('./assets/images/default.png')} 
                    style={styles.drawerImage}
                />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                onPress={() => alert('Link to help')}
            // Add your own styling here
            />
        </DrawerContentScrollView>
    );
}

function HomeDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{ drawerStyle: { backgroundColor: '#fff', width: '70%' } }}
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
                    )
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
                name="User"
                component={UserScreen}
                options={{
                    drawerLabel: () => (
                        <Text style={styles.drawerText}>User</Text>
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignUp'>
                <Stack.Screen name='StartScreen' component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name ='Policy' component={PolicyScreen} />
                <Stack.Screen name ='Terms' component={TermsScreen} />
                <Stack.Screen name='Home' component={HomeDrawer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    drawerHeader: {
        height: 200,
        backgroundColor: COLOR_PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerText: {
        color: COLOR_ACCENT,
        fontSize: 25,
        fontWeight: '700',
        letterSpacing: normalize(3),
        marginLeft: normalize(20),
        paddingVertical: normalize(5),
    },
    drawerImage: {
        height: normalize(100),
        width: normalize(100),
        // borderRadius: 50,
    },
    text: {
        color: 'white',
    }
});

export default App;


// Good code below

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from './screens/HomeScreen';
// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import UserScreen from './screens/UserScreen';
// import FavoritesScreen from './screens/FavoritesScreen';
// import MissionScreen from './screens/MissionScreen';
// import ContactScreen from './screens/ContactScreen';
// import StartScreen from './screens/StartScreen';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function HomeDrawer() {
//     return (
//         <Drawer.Navigator initialRouteName="Home" >
//             <Drawer.Screen name="Dashboard" component={HomeScreen} />
//             <Drawer.Screen name="Favorites" component={FavoritesScreen} />
//             <Drawer.Screen name="Mission" component={MissionScreen} />
//             <Drawer.Screen name="Contact" component={ContactScreen} />
//             <Drawer.Screen name="User" component={UserScreen} />
//         </Drawer.Navigator>
//     );
// }

// function App() {
//     return (
//         <NavigationContainer >
//             <Stack.Navigator initialRouteName='StartScreen'>
//                 <Stack.Screen name='StartScreen' component={StartScreen} options={{ headerShown: false }}/>
//                 <Stack.Screen name='SignUp' component={SignUpScreen} />
//                 <Stack.Screen name='Login' component={LoginScreen} />
//                 <Stack.Screen name='Home' component={HomeDrawer} options={{ headerShown: false }}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// export default App;