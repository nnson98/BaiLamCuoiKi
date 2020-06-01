import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header2 from '../shared/header2';
const The = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header2 title="The" navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default The;
