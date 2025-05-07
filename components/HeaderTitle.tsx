import React from 'react';
import { View, Text } from 'react-native';

export default function HeaderTitle({ title }: { title: string }) {
  const streak = 3;
  const level = 2;

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <Text style={{ fontSize: 16 }}>🔥 {streak}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
      <Text style={{ fontSize: 16 }}>🎓 {level}</Text>
    </View>
  );
}
