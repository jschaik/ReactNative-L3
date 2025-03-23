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

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Fout', 'Wachtwoorden komen niet overeen');
      return;
    }

    try {
      const userData = { username, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Succes', 'Account aangemaakt');
      router.replace('/screens/auth/login'); // Ga naar loginpagina
    } catch (error) {
      console.error('Fout bij registratie:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Registreren</Text>

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

        <TextInput
          style={styles.input}
          placeholder='Bevestig wachtwoord'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registreren</Text>
        </Pressable>
      </View>
      <View style={styles.loginContainer}>
        <Text>Heb je al een account?</Text>
        <Pressable onPress={() => router.push('/screens/auth/login')}>
          <Text style={styles.loginLink}> Log hier in</Text>
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
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
