import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loadUsername = async () => {
      const storedName = await AsyncStorage.getItem('username');
      if (storedName) {
        setUsername(storedName);
      }
    };
    loadUsername();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welkom, {username}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
