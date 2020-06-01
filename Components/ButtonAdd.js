import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon, Fab} from 'native-base';
const ButtonAdd = ({navigation}) => {
  const [active, setactive] = useState({data: false});
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);
  return (
    <View style={{flex: 1}}>
      <Fab
        active={active.data}
        direction="up"
        containerStyle={{}}
        style={{backgroundColor: '#90bf01'}}
        position="bottomRight"
        onPress={() => setactive({data: !active.data})}>
        <Icon type="Entypo" name="plus" />
        <Button
          style={{backgroundColor: '#34A34F'}}
          onPress={() => navigation.navigate('AddBang')}>
          <Icon type="Entypo" name="news" />
        </Button>
        <Button
          style={{backgroundColor: '#3B5998'}}
          onPress={() => navigation.navigate('AddThe')}>
          <Icon type="Entypo" name="v-card" />
        </Button>
      </Fab>
    </View>
  );
};

export default ButtonAdd;
