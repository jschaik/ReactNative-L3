import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";


export default function App() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>👋 Welkom!</Text>
      <Button title="Inloggen" onPress={() => router.push("/screens/auth/login")} />
      <Button title="Registreren" onPress={() => router.push("/screens/auth/register")} />
      <Button title="Verder naar de app" onPress={() => router.replace("/screens/tabs/home")} />
    </View>
  );
}

