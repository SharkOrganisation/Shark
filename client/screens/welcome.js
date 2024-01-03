import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function  WelcomeScreen  ()  {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native</Text>
      <Text style={styles.step}>Step One</Text>
      <Text style={styles.description}>
        Edit App.js to change this screen and turn it into your app.
      </Text>
      <Text style={styles.step}>See Your Changes</Text>
      <Text style={styles.description}>
        Press Cmd + R inside the simulator to reload your app’s code.
      </Text>
      <Text style={styles.step}>Debug</Text>
      <Text style={styles.description}>
        Press Cmd + M or Shake your device to open the React Native Debug Menu.
      </Text>
      <Text style={styles.step}>Learn</Text>
      <Text style={styles.description}>
        Read the docs to discover what to do next:
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});

