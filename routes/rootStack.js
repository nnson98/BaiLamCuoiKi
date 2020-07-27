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
import TroGiup from '../Screens/TroGiup';
import TrangChu from '../Screens/TrangChu';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import {Block} from 'galio-framework';
import AddStack from './addStack';
import DanhSach from '../Screens/DanhSach';
import AddBang from '../Components/AddBang';
import AddThe from '../Components/AddThe';
import ReviewAddThe from '../Components/ReviewAddThe';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Bang"
      drawerContent={props => CustomDrawerContent(props)}
      options>
      <Drawer.Screen name="Bang" component={Bang} />
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
          name="DrawerRoutes"
          component={DrawerRoutes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddBang"
          component={AddBang}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddThe"
          component={AddThe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DanhSach"
          component={DanhSach}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReviewAddThe"
          component={ReviewAddThe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={TrangChu}
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
      <Block style={styles.block} />
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
