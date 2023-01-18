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
      setGranted(permission != null);
    };
    askPermission();
  }, []);

  // 	User information: You will need to store basic information about your users, such as their name, email address, and password.
  // Profile information: You will also need to store additional information about each user's profile, such as their bio, profile picture, and contact information.
  // Schedule information: You will need to store information about each user's schedule, such as upcoming events, appointments, and meetings.
  // Connections: You will need to store information about the connections between users, such as friend requests, follow relationships, and group membership.
  // Event information: You will need to store information about events, such as the name, location, start and end time, attendees, and details of the event.

  // User registration: Users should be able to create an account and register on the platform using their personal information such as name, email, and password.

  // User profiles: Users should be able to create and update their own profiles, which should include their bio, contact information, and profile picture.

  // Event scheduling: Users should be able to create, edit and delete events, set the time and date, invite attendees, and manage their schedule.

  // Connections: Users should be able to connect with other users, such as by sending friend requests, following other users, and joining groups.

  // Notifications: Users should receive notifications when they receive an invite, when an event is approaching, and when changes are made to an event they are attending.

  // Event discovery: Users should be able to discover events and other users on the platform by browsing through categories, searching for keywords, and looking at events recommended by the platform.

  // Privacy: Users should be able to control who can see their events and who can invite them to events.

  // Data security: User data should be kept secure, and the platform should be compliant with any relevant regulations and laws.

  return (
    <View style={styles.container}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: 'Overview' }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href='/details'>Go to Details</Link>
      <Text>Calendar Module Example</Text>
      <View style={{ marginTop: 60 }} />
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
