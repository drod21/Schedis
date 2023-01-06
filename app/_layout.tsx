import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as Calendar from 'expo-calendar';

export default function Layout() {
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

  return <Stack />;
}
