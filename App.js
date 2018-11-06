/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Profile from './src/Profile';

const instructions = Platform.select({
  ios: 'iOS',
  android:
    'Android',
});

type Props = {};

class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      data: 'test',
    }
  }

  change(x) {
    this.setState({ data: x * 10 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Test Jest RN {instructions}</Text>
        <Profile
          placeholder={'Your data here'}
          onChangeText={(text) => this.change(text)}
        />
        <Text>Your input: {this.state.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
