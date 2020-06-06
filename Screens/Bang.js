import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Icon, Button} from 'native-base';
import ButtonAdd from '../Components/ButtonAdd';
import Header from '../shared/header';
import {Card, CardItem, Body} from 'native-base';
import Toolbar from '../shared/toolbar';
const Bang = ({navigation}) => {
  const [data, setdata] = useState([{id: 1, name: 'Công việc 1'}]);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Bảng" />
      <Toolbar />
      <View style={{margin: 10}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('DanhSach')}>
              <Card>
                <CardItem>
                  <Body>
                    <View style={styles.viewItem}>
                      <TouchableOpacity style={styles.customTou} />
                      <Text style={styles.margin}>{item.name}</Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          )}
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
  customTou: {
    height: 35,
    width: 35,
    backgroundColor: 'blue',
    borderRadius: 3,
  },
  viewItem: {
    flexDirection: 'row',
  },
  margin: {
    marginLeft: 12,
    marginTop: 5,
    fontSize: 17,
    fontWeight: '600',
  },
});
export default Bang;
