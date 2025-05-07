    import React from 'react';
    import { Pressable, Text, View, StyleSheet } from 'react-native';

    type Props = {
    label: string;
    theme?: 'primary';
    onPress: () => void;
    additionalTexts?: string[];
    };

    export default function CharacterButton({ label, theme, onPress, additionalTexts }: Props) {
    return (
        <View style={styles.container}>
        <Pressable 
            style={({ pressed }) => [
            styles.button,
            theme === 'primary' && styles.primaryButton,
            pressed && styles.pressed
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{label}</Text>
            {additionalTexts?.map((text, index) => (
            <Text key={index} style={styles.additionalText}>{text}</Text>
            ))}
        </Pressable>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    button: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
    },
    primaryButton: {
        backgroundColor: '#1980E5',
    },
    pressed: {
        opacity: 0.7,
    },
    text: {
        fontSize: 24,
        color: '#000',
    },
    additionalText: {
        fontSize: 16,
        color: '#666',
    },
    });