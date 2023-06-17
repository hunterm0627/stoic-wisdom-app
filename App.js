import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import UserScreen from './screens/UserScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MissionScreen from './screens/MissionScreen';
import ContactScreen from './screens/ContactScreen';
import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Dashboard" component={HomeScreen} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
            <Drawer.Screen name="Mission" component={MissionScreen} />
            <Drawer.Screen name="Contact" component={ContactScreen} />
            <Drawer.Screen name="User" component={UserScreen} />
        </Drawer.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='StartScreen'>
                <Stack.Screen name='StartScreen' component={StartScreen} options={{ headerShown: false }}/>
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Home' component={HomeDrawer} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;


// working ver 1

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

// function App() {
//     return (
//         <NavigationContainer >
//             <Stack.Navigator initialRouteName='StartScreen'>
//                 <Stack.Screen name='StartScreen' component={StartScreen} options={{ title: 'Title Change Later' }}/>
//                 <Stack.Screen name='SignUp' component={SignUpScreen} />
//                 <Stack.Screen name='Login' component={LoginScreen} />
//                 <Stack.Screen name='Home' component={HomeScreen} />
//                 <Stack.Screen name='Mission' component={MissionScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };



// export default App;

// old ver

            {/* <Drawer.Navigator screenOptions={screenOptions} initialRouteName="StartScreen">
                <Drawer.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }}/>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Login" component={LoginScreen} />
                <Drawer.Screen name="Sign Up" component={SignUpScreen} />
                <Drawer.Screen name="User" component={UserScreen} />
                <Drawer.Screen name="Favorites" component={FavoritesScreen} />
                <Drawer.Screen name="Mission" component={MissionScreen} />
                <Drawer.Screen name="Contact" component={ContactScreen} />
            </Drawer.Navigator> */}


// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import StartScreen from './components/StartScreen';
// import LoginScreen from './components/LoginScreen';
// import SignUpScreen from './components/SignUpScreen';
// import HomeScreen from './screens/HomeScreen';

// import { useFonts } from 'expo-font';

// const Stack = createStackNavigator();

// const App = () => {
    
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Start">
//                 <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="SignUp" component={SignUpScreen} />
//                 <Stack.Screen name="Home" component={HomeScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default App;