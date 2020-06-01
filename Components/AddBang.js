import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Form, Item, Picker, DatePicker, Input} from 'native-base';
import Header2 from '../shared/header2';
const AddBang = ({navigation}) => {
  const [selected, setselect] = useState({selectedValue: undefined});
  const onChangeText = value => {
    setselect({selectedValue: value});
  };
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation} title="Thêm bảng" />
      <View style={styles.view}>
        <Text>Tên bảng</Text>
        <Form>
          <Item>
            <Input placeholder="Tên thẻ" />
          </Item>
        </Form>
      </View>
      <View style={styles.view}>
        <Text>Quyền xem</Text>
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
              <Picker.Item label="Riêng tư" value="key0" />
              <Picker.Item label="Cong khai" value="key1" />
            </Picker>
          </Item>
        </Form>
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
    marginHorizontal: 12,
    marginVertical: 8,
  },
});
export default AddBang;
