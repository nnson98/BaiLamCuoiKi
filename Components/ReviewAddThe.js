import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'native-base';
import {Block} from 'galio-framework';
import {gs} from '../shared/styles';
const ReviewAddThe = () => {
  return (
    <View>
      <View style={styles.viewheader}>
        <View style={styles.header}>
          <Icon type="AntDesign" name="arrowleft" />
          <Icon type="AntDesign" name="check" />
        </View>
        <Text style={styles.txtcontent}>Do An Moi</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.txtheader}>Hello</Text>
      </View>
      <Block style={styles.block} />
      <View style={gs.le}>
        <View style={styles.viewitem}>
          <Icon type="AntDesign" name="tago" />
          <TextInput style={styles.input} placeholder={'Nhãn...'} />
        </View>
        <View style={styles.viewitem}>
          <Icon type="AntDesign" name="user" />
          <TextInput style={styles.input} placeholder={'Thành viên...'} />
        </View>
        <View style={styles.viewitem}>
          <Icon type="AntDesign" name="calendar" />
          <TextInput style={styles.input} placeholder={'Ngày hết hạn...'} />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.txtheader}>Danh sách các hoạt động</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  viewheader: {
    backgroundColor: '#2f2bca',
    width: '100%',
    height: 180,
  },
  txtcontent: {
    position: 'absolute',
    bottom: 36,
    left: 14,
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },
  viewcontent: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
  },
  block: {
    borderColor: '#cbcbcd',
    width: '90%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  txtheader: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: '90%',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
  viewitem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
});
export default ReviewAddThe;
