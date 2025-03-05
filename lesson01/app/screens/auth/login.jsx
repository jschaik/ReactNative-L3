import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>🔑 Inloggen</Text>
      <Button title="Terug" onPress={() => router.back()} />
    </View>
  );
}