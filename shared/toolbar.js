import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Block} from 'galio-framework';
const Toolbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textcontent}>Bảng cá nhân</Text>
      <Block style={styles.block} />
    </View>
  );
};
const styles = StyleSheet.create({
  textcontent: {
    fontSize: 16,
    fontWeight: '300',
    margin: 5,
  },
  block: {
    borderColor: '#cbcbcd',
    width: '98%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 8,
  },
  container: {
    margin: 8,
  },
});
export default Toolbar;
