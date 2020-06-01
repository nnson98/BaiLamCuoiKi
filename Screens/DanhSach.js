import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DanhSachItem from '../Components/DanhSachitem';
const DanhSach = () => {
  return (
    <View style={styles.container}>
      <DanhSachItem />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default DanhSach;
