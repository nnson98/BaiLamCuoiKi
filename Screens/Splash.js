import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {colors, gs} from '../shared/styles';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';
export default function Splash({navigation}) {
  return (
    <View style={gs.loginContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          source={require('../shared/logo.jpg')}
          style={styles.logo}
          resizeMode={'stretch'}
          animation="bounceIn"
          duration={1500}
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Hello every body !!!</Text>
        <Text style={styles.text}>Signing with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <LinearGradient
              colors={['#5db8fe', '#39cff1']}
              style={styles.signin}>
              <Text style={styles.txtSign}>Get started</Text>
              <Icon
                type="MaterialIcons"
                name="navigate-next"
                style={[gs.icon, {color: colors.text}]}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    height: 150,
    width: 150,
  },
  title: {
    color: colors.login,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {color: 'gray', marginTop: 5},
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signin: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  txtSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
