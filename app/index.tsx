import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text, Button } from 'react-native';
import useCalendar from '@atiladev/usecalendar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [granted, setGranted] = useState<boolean>(false);
  const { getPermission, createCalendar, addEventsToCalendar, deleteCalendar, openSettings, isThereEvents } =
    useCalendar('Schedis', '#5351e0', 'Schedis_Calendar');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  useEffect(() => {
    const askPermission = async () => {
      const permission = await getPermission();
      console.log('permission', permission);
      setGranted(permission);
    };
    askPermission();
  });

  const createCalAndEvent = async () => {
    if (granted) {
      const calendarId = await getCalendarId();
      if (!calendarId) {
        await createCalendar();
      }

      if (selectedDate) {
        try {
          addEventsToCalendar(
            state.eventTitle,
            new Date(state.selectedDate.toString()),
            new Date(state.selectedDate.toString()),
          );
          const listEvent = await getEvents();
          dispatch({ type: 'setEvents', payload: listEvent });
        } catch (e) {
          // Something went wrong
        }
      }
    } else {
      openSettings();
    }
  };

  const removeCalendar = () => deleteCalendar();

  return (
    <View style={styles.container}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: 'Overview' }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href='/details'>Go to Details</Link>
      <Text>Calendar Module Example</Text>
      <Button title='Create' onPress={createCalAndEvent} />
      <View style={{ marginTop: 60 }} />
      <Button title='Remove' onPress={removeCalendar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
