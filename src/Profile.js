import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Profile Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Profile;
