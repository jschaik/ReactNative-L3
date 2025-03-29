import { View, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';

export default function index() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />

      {/* Jouw pagina-inhoud hieronder */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welkom op de Homepagina!</Text>
      </View>
    </View>
  );
}
