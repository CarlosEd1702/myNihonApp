import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import AlphabetButton from '../../components/AlphabetButton';
import CharacterButton from '../../components/CharacterButton';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

// Definimos un tipo para las claves del objeto CHARACTERS
type AlphabetType = 'hiragana' | 'katakana' | 'kanji';

// Definimos el tipo para los caracteres
interface Character {
  char: string;
  reading: string;
}

// Objeto de caracteres con tipo explícito
const CHARACTERS: Record<AlphabetType, Character[]> = {
  hiragana: [
    { char: "あ", reading: "a" },
    { char: "い", reading: "i" },
    { char: "う", reading: "u" },
    { char: "え", reading: "e" },
    { char: "お", reading: "o" }
  ],
  katakana: [
    { char: "ア", reading: "a" },
    { char: "イ", reading: "i" },
    { char: "ウ", reading: "u" },
    { char: "エ", reading: "e" },
    { char: "オ", reading: "o" }
  ],
  kanji: [
    { char: "一", reading: "1" },
    { char: "二", reading: "2" },
    { char: "三", reading: "3" },
    { char: "四", reading: "4" },
    { char: "五", reading: "5" }
  ]
};

// Objeto de sonidos

const SOUNDS: Record<string, Record<string, any>> = {  vowels: {
    "a": require('../../assets/audio/vowels/a.mp3'),
    "i": require('../../assets/audio/vowels/i.mp3'),
    "u": require('../../assets/audio/vowels/u.mp3'),
    "e": require('../../assets/audio/vowels/e.mp3'),
    "o": require('../../assets/audio/vowels/o.mp3')
  },
  numbers: {
    "1": require('../../assets/audio/numbers/1.mp3'),
    "2": require('../../assets/audio/numbers/2.mp3'),
    "3": require('../../assets/audio/numbers/3.mp3'),
    "4": require('../../assets/audio/numbers/4.mp3'),
    "5": require('../../assets/audio/numbers/5.mp3')
  }
};

export default function AlphabetScreen() {
  const [activeAlphabet, setActiveAlphabet] = useState<AlphabetType>('hiragana');
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  // Función para reproducir sonido
  const playSound = async (reading: string) => {
    try {
      // Detener y liberar el sonido anterior si existe
      if (sound) {
        await sound.unloadAsync();
      }

      // Determinar la categoría de sonido según el alfabeto activo
      const soundCategory = activeAlphabet === 'kanji' ? 'numbers' : 'vowels';
      
      // Cargar y reproducir el nuevo sonido
      const { sound: newSound } = await Audio.Sound.createAsync(
        SOUNDS[soundCategory][reading]
      );
      setSound(newSound);
      await newSound.playAsync();
    } catch (error) {
      console.error("Error al reproducir sonido:", error);
    }
  };

  // Limpieza al desmontar el componente
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.buttonsContainer}>
        <AlphabetButton
          theme={activeAlphabet === 'hiragana' ? 'primary' : undefined}
          label="Hiragana"
          onPress={() => setActiveAlphabet('hiragana')}
        />
        <AlphabetButton
          theme={activeAlphabet === 'katakana' ? 'primary' : undefined}
          label="Katakana"
          onPress={() => setActiveAlphabet('katakana')}
        />
        <AlphabetButton
          theme={activeAlphabet === 'kanji' ? 'primary' : undefined}
          label="Kanji"
          onPress={() => setActiveAlphabet('kanji')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to Expo!</Text>
      </View>

      <View style={styles.charactersContainer}>
        {CHARACTERS[activeAlphabet].map((character, index) => (
          <CharacterButton
            key={index}
            theme="primary"
            label={character.char}
            onPress={() => playSound(character.reading)}
            additionalTexts={[character.reading]}
          />
        ))}
      </View>
    </ScrollView>
  );
}

// Tus estilos se mantienen exactamente igual
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  charactersContainer: {
    width: '120%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});