import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TeacherHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hola Maestro 👨‍🏫</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }
});
