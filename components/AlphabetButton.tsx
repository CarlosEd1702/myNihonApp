import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

// En tu componente AlphabetButton
export default function AlphabetButton({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
        <Pressable style={[styles.button, { backgroundColor: '#1980E5' }]} onPress={onPress}>
          <Text style={[styles.buttonLabelBigBold, { color: '#fff' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  // Botón INACTIVO (sin tema primary)
  return (
    <View style={styles.buttonContainer}>
      <Pressable 
        style={[styles.button, { backgroundColor: '#A0C4FF' }]} // Color azul más claro
        onPress={onPress}
      >
        <Text style={[styles.buttonLabel, { color: '#fff' }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100, // Ancho fijo para consistencia
    height: 50,
    marginHorizontal: 5,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabelBigBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonLabel: {
    fontSize: 16,
  }
});