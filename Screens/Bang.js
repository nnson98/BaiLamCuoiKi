import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'native-base';
import ButtonAdd from '../Components/ButtonAdd';
import Header from '../shared/header';
const Bang = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Bảng" />
      <View>
        <Button
          title="DanhSachItem"
          onPress={() => navigation.navigate('DanhSach')}
        />
      </View>
      <ButtonAdd navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Bang;
