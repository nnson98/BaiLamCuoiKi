import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DanhSachItem from '../Components/DanhSachitem';
const DanhSach = ({navigation}) => {
  return (
    <View style={styles.container}>
      <DanhSachItem navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default DanhSach;
