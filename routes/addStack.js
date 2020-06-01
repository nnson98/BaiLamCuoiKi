import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Bang from '../Screens/Bang';
import DanhSach from '../Screens/DanhSach';
import AddBang from '../Components/AddBang';
import AddThe from '../Components/AddThe';
const Stack = createStackNavigator();
const AddStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bang"
        component={Bang}
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
    </Stack.Navigator>
  );
};

export default AddStack;
