import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const HomeScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleWorkoutsPress = () => {
        // Handle navigation to workouts screen
        navigation.navigate('Workouts');
    };

    const handleNutritionPress = () => {
        // Handle navigation to nutrition screen
        navigation.navigate('Nutrition');
    };

    const handleLoginPress = () => {
        // Handle navigation to login screen
        navigation.navigate('Login');
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={toggleModal}
                backdropOpacity={0.5}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.modalOption} onPress={handleWorkoutsPress}>
                        <Text style={styles.modalOptionText}>Workouts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={handleNutritionPress}>
                        <Text style={styles.modalOptionText}>Nutrition</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={handleLoginPress}>
                        <Text style={styles.modalOptionText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.profileIconContainer} onPress={toggleModal}>
                    {/* Add your profile icon component here */}
                    <Text style={styles.profileIconText}>Profile</Text>
                </TouchableOpacity>
                <Text style={styles.heading}>Welcome to Fitness App</Text>
                <Text style={styles.subheading}>Stay fit, Stay healthy</Text>
                <Text style={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus gravida, scelerisque diam eu,
                    accumsan odio. Aenean pretium lobortis libero vel fermentum. Quisque id metus luctus, aliquam mi vitae,
                    pellentesque eros. Sed non viverra ipsum. Vestibulum vel enim dolor. Nullam eleifend nisi sit amet mauris
                    tempus feugiat. Sed euismod hendrerit commodo.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    contentContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 64,
    },
    profileIconContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#fff',
        zIndex: 1,
    },
    profileIconText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    modalContent: {
        position: 'absolute',
        top: 64,
        left: 16,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
    },
    modalOption: {
        marginBottom: 12,
    },
    modalOptionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
    },
    subheading: {
        fontSize: 18,
        marginBottom: 16,
        color: '#333',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
    },
});

export default HomeScreen;
