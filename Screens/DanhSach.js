import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Picker,
} from 'react-native';
import _ from 'lodash';
import Header2 from '../shared/header2';
import firebase from 'react-native-firebase';
import {Card, CardItem, Body, Icon} from 'native-base';
import {Block} from 'galio-framework';
const DanhSach = ({navigation, route}) => {
  const {id} = route.params;
  const {note} = route.params;
  const {name} = route.params;
  const [listThe, setListThe] = useState({
    newListThe: [],
    valueThe: '',
    idThe: null,
  });
  const [listBang, setListBang] = useState({
    newListBang: [],
    valueBang: '',
    idBang: null,
  });
  const [modalOpen, serModalOpen] = useState(false);
  const [modalOpen1, serModalOpen1] = useState(false);
  const [dataBang, setDataBang] = useState('');
  const [dataThe, setDataThe] = useState('');
  useEffect(() => {
    console.disableYellowBox = true;
    loadDataBang();
    //loaddataThe();
  }, []);
  async function pushData() {
    firebase
      .database()
      .ref(
        `/CongViec/note${id}/${note}/Bang` + (listBang.newListBang.length + 1),
      )
      .set({
        idBang: listBang.newListBang.length + 1,
        nameBang: dataBang,
      })
      .then(loadDataBang, serModalOpen1(!modalOpen1))
      .catch(err => {
        console.log(err);
      });
  }
  async function loadDataBang() {
    firebase
      .database()
      .ref(`/CongViec/note${id}/${note}`)
      .once('value', function(snapshot) {
        var returnArray = [];

        snapshot.forEach(function(snap) {
          var item = snap.val();
          item.key = snap.key;

          returnArray.push(item);
        });
        setListBang({
          newListBang: returnArray,
        });
        return returnArray;
      });
  }
  async function loadThe() {
    firebase
      .database()
      .ref(`/CongViec/note${id}/${note}/${listBang.newListBang.idBang}`)
      .once('value', function(snapshot) {
        var returnArray = [];

        snapshot.forEach(function(snap) {
          var item = snap.val();
          item.key = snap.key;

          returnArray.push(item);
        });
        setListThe({
          newListThe: returnArray,
        });
        return returnArray;
      });
  }
  const [selectedValue, setSelectedValue] = useState({
    id: '',
    name: '',
  });
  const data = name => {
    const formatQuery = name.toLowerCase();
    const data = _.filter(listBang.newListBang, item => {
      if (item.nameBang.toLowerCase().includes(formatQuery)) {
        return firebase
          .database()
          .ref(`/CongViec/note${id}/${note}/Bang${item.idBang}/DataThe/`)
          .set([dataThe])
          .then(serModalOpen(!modalOpen))
          .catch(err => {
            console.log(err);
          });
      } else {
        false;
      }
    });
  };
  const footerBang = () => {
    return (
      <View style={{margin: 10}}>
        <Button title="Them Bang" onPress={() => serModalOpen1(true)} />
      </View>
    );
  };
  const dataPicker = () => {
    return listBang.newListBang.map(item => {
      return (
        <Picker.Item
          label={item.nameBang}
          key={item.idBang}
          value={item.nameBang}
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      {name === '0944705204' ? (
        <View style={styles.container}>
          <View style={styles.container1}>
            <Header2 title={note} />
            <Button title="HHH" onPress={() => console.log(name)} />
            <Button
              title="jjjj"
              onPress={() => navigation.navigate('ReviewAddThe')}
            />
            <Modal
              visible={modalOpen1}
              animationType="slide"
              transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput
                    style={styles.modalText}
                    placeholder="Ten Bang"
                    onChangeText={text => setDataBang(text)}
                  />

                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#2196F3'}}
                    onPress={pushData}>
                    <Text style={styles.textStyle}>Add Bang</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <Modal visible={modalOpen} animationType="slide" transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Picker
                    selectedValue={selectedValue.name}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue({id: itemIndex, name: itemValue})
                    }>
                    {dataPicker()}
                  </Picker>
                  <TextInput
                    style={styles.modalText}
                    placeholder="Ten the"
                    onChangeText={text => setDataThe(text)}
                  />

                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#2196F3'}}
                    onPress={() => data(selectedValue.name)}>
                    <Text style={styles.textStyle}>Add</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <FlatList
              data={listBang.newListBang}
              key={listBang.newListBang.length}
              keyExtractor={item => item.idBang}
              renderItem={({item}) => (
                <View style={styles.sss}>
                  <View style={styles.viewcontent}>
                    <Text style={styles.txtheader}>{item.nameBang}</Text>
                    <Block style={styles.block} />
                  </View>
                  <View>
                    <FlatList
                      data={item.DataThe}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('ReviewAddThe')}>
                          <Card>
                            <CardItem>
                              <Body>
                                <Text>{item}</Text>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                  }}>
                                  <Icon
                                    type="AntDesign"
                                    name="eyeo"
                                    style={styles.icon}
                                  />
                                  <Icon
                                    type="AntDesign"
                                    name="menufold"
                                    style={styles.icon}
                                  />
                                  <Icon
                                    type="Octicons"
                                    name="comment"
                                    style={styles.icon}
                                  />
                                </View>
                                <TouchableOpacity style={styles.touchable}>
                                  <Text>NS</Text>
                                </TouchableOpacity>
                              </Body>
                            </CardItem>
                          </Card>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item2, index) => index}
                    />
                  </View>
                </View>
              )}
              ListFooterComponent={footerBang}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <TouchableOpacity style={styles.customTou}>
            <Icon
              type="AntDesign"
              name="pluscircleo"
              style={styles.icon1}
              onPress={() => serModalOpen(true)}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.container1}>
            <Header2 title={note} />
            <Button title="HHH" onPress={() => console.log(name)} />
            <Button
              title="jjjj"
              onPress={() => navigation.navigate('ReviewAddThe')}
            />
            <Modal
              visible={modalOpen1}
              animationType="slide"
              transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TextInput
                    style={styles.modalText}
                    placeholder="Ten Bang"
                    onChangeText={text => setDataBang(text)}
                  />

                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#2196F3'}}
                    onPress={pushData}>
                    <Text style={styles.textStyle}>Add Bang</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <Modal visible={modalOpen} animationType="slide" transparent={true}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Picker
                    selectedValue={selectedValue.name}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue({id: itemIndex, name: itemValue})
                    }>
                    {dataPicker()}
                  </Picker>
                  <TextInput
                    style={styles.modalText}
                    placeholder="Ten the"
                    onChangeText={text => setDataThe(text)}
                  />

                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#2196F3'}}
                    onPress={() => data(selectedValue.name)}>
                    <Text style={styles.textStyle}>Add</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <FlatList
              data={listBang.newListBang}
              key={listBang.newListBang.length}
              keyExtractor={item => item.idBang}
              renderItem={({item}) => (
                <View style={styles.sss}>
                  <View style={styles.viewcontent}>
                    <Text style={styles.txtheader}>{item.nameBang}</Text>
                    <Block style={styles.block} />
                  </View>
                  <View>
                    <FlatList
                      data={item.DataThe}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('ReviewAddThe')}>
                          <Card>
                            <CardItem>
                              <Body>
                                <Text>{item}</Text>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                  }}>
                                  <Icon
                                    type="AntDesign"
                                    name="eyeo"
                                    style={styles.icon}
                                  />
                                  <Icon
                                    type="AntDesign"
                                    name="menufold"
                                    style={styles.icon}
                                  />
                                  <Icon
                                    type="Octicons"
                                    name="comment"
                                    style={styles.icon}
                                  />
                                </View>
                                <TouchableOpacity style={styles.touchable}>
                                  <Text>NS</Text>
                                </TouchableOpacity>
                              </Body>
                            </CardItem>
                          </Card>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item2, index) => index}
                    />
                  </View>
                </View>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
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
  container1: {
    flex: 1,
    backgroundColor: '#3d3ac0',
  },
  sss: {
    backgroundColor: 'white',
    width: 250,
    margin: 10,
  },
  txtheader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  block: {
    borderColor: '#cbcbcd',
    width: '90%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  viewcontent: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  icon: {
    margin: 6,
    fontSize: 16,
  },
  touchable: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft: 150,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  customTou: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#da4a4f',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  icon1: {
    fontSize: 30,
    color: 'white',
    marginLeft: 15,
  },
});
export default DanhSach;
