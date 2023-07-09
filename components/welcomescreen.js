import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const handleLoginPress = () => {
        //on login press go to login
        navigation.navigate('Login');
    };
    //on signup press go to signup
    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };
        // on skip press go to home screen
    const handleSkipPress = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
                <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#454545',
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

export default WelcomeScreen;