import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Animated,ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
    const opacityValue = new Animated.Value(0);
    useEffect(() => {

        // Simulating a delay before navigating to the next screen
        setTimeout(() => {
            navigation.replace('Welcome'); // Replace 'Home' with your desired screen name
        }, 3000); // Set the desired duration for the splash screen in milliseconds
        // Start the animation
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('./assets/loading.json')}
                autoPlay
                loop
                style={styles.animation}
            />
            <Animated.Text style={[styles.welcomeText, { opacity: opacityValue }]}>
                Welcome
            </Animated.Text>
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
    animation: {
        width: 200,
        height: 200,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
});

export default SplashScreen;