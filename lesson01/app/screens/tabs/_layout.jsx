import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          height: 80,
          paddingBottom: 5,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: () => <Ionicons name='home-outline' size={24} />,
        }}
      />
      <Tabs.Screen
        name='addTrips'
        options={{
          title: 'Add',
          tabBarIcon: () => <Ionicons name='add-outline' size={24} />,
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: () => <Ionicons name='person-outline' size={24} />,
        }}
      />
    </Tabs>
  );
}
