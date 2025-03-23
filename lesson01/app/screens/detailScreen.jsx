import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DATA = {
  1: {
    title: 'Barcelona',
    description: 'Een prachtige stad aan de Middellandse Zee',
  },
  2: { title: 'New York', description: 'De stad die nooit slaapt' },
  3: { title: 'Rome', description: 'De eeuwige stad met veel geschiedenis' },
};

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const item = DATA[id];

  useEffect(() => {
    if (item) {
      navigation.setOptions({ title: item.title });
    }
  }, [item]);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Stad niet gevonden.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
