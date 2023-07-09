import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen'; // Replace with your desired home screen component
import LoginScreen from './components/Login';
import SignUpScreen from './components/Register';
import WorkoutsScreen from './components/Workouts';
import WelcomeScreen from "./components/welcomescreen";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}

          />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Workouts" component={WorkoutsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;