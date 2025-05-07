import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { upcomingHolidays } from '../constants/holidays';

export default function CalendarScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Próximos Eventos</Text>
      <FlatList
        data={upcomingHolidays}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  cardText: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
