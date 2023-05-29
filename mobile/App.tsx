import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-900 flex-1 items-center justify-center'>
      <Text className='text-gray-50 text-5xl font-bold'>Hello FOX</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}
