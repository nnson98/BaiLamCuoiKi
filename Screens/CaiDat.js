import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ViewCaiDat from '../Components/ViewCaiDat';
import Header2 from '../shared/header2';
const CaiDat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header2 title="Cài đặt" navigation={navigation} />
      <ViewCaiDat />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
export default CaiDat;
