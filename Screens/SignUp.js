import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors, gs} from '../shared/styles';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
export default function SignUp({navigation}) {
  const [data, setdata] = useState({check_textInputChange: false});
  const [value, onChangeText] = useState('');
  const [value1, onChangeText1] = useState('');
  const [check, setcheck] = useState({secureTextEntry: true});
  const [check1, setcheck1] = useState({secureTextEntry1: true});
  const textInputChange = value => {
    if (value.length !== 0) {
      setdata({check_textInputChange: true});
    } else {
      setdata({check_textInputChange: false});
    }
  };
  const secureTextEntry = () => {
    setcheck({secureTextEntry: !check.secureTextEntry});
  };
  const secureTextEntry1 = () => {
    setcheck1({secureTextEntry1: !check1.secureTextEntry1});
  };
  return (
    <View style={gs.loginContainer}>
      <View style={styles.header}>
        <Text style={styles.txtheader}>Wellcome !!!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.txtfooter}>E-MAIL</Text>
        <View style={styles.action}>
          <Icon
            type="FontAwesome"
            name="user-o"
            style={(gs.icon, {color: colors.login})}
          />
          <TextInput
            placeholder="Your email"
            style={styles.txtInput}
            onChangeText={text => textInputChange(text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Icon
                type="Feather"
                name="check-circle"
                style={[gs.icon, {color: 'green'}]}
              />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.txtfooter, {marginTop: 25}]}>Password</Text>
        <View style={styles.action}>
          <Icon
            type="FontAwesome"
            name="lock"
            style={(gs.icon, {color: colors.login})}
          />
          {check.secureTextEntry ? (
            <TextInput
              placeholder="Your password"
              style={styles.txtInput}
              value={value}
              onChangeText={text => onChangeText(text)}
              secureTextEntry={true}
            />
          ) : (
            <TextInput
              placeholder="Your password"
              style={styles.txtInput}
              value={value}
              onChangeText={text => onChangeText(text)}
            />
          )}

          <TouchableOpacity onPress={() => secureTextEntry()}>
            {check.secureTextEntry ? (
              <Icon
                type="Feather"
                name="eye-off"
                style={[gs.icon, {color: 'gray'}]}
              />
            ) : (
              <Icon
                type="Feather"
                name="eye"
                style={[gs.icon, {color: 'gray'}]}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.txtfooter, {marginTop: 25}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Icon
            type="FontAwesome"
            name="lock"
            style={(gs.icon, {color: colors.login})}
          />
          {check1.secureTextEntry1 ? (
            <TextInput
              placeholder="Confirm password"
              style={styles.txtInput}
              value={value1}
              onChangeText={text => onChangeText1(text)}
              secureTextEntry={true}
            />
          ) : (
            <TextInput
              placeholder="Confirm password"
              style={styles.txtInput}
              value={value1}
              onChangeText={text => onChangeText1(text)}
            />
          )}

          <TouchableOpacity onPress={() => secureTextEntry1()}>
            {check1.secureTextEntry1 ? (
              <Icon
                type="Feather"
                name="eye-off"
                style={[gs.icon, {color: 'gray'}]}
              />
            ) : (
              <Icon
                type="Feather"
                name="eye"
                style={[gs.icon, {color: 'gray'}]}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <LinearGradient
              colors={['#5db8fe', '#39cff1']}
              style={styles.signin}>
              <Text style={[styles.txtSignin, {color: colors.text}]}>
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 4,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  txtheader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  txtfooter: {
    color: colors.login,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  txtInput: {
    flex: 1,
    paddingLeft: 10,
    color: colors.login,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signin: {
    width: 370,
    height: 50,
    ...gs.center,
    borderRadius: 10,
  },
  txtSignin: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  customTou: {
    borderColor: '#4dc2f8',
    borderWidth: 1,
    marginTop: 15,
    width: 370,
  },
});
