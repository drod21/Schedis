import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as Calendar from 'expo-calendar';
import { ThemeProvider } from 'react-native-rapi-ui';

export default function Layout() {
  return (
    <ThemeProvider theme='dark'>
      <Stack />
    </ThemeProvider>
  );
}
