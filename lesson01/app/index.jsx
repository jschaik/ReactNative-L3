import { View, Text, StyleSheet, Button} from "react-native";
import { useRouter } from "expo-router";

export default function App() {

  const router = useRouter()
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Welkom!</Text>
      <Button title="login" onPress={() => router.push("/screens/auth/login") }/>
      <Button title="register" onPress={() => router.push("/screens/auth/register") }/>
      <Button title="Ga naar de app" onPress={() => router.replace("/screens/tabs/home")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24
  }
});