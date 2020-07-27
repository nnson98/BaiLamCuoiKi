import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import Communication from 'react-native-communications';
import {Icon} from 'native-base';
import firebase from 'react-native-firebase';
import _ from 'lodash';
const TrangChu = ({navigation, route}) => {
  const {name} = route.params;
  useEffect(() => {
    const timer = setTimeout(() => {
      getUser();
    }, 100);
  }, []);
  useEffect(() => {
    console.disableYellowBox = true;
    loadUser();
  }, []);
  const [userdata, setuserdata] = useState({data: []});
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
        console.log(returnArray);
        setuserdata({
          data: returnArray,
        });
        return returnArray;
      });
  }
  const [user, setuser] = useState({data: []});
  const getUser = () => {
    const formatQuery = name.toLowerCase();
    const data = _.filter(userdata.data, item => {
      if (item.key.includes(formatQuery)) {
        return true;
      } else {
        return false;
      }
    });
    setuser({data: data});
  };
  const viewuser = () => {
    return user.data.map(item => {
      return (
        <View style={styles.container}>
          <ImageBackground
            style={styles.header}
            source={{
              uri:
                'https://khunganhonline.com/uploads/worigin/2019/07/02/anh-bia-thang-7-hello-july-25d1aafa5a6a27_4fc38a4bf5ddb1c9f9383526ac87a0d3.jpg',
            }}>
            <Icon type="Entypo" name="menu" size={30} style={styles.icon} />
            <TouchableOpacity />
            <Image style={styles.avatar} source={{uri: item.Uri}} />
          </ImageBackground>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{item.HoTen}</Text>
              <Text style={styles.info}>{item.ChucVu}</Text>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  Communication.email(
                    [item.Email, ''],
                    null,
                    null,
                    'My Subject',
                    'My body text',
                  )
                }>
                <Icon type="MaterialIcons" name="email" size={30} />
                <Text style={styles.itemText}>{item.Email}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() =>
                  Communication.web(
                    'https://www.facebook.com/groups/669915249871846/',
                  )
                }>
                <Icon type="Entypo" name="facebook" size={30} />
                <Text style={styles.itemText}>son</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => Communication.phonecall('0944705204', true)}>
                <Icon type="MaterialIcons" name="call" size={30} />
                <Text style={styles.itemText}>{item.SDT}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
  };
  return <View style={styles.container}>{viewuser()}</View>;
};
const styles = StyleSheet.create({
  header: {
    height: 200,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#0f0f0e',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
  },
  itemText: {
    marginLeft: 10,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
  container: {
    flex: 1,
  },
});
export default TrangChu;
