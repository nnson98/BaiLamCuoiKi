import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {colors, gs} from '../shared/styles';
import {Card, CardItem, Body, Icon} from 'native-base';
import {Block} from 'galio-framework';
import ReviewAddThe from './ReviewAddThe';
const DanhSachitem = ({navigation}) => {
  const [data, setdata] = useState([
    {id: '1', name: 'Can lam'},
    {id: '2', name: 'Dang lma'},
  ]);
  const [data1, setdata2] = useState([
    {aa: '1', name: 'hias'},
    {aa: '2', name: 'hLam'},
    {aa: '3', name: 'hLam'},
  ]);
  const [modalOpen, serModalOpen] = useState(false);
  const footerBang = () => {
    return (
      <View style={{margin: 10}}>
        <Button title="Them Bang" />
      </View>
    );
  };
  const footerThe = () => {
    return (
      <View style={{margin: 10}}>
        <Button title="Them The" onPress={() => viewModal} />
      </View>
    );
  };
  const viewModal = () => {
    return (
      <View style={styles.container}>
        <Modal visible={modalOpen} animationType="slide">
          <ReviewAddThe />
        </Modal>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.sss}>
            <View style={styles.viewcontent}>
              <Text style={styles.txtheader}>{item.name}</Text>
              <Block style={styles.block} />
            </View>
            <View>
              <FlatList
                data={data1}
                keyExtractor={(item = item.aa)}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ReviewAddThe')}>
                    <Card>
                      <CardItem>
                        <Body>
                          <Text>{item.name}</Text>
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
                ListFooterComponent={footerThe}
              />
            </View>
          </View>
        )}
        ListFooterComponent={footerBang}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
});
export default DanhSachitem;
