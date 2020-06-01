import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Icon, Form, Item, Picker, DatePicker, Input} from 'native-base';
import Header2 from '../shared/header2';
const AddThe = ({navigation}) => {
  const [selected, setselect] = useState({selectedValue: undefined});
  const onChangeText = value => {
    setselect({selectedValue: value});
  };
  const [date, setdate] = useState({chosenDate: new Date()});
  const newdate = newDate => {
    setdate({chosenDate: newDate});
  };
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} title="Thêm Thẻ" />
      <View style={styles.view}>
        <Text>Bảng</Text>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={selected.selectedValue}
              onValueChange={onChangeText}>
              <Picker.Item label="Chọn Bảng" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
        </Form>
      </View>
      <View style={styles.view}>
        <Text>Danh sách</Text>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={selected.selectedValue}
              onValueChange={onChangeText}>
              <Picker.Item label="Chọn danh sách" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
        </Form>
      </View>
      <View style={styles.viewdetails}>
        <View style={styles.view2}>
          <Form>
            <Item>
              <Input placeholder="Tên thẻ" />
            </Item>
            <Item last>
              <Input placeholder="Mô tả" />
            </Item>
          </Form>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select date"
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: '#d3d3d3'}}
            onDateChange={newdate}
            disabled={false}
          />
          <Text>Date: {date.chosenDate.toString().substr(4, 12)}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  viewdetails: {
    backgroundColor: 'blue',
    height: 300,
    width: '97%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    backgroundColor: 'white',
    margin: 5,
    height: 250,
    width: '90%',
  },
});
export default AddThe;
