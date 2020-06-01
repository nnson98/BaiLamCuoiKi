import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppNavigator from './routes/rootStack';
const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
