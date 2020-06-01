import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
const Header2 = ({title, navigation}) => {
  const backscreens = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Icon
        type="MaterialIcons"
        name="keyboard-backspace"
        onPress={backscreens}
      />
      <Text>{title}</Text>
      <Icon type="EvilIcons" name="search" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#01304c',
  },
});
export default Header2;
