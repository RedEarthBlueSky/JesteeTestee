import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import Users from './src/features/middleware/users';

type Props = {};

class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      userN: 'test',
      pw: 'bloggs',
    }
  }

  componentWillMount() {
    Users.all()
      .then((data) => {
        console.warn('Check API data', data);
      })
  }

  //  model for reducer
  change(status, input) {
    if (status === 'username') this.setState({ userN: input });
    if (status === 'pw') this.setState({ pw: input });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>Test Jest RN {instructions}</Text>
        <TextInput
          testID={'username'}
          onChangeText={(text) => this.change('username', text)}
          placeholder={'Enter Username'}
          style={styles.inputStyle}
        />
        <TextInput
          testID={'password'}
          onChangeText={(text) => this.change('pw', text)}
          placeholder={'Enter Password'}
          style={styles.inputStyle}
        />
      <Text>Your username: {this.state.userN}</Text>
      <Text>Your password: {this.state.pw}</Text>
      </View>
    );
  }
}

const instructions = Platform.select({
  ios: 'iOS',
  android:
    'Android',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputStyle: {
    backgroundColor: 'grey',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


export default App;
