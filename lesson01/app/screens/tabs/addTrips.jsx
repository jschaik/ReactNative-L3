import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default function AddTrips() {
  const [selectedValue, setSelectedValue] = useState('Nederland');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Kies een land:</Text>

        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label='Nederland' value='Nederland' />
          <Picker.Item label='België' value='België' />
          <Picker.Item label='Duitsland' value='Duitsland' />
          <Picker.Item label='Frankrijk' value='Frankrijk' />
          <Picker.Item label='Spanje' value='Spanje' />
        </Picker>

        <Text style={styles.chosenText}>Gekozen: {selectedValue}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 200,
    width: '100%',
  },
  chosenText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
