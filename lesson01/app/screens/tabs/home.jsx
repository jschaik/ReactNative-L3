import { Link } from 'expo-router';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DATA = [
  { id: 1, title: 'Barcelona', flag: '🇪🇸', description: 'Zon, strand en Gaudí' },
  { id: 2, title: 'New York', flag: '🇺🇸', description: 'De stad die nooit slaapt' },
  { id: 3, title: 'Rome', flag: '🇮🇹', description: 'Eeuwenoude geschiedenis en pasta' },
  { id: 4, title: 'Tokyo', flag: '🇯🇵', description: 'Technologie en traditie' },
  { id: 5, title: 'Cape Town', flag: '🇿🇦', description: 'Uitzicht vanaf de Tafelberg' },
  { id: 6, title: 'Sydney', flag: '🇦🇺', description: 'Opera House en strand' },
  { id: 7, title: 'Buenos Aires', flag: '🇦🇷', description: 'Tango en lekker eten' },
  { id: 8, title: 'Istanbul', flag: '🇹🇷', description: 'Tussen Europa en Azië' },
  { id: 9, title: 'Bangkok', flag: '🇹🇭', description: 'Tempels en streetfood' },
];


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/screens/detailScreen?id=${item.id}`} asChild>
              <Pressable style={styles.card}>
                <Text style={styles.title}>  {item.flag} {item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  pressedCard: {
    backgroundColor: '#cccccc',
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
