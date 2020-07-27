import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
export default function DataImage() {
  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const [imgSource, setImgSource] = useState({imgSource: ''});
  const pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        setImgSource({
          imgSource: source,
        });
      }
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>React Native Firebase Image Upload </Text>
      <Text style={styles.instructions}>Hello 👋, Let us upload an Image</Text>
      {/** Select Image button */}
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <View>
          <Text style={styles.btnTxt}>Pick image</Text>
        </View>
      </TouchableOpacity>
      {/** Display selected image */}
      {imgSource.imgSource ? (
        <Image source={imgSource.imgSource} style={styles.image} />
      ) : (
        <Text>Select an Image!</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
