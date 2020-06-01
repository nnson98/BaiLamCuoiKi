import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Icon} from 'native-base';

export default function Header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <Icon
        type="MaterialIcons"
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <Text style={styles.headerText}>{title}</Text>
      <View style={{flexDirection:'row'}}>
        <Icon type="FontAwesome5" name="clipboard" style={styles.icon} />
        <Icon type="FontAwesome5" name="clipboard" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#01304c',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  icon: {
    left: 0,
    margin: 8,
  },
});
