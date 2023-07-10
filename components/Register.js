import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height_ft, setHeightF] = useState("");
    const [height_in, setHeightI] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setText] = useState("");

    const handleRegister = () => {
        // Create a data object with the user details
        const data = {
            email,
            firstName,
            lastName,
            age,
            weight,
            heightF: height_ft,
            heightI: height_in,
            passwd: password,
        };

        fetch('http://localhost:3000/acc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(result => {
                console.log(result); // Handle the response from the server
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./assets/registerimage.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Register!</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="First Name"
                            placeholderTextColor="#fff"
                            onChangeText={(firstName) => setFirstName(firstName)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            placeholderTextColor="#fff"
                            onChangeText={(lastName) => setLastName(lastName)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Age"
                            placeholderTextColor="#fff"
                            onChangeText={(age) => setAge(age)}

                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Weight"
                            placeholderTextColor="#fff"
                            onChangeText={(weight) => setWeight(weight)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Height Feet"
                            placeholderTextColor="#fff"
                            onChangeText={(heightF) => setHeightF(heightF)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Height Inches"
                            placeholderTextColor="#fff"
                            onChangeText={(heightI) => setHeightI(heightI)}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
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

export default RegisterScreen;