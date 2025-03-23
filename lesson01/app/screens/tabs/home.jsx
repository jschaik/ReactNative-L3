import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const DATA = [
  { id: 1, title: 'Barcelona', description: 'Zon, strand en Gaudí' },
  { id: 2, title: 'New York', description: 'De stad die nooit slaapt' },
  { id: 3, title: 'Rome', description: 'Eeuwenoude geschiedenis en pasta' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2', // zachte achtergrondkleur
  },
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#e0e0e0', // lichtgrijs
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
