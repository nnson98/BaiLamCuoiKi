import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Nodataview from '../Components/Nodataview';
import Header from '../shared/header';
const TrangChu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Trang chủ" />
      <Nodataview />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TrangChu;
