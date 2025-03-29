import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

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

const API_KEY = '1e30fd44ccc54c5f601162c743d72a5c';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const item = DATA.find((trip) => trip.id === parseInt(id));

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (item) {
      navigation.setOptions({ title: item.title });

      // Weer ophalen op basis van de stad (item.title)
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${item.title}&appid=${API_KEY}&units=metric&lang=nl`
        )
        .then((res) => {
          console.log('Weerdata:', res.data); 
          setWeather(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Weer ophalen mislukt:', err);
          setLoading(false);
        });
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
      <Text style={styles.title}>{item.flag} {item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : weather ? (
        <View style={styles.weatherBox}>
          <Text style={styles.weatherTitle}>Weer vandaag:</Text>
          <Text>🌡️ {Math.round(weather.main.temp)}°C</Text>
          <Text>☁️ {weather.weather[0].description}</Text>
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Geen weerinformatie beschikbaar.</Text>
      )}
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  weatherBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#d0ebff',
    borderRadius: 10,
    alignItems: 'center',
  },
  weatherTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
});
