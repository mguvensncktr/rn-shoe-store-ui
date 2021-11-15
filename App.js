import React from 'react';
import { useFonts } from 'expo-font';
import Navigator from './navigation/navigator';


export default function App() {

  const [loaded] = useFonts({
    'CarmenSans-Regular': require('./assets/fonts/CarmenSans-Regular.otf'),
    'CarmenSans-SemiBold': require('./assets/fonts/CarmenSans-SemiBold.otf'),
    'CarmenSans-Thin': require('./assets/fonts/CarmenSans-Thin.otf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <Navigator />
  );
}

