import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {Icon, Button} from 'native-base';
import ButtonAdd from '../Components/ButtonAdd';
import {Card, CardItem, Body} from 'native-base';
import Toolbar from '../shared/toolbar';
import firebase from 'react-native-firebase';
const Bang = ({navigation, route}) => {
  const [modalOpen, serModalOpen] = useState(false);
  const [list, setList] = useState({
    newList: [],
    value: '',
    id: null,
    deleteId: null,
    updateValue: '',
  });
  useEffect(() => {
    loadData();
  }, []);
  async function sendData(value) {
    if (value !== '') {
      firebase
        .database()
        .ref('/CongViec/note' + (list.newList.length + 1))
        .set({
          id: list.newList.length + 1,
          note: value,
        })
        .then(loadData);
    } else {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
    }
  }
  async function loadData() {
    console.disableYellowBox = true;
    firebase
      .database()
      .ref('CongViec')
      .once('value', function(snapshot) {
        var returnArray = [];

        snapshot.forEach(function(snap) {
          var item = snap.val();
          item.key = snap.key;

          returnArray.push(item);
        });
        setList({
          newList: returnArray,
        });
        return returnArray;
      });
  }
  async function deleteData(id) {
    if (id != null) {
      firebase
        .database()
        .ref('/CongViec/note' + id)
        .remove()
        .then(loadData);
    } else {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
    }
  }
  const openMenu = () => {
    navigation.openDrawer();
  };
  const Header = () => {
    return (
      <View style={styles.header}>
        <Icon
          type="MaterialIcons"
          name="menu"
          size={28}
          onPress={openMenu}
          style={styles.icon}
        />
        <Text style={styles.headerText}>Danh sách dự án</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon
            type="FontAwesome5"
            name="clipboard"
            style={styles.icon}
            onPress={() => navigation.navigate('Profile', {name})}
          />
        </View>
      </View>
    );
  };
  const {name} = route.params;
  return (
    <View style={styles.container}>
      {name === '0944705204' ? (
        <View style={styles.container}>
          <Header navigation={navigation} />
          <Toolbar />
          <Modal visible={modalOpen} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  style={styles.modalText}
                  placeholder="Tên dự án"
                  onChangeText={text => (list.value = text)}
                />

                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => serModalOpen(!modalOpen)}>
                  <Text style={styles.textStyle}>Add</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <View style={{margin: 10}}>
            <FlatList
              data={list.newList}
              key={list.newList.length}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DanhSach', {
                      id: item.id,
                      note: item.note,
                      name: name,
                    })
                  }>
                  <Card>
                    <CardItem>
                      <Body>
                        <View style={styles.viewItem}>
                          <TouchableOpacity style={styles.customTou} />
                          <Text style={styles.margin}>{item.note}</Text>
                          <View style={styles.viewicon}>
                            <Icon
                              type="EvilIcons"
                              name="trash"
                              onPress={() => deleteData(item.id)}
                            />
                            <Icon
                              type="EvilIcons"
                              name="refresh"
                              onPress={() => serModalOpen(true)}
                            />
                          </View>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              )}
            />
          </View>
          <ButtonAdd navigation={navigation} sendData={sendData} />
        </View>
      ) : (
        <View style={styles.container}>
          <Header navigation={navigation} title="Bảng" />
          <Toolbar />
          <Modal visible={modalOpen} animationType="slide" transparent={true}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  style={styles.modalText}
                  placeholder="Tên dự án"
                  onChangeText={text => (list.value = text)}
                />

                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => serModalOpen(!modalOpen)}>
                  <Text style={styles.textStyle}>Add</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <View style={{margin: 10}}>
            <FlatList
              data={list.newList}
              key={list.newList.length}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('DanhSach', item)}>
                  <Card>
                    <CardItem>
                      <Body>
                        <View style={styles.viewItem}>
                          <TouchableOpacity style={styles.customTou} />
                          <Text style={styles.margin}>{item.note}</Text>
                          <View style={styles.viewicon}>
                            <Icon
                              type="EvilIcons"
                              name="trash"
                              onPress={() => deleteData(item.id)}
                            />
                            <Icon
                              type="EvilIcons"
                              name="refresh"
                              onPress={() => serModalOpen(true)}
                            />
                          </View>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}
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
  viewicon: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 150,
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    height: 60,
    width: 100,
    marginBottom: 15,
    textAlign: 'center',
  },
  header: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#01304c',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  icon: {
    left: 0,
    margin: 8,
  },
});

export default Bang;
