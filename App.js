import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World, react native!!!<Ionicons name="ios-pizza" color="red" /></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
