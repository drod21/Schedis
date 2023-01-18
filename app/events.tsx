import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

interface Event {
  id: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    RNCalendarEvents.fetchAllEvents()
      .then((allEvents) => {
        setEvents(
          allEvents.map((event) => ({
            id: event.id,
            title: event.title,
            location: event.location,
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate),
          })),
        );
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEventPress = (eventId: string) => {
    RNCalendarEvents.findEventById(eventId)
      .then((event) => {
        console.log(event);
        // navigate to the event detail page and pass the event information
      })
      .catch((error) => console.log(error));
  };

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleEventPress(item.id)}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
            <Text>{item.startDate.toString()}</Text>
            <Text>{item.endDate.toString()}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Events;
