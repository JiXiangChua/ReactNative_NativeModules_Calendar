import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  NativeModules,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

if (__DEV__) {
  require('./ReactotronConfig');
}

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {CalendarModule} = NativeModules;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleCreateCalendarEvent = () => {
    console.log('handling button click');
    // createCalendarEvent (name, location, onSuccess Callback, onFailure Callback)
    CalendarModule.createCalendarEvent(
      'testName',
      'testLocation',
      (eventId: number) => {
        console.log(`event id ${eventId} returned`);
      },
      (error: Error) => {
        console.error(`Error found! ${error}`);
      },
    );
  };

  const handleCreateCalendarEventPromise = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEventPromise(
        'Party',
        'My House',
      ); // Promise resolved, hence, returns an eventId
      console.log(`Promise Resolved: Created a new event with id ${eventId}`);
    } catch (e) {
      // Promise rejected, hence returns an error
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Button title="Create Event" onPress={handleCreateCalendarEvent} />
        <Button
          title="Create Event with Javascript Promise"
          onPress={handleCreateCalendarEventPromise}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
