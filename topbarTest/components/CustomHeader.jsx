import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CustomHeader() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {/* Logo */}
      <Image source={require('../assets/images/splash.png')} style={styles.logo} />

      {/* Navigatiebalk */}
      <View style={styles.navbar}>
        <Pressable onPress={() => router.push('/clothing')}>
          <Text style={styles.link}>Clothing</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/shoes')}>
          <Text style={styles.link}>Shoes</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/accessories')}>
          <Text style={styles.link}>Accessories</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    gap: 20,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
