import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Profile = (props) => {
    return (
      <View>
        <Text style={{ fontSize: 30 }}>Am I a props child?</Text>
        {/* <TextInput
          testID={props.username}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          style={styles.inputStyle}
        /> */}
      </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputStyle: {
    backgroundColor: 'grey',
    margin: 10,
  },
});

export default Profile;
