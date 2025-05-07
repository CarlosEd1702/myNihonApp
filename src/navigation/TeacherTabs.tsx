import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherHomeScreen from '@/screens/TeacherHomeScreen';
import AlphabetScreen from '@/screens/AlphabetScreen';
import TamagotchiARScreen from '@/screens/TamagotchiARScreen';
import CalendarScreen from '@/screens/CalendarScreen';
import HeaderTitle from '@/../components/HeaderTitle';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function TeacherTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Tamagotchi') iconName = 'game-controller';
          if (route.name === 'Alphabet') iconName = 'book';
          if (route.name === 'Calendar') iconName = 'calendar'; 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/*
      <Tab.Screen
        name="Inicio"
        component={TeacherHomeScreen}
        options={{
          headerTitle: () => <HeaderTitle title="Inicio" />,
        }}
      />
      */}
      <Tab.Screen name="Inicio" component={TeacherHomeScreen} />
      <Tab.Screen name="Alphabet" component={AlphabetScreen} />
      <Tab.Screen name="Tamagotchi" component={TamagotchiARScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
  );
}
