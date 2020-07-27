import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  FlatList,
  Alert,
  Picker,
  Image,
} from 'react-native';
import firebase from 'react-native-firebase';
import {Icon} from 'native-base';
import {Block} from 'galio-framework';
import {gs, colors} from '../shared/styles';
import DatePicker from 'react-native-datepicker';
import Accordian from '../Components/Accordian';
import DataImage from '../Components/ImagePicker';
import {CustomPicker} from 'react-native-custom-picker';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';
const ReviewAddThe = props => {
  useEffect(() => {
    console.disableYellowBox = true;
    toggleDay();
    loadUser();
  }, []);
  const [today, setDay] = useState({
    alltitle: '',
  });
  const options = [
    {
      color: '#2660A4',
      label: 'One',
      value: 1,
    },
    {
      color: '#FF6B35',
      label: 'Two',
      value: 2,
    },
    {
      color: '#FFBC42',
      label: 'Three',
      value: 3,
    },
    {
      color: '#AD343E',
      label: 'Four',
      value: 4,
    },
    {
      color: '#051C2B',
      label: 'Five',
      value: 5,
    },
  ];
  const toggleDay = () => {
    const now = new Date();
    const ngay = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    setDay({
      alltitle: '' + year + ' -' + month + ' - ' + ngay,
    });
  };
  const [ngayhethan, setngayhethan] = useState({datehethan: new Date()});
  const menu = [
    {
      id: 1,
      title: 'Các hoạt động',
      data: [
        {key: 'Khảo sát', value: false},
        {key: 'Vẽ mô hình', value: false},
        {key: 'Design giao diện', value: false},
      ],
    },
  ];
  const renderAccordians = () => {
    const items = [];
    for (const item of menu) {
      items.push(
        <Accordian title={item.title} data={item.data} key={item.id} />,
      );
    }
    return items;
  };
  const renderHeader = () => {
    return (
      <View style={styles.headerFooterContainer}>
        <Text>This is header</Text>
      </View>
    );
  };
  const renderFooter = action => {
    return (
      <TouchableOpacity
        style={styles.headerFooterContainer}
        onPress={() => {
          Alert.alert('Footer', "You've click the footer!", [
            {
              text: 'OK',
            },
            {
              text: 'Close Dropdown',
              onPress: action.close.bind(this),
            },
          ]);
        }}>
        <Text>This is footer, click me!</Text>
      </TouchableOpacity>
    );
  };
  const renderField = settings => {
    const {selectedItem, defaultText, getLabel, clear} = settings;
    return (
      <View style={styles.container2}>
        <View>
          {!selectedItem && (
            <Text style={[styles.text, {color: 'grey'}]}>{defaultText}</Text>
          )}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.clearButton} onPress={clear}>
                <Text style={{color: '#fff'}}>Clear</Text>
              </TouchableOpacity>
              <Text style={[styles.text, {color: selectedItem.color}]}>
                {getLabel(selectedItem)}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };
  const renderOption = settings => {
    const {item, getLabel} = settings;
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.box, {backgroundColor: item.color}]} />
          <Text style={{color: item.color, alignSelf: 'flex-start'}}>
            {getLabel(item)}
          </Text>
        </View>
      </View>
    );
  };
  const [colorbackground, setcolor] = useState({colorbckground: ''});
  const [userdata, setuserdata] = useState({data: []});
  const dataUser = () => {
    return userdata.data.map(item => {
      return (
        <Picker.Item label={item.HoTen} key={item.key} value={item.HoTen} />
      );
    });
  };
  const dataPicker1 = () => {
    userdata.data.map(item => {
      return console.log(item.HoTen);
    });
  };
  const [selectedValue, setSelectedValue] = useState({
    key: '',
    HoTen: '',
  });
  async function loadUser() {
    firebase
      .database()
      .ref('/User/')
      .once('value', function(snapshot) {
        var returnArray = [];

        snapshot.forEach(function(snap) {
          var item = snap.val();
          item.key = snap.key;

          returnArray.push(item);
        });
        setuserdata({
          data: returnArray,
        });
        return returnArray;
      });
  }
  return (
    <ScrollView>
      <View
        style={[
          styles.viewheader,
          {backgroundColor: colorbackground.colorbckground},
        ]}>
        <View style={styles.header}>
          <Icon type="AntDesign" name="arrowleft" />
          <Icon type="AntDesign" name="check" />
        </View>
        <Text style={styles.txtcontent}>Công việc 1</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.txtheader}>Thẻ 1</Text>
      </View>
      <Block style={styles.block} />
      <View style={gs.le}>
        <View style={styles.card}>
          <View style={styles.headerdate}>
            <Text style={styles.txtheaderDate}>Chọn độ ưu tiên</Text>
          </View>
          <View style={styles.viewitem}>
            <Icon type="AntDesign" name="tago" />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                height: 35,
                width: '90%',
                marginLeft: 8,
              }}>
              <CustomPicker
                placeholder={'Mức độ'}
                options={options}
                getLabel={item => item.label}
                fieldTemplate={renderField}
                optionTemplate={renderOption}
                headerTemplate={renderHeader}
                footerTemplate={renderFooter}
                onValueChange={value => setcolor({colorbckground: value.color})}
              />
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.headerdate}>
            <Text style={styles.txtheaderDate}>Thêm thành viên</Text>
          </View>
          <View style={styles.viewitem}>
            <Icon type="AntDesign" name="user" onPress={() => dataPicker1()} />
            <Picker
              selectedValue={selectedValue.name}
              style={{height: 50, width: 150}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue({id: itemIndex, name: itemValue})
              }>
              {dataUser()}
            </Picker>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.headerdate}>
            <Text style={styles.txtheaderDate}>Gửi thông báo</Text>
          </View>
          <View style={styles.viewitem}>
            <Icon type="AntDesign" name="calendar" />
            <TextInput style={styles.input} placeholder={'Send Notification'} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.headerdate}>
            <Text style={styles.txtheaderDate}>Ngày bắt đầu</Text>
          </View>
          <View style={styles.viewitem}>
            <Icon type="AntDesign" name="calendar" />
            <Text style={styles.txtday}>{today.alltitle}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.headerdate}>
            <Text style={styles.txtheaderDate}>Ngày hết hạn</Text>
          </View>
          <View style={styles.viewitem}>
            <DatePicker
              style={{width: 365}}
              date={ngayhethan.datehethan}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2020-07-15"
              maxDate="2025-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  marginRight: 5,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                setngayhethan({datehethan: date});
              }}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.headerdate}>
            <Text style={styles.txtheaderDate}>Thêm tệp</Text>
          </View>
          <View style={styles.viewitem}>
            <Icon type="AntDesign" name="addfile" />
            <DataImage />
          </View>
        </View>
        <View style={styles.container}>{renderAccordians()}</View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  viewheader: {
    width: '100%',
    height: 120,
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
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  viewitem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  container: {
    paddingTop: 10,
    backgroundColor: colors.PRIMARY,
  },
  txtday: {
    height: 40,
    width: '90%',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  container2: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 18,
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: 'grey',
    borderRadius: 5,
    marginRight: 10,
    padding: 5,
  },
  optionContainer: {
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  optionInnerContainer: {
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  headerdate: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1.5, height: 1.5},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    marginTop: 20,
  },
  txtheaderDate: {
    fontSize: 18,
    fontWeight: '600',
  },
  btn: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgb(68, 99, 147)',
  },
  btnTxt: {
    color: '#fff',
  },
  image: {
    marginTop: 20,
    minWidth: 200,
    height: 200,
  },
});
export default ReviewAddThe;
