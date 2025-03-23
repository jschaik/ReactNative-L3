import {StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native'
export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>index</Text>
      <Button title="click me" onPress={() => Alert.alert("button geklikt")} />

      <Pressable onPress={() => Alert.alert("pressable geklikt")}>
        <Text>Click me nog een keer</Text>
      </Pressable>

      //Achtergrondafbeelding toevoegen
    </View>
    
  )
}
const styles = StyleSheet.create({
  title: {
    color: "blue"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
