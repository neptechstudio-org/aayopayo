import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens';

export default class App extends React.Component {

  state= {}

  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
