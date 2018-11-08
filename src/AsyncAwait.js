import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class AsyncAwait extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    this.getData();
  }

  async getData() {
    const data = await fetch(this.url);
    const body = await data.json();
    await this.setState({ users: body });
    console.log(this.state.users);
  }

  displayData() {
    return this.state.users.map(
        user =>
      <Text key={user.id}>{user.id}: {user.name}</Text>
    );
  }

  url = 'https://jsonplaceholder.typicode.com/users';

  render() {
    return (
      <View>
        <Text>Async Await feature</Text>
        {this.displayData()}
      </View>
    );
  }
}

export default AsyncAwait;
