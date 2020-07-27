import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';
import {Button, Icon, Fab} from 'native-base';
import firebase from 'react-native-firebase';
const ButtonAdd = ({navigation, sendData}) => {
  const [active, setactive] = useState({data: false});
  const [modalOpen, serModalOpen] = useState(false);
  const [list, setList] = useState({
    newList: [],
    value: '',
    id: null,
    deleteId: null,
    updateValue: '',
  });
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);
  const [value, setvalue] = useState('');
  const add = () => {
    serModalOpen(!modalOpen);
    sendData(list.value);
  };
  return (
    <View style={{flex: 1}}>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalText}
              placeholder="Ten Cong Viec"
              onChangeText={text => (list.value = text)}
            />

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={add}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Fab
        active={active.data}
        direction="up"
        containerStyle={{}}
        style={{backgroundColor: '#90bf01'}}
        position="bottomRight"
        onPress={() => setactive({data: !active.data})}>
        <Icon type="Entypo" name="plus" />
        <Button
          style={{backgroundColor: '#34A34F'}}
          onPress={() => serModalOpen(true)}>
          <Icon type="Entypo" name="news" />
        </Button>
      </Fab>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default ButtonAdd;
