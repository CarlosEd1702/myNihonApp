import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHomeScreen from '@/screens/StudentHomeScreen';
import AlphabetScreen from '@/screens/AlphabetScreen';
import TamagotchiARScreen from '@/screens/TamagotchiARScreen';
import CalendarScreen from '@/screens/CalendarScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function StudentTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Tamagotchi') iconName = 'game-controller';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Inicio" component={StudentHomeScreen} />
      <Tab.Screen name="Alphabet" component={AlphabetScreen} />
      <Tab.Screen name="Tamagotchi" component={TamagotchiARScreen} />

    </Tab.Navigator>
  );
}
