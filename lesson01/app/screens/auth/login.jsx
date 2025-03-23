import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');

      if (!storedUser) {
        Alert.alert('Fout', 'Geen gebruikersgegevens gevonden');
        return;
      }

      const { username: savedUsername, password: savedPassword } =
        JSON.parse(storedUser);
      console.log('Opgeslagen:', savedUsername, savedPassword);
      console.log('Ingevoerd:', username, password);

      if (username === savedUsername && password === savedPassword) {
        await AsyncStorage.setItem('username', username); // Voor profielpagina
        router.replace('/screens/tabs/home');
      } else {
        Alert.alert('Fout', 'Onjuiste gebruikersnaam of wachtwoord');
      }
    } catch (error) {
      console.error('Fout bij inloggen:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Inloggen</Text>

        <TextInput
          style={styles.input}
          placeholder='Gebruikersnaam'
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder='Wachtwoord'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.registerContainer}>
        <Text>Nog geen account?</Text>
        <Pressable onPress={() => router.push('/screens/auth/register')}>
          <Text style={styles.registerLink}> Registreer hier</Text>
        </Pressable>
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
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
