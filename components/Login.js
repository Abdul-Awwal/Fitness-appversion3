import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/loginimage.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Login!</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username/Email"
                            placeholderTextColor="#fff"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
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
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    inputContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 200,
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    buttonContainer: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default LoginScreen;