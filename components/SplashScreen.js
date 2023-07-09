import React, { useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simulating a delay before navigating to the next screen
        setTimeout(() => {
            navigation.replace('Welcome'); // Replace 'Home' with your desired screen name
        }, 3000); // Set the desired duration for the splash screen in milliseconds
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/splashWallpaper.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <Text style={styles.logo}>Welcome to optimal gains!</Text>
            </ImageBackground>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Set your desired background color for the splash screen
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', // Set your desired text color for the splash screen
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashScreen;