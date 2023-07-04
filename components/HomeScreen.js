import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    const handleSkipPress = () => {
        navigation.navigate('Workouts');
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/workout.jpg')}
                style={styles.backgroundImage}
            >
                <Text style={styles.welcomeText}>Welcome</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 40,
    },
    buttonsContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
        skipButton: {
            position: 'absolute',
            top: 20,
            right: 20,
        },
    skipButtonText: {
        fontSize: 16,
        color: '#fff',
        textDecorationLine: 'underline',
    },
});

export default HomeScreen;