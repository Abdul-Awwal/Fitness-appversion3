import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

const WorkoutsScreen = () => {
    const [activeSections, setActiveSections] = useState([]);

    const SECTIONS = [
        {
            title: 'Simple Workouts',
            content: [
                { title: 'Workout 1', description: 'Description for Workout 1' },
                { title: 'Workout 2', description: 'Description for Workout 2' },
                // Add more workout objects as needed
            ],
        },
        {
            title: 'Intermediate Workouts',
            content: [
                { title: 'Workout 1', description: 'Description for Workout 1' },
                { title: 'Workout 2', description: 'Description for Workout 2' },
                // Add more workout objects as needed
            ],
        },
        {
            title: 'Advanced Workouts',
            content: [
                { title: 'Workout 1', description: 'Description for Workout 1' },
                { title: 'Workout 2', description: 'Description for Workout 2' },
                // Add more workout objects as needed
            ],
        },
    ];

    const renderSectionHeader = (section, index) => {
        const isActive = activeSections.includes(index);

        return (
            <TouchableOpacity
                style={[styles.sectionHeader, isActive && styles.activeSection]}
                onPress={() => toggleSection(index)}
            >
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </TouchableOpacity>
        );
    };

    const renderSectionContent = (section, index) => {
        if (!Array.isArray(section.content)) {
            return null; // Skip rendering if content is not an array
        }

        return (
            <Collapsible collapsed={!activeSections.includes(index)}>
                <View style={styles.sectionContent}>
                    {section.content.map((workout, workoutIndex) => (
                        <View key={workoutIndex} style={styles.workoutContainer}>
                            <Text style={styles.workoutTitle}>{workout.title}</Text>
                            <Text style={styles.workoutDescription}>{workout.description}</Text>
                        </View>
                    ))}
                </View>
            </Collapsible>
        );
    };

    const toggleSection = (index) => {
        const isActive = activeSections.includes(index);
        const updatedSections = isActive
            ? activeSections.filter((sectionIndex) => sectionIndex !== index)
            : [...activeSections, index];
        setActiveSections(updatedSections);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>What Workout Are We Doing Today?</Text>
            <ScrollView>
                {SECTIONS.map((section, index) => (
                    <View key={index}>
                        {renderSectionHeader(section, index)}
                        {renderSectionContent(section, index)}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    sectionHeader: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#f2f2f2',
        marginBottom: 8,
        borderRadius: 8,
    },
    activeSection: {
        backgroundColor: '#e5e5e5',
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    sectionContent: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    workoutContainer: {
        marginBottom: 8,
    },
    workoutTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#222',
    },
    workoutDescription: {
        fontSize: 14,
        color: '#666',
    },
});

export default WorkoutsScreen;
