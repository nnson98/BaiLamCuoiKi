import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Bang from '../Screens/Bang';
import The from '../Screens/The';
import CaiDat from '../Screens/CaiDat';
import TroGiup from '../Screens/TroGiup';
import TrangChu from '../Screens/TrangChu';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import {Block} from 'galio-framework';
import AddStack from './addStack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Bang"
      drawerContent={props => CustomDrawerContent(props)}
      options>
      <Drawer.Screen name="Bang" component={AddStack} />
      <Drawer.Screen name="TrangChu" component={TrangChu} />
      <Drawer.Screen name="The" component={The} />
      <Drawer.Screen name="CaiDat" component={CaiDat} />
      <Drawer.Screen name="TroGiup" component={TroGiup} />
    </Drawer.Navigator>
  );
}
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={DrawerRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewimg}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://www.tuktukdesign.com/wp-content/uploads/2020/01/profile-icon-vector.jpg',
          }}
        />
        <Text style={styles.txtName}>Nguyen Ngoc Son</Text>
        <Text style={styles.txtjob}>Designer</Text>
        <View />
      </View>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Bang')}>
          <Icon type="Entypo" name="news" style={styles.icon} />
          <Text style={styles.txtitem}>Bảng</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('TrangChu')}>
          <Icon type="Entypo" name="home" style={styles.icon} />
          <Text style={styles.txtitem}>Trang chủ</Text>
        </TouchableOpacity>
      </ScrollView>
      <Block style={styles.block} />
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('The')}>
          <Icon type="Entypo" name="v-card" style={styles.icon} />
          <Text style={styles.txtitem}>Thẻ của tôi</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('CaiDat')}>
          <Icon type="AntDesign" name="setting" style={styles.icon} />
          <Text style={styles.txtitem}>Cài đặt</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('TroGiup')}>
          <Icon type="Entypo" name="help" style={styles.icon} />
          <Text style={styles.txtitem}>Trợ giúp</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  viewimg: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0079be',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  txtName: {
    fontSize: 18,
    fontStyle: 'normal',
    color: 'white',
    padding: 3,
  },
  txtjob: {
    fontSize: 12,
    color: '#ffc4c6',
  },
  icon: {
    padding: 3,
    fontSize: 25,
  },
  viewscrool: {
    marginLeft: 5,
  },
  viewtou: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtitem: {
    fontSize: 16,
    textAlignVertical: 'center',
    paddingLeft: 15,
  },
  block: {
    borderColor: '#cbcbcd',
    width: '90%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
});
export default AppNavigator;
