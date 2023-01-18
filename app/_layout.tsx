import { Stack } from 'expo-router';
import { ThemeProvider } from 'react-native-rapi-ui';

export default function Layout() {
  return (
    <ThemeProvider theme='dark'>
      <Stack />
    </ThemeProvider>
  );
}
