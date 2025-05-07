import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function StudentHomeScreen() {
  return (
    <View>
      <Text>Bienvenido Estudiante 🧑‍🎓</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }
});