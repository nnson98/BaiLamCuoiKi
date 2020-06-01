import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
const Nodataview = () => {
  return (
    <View>
      <View style={styles.customview}>
        <View>
          <ImageBackground
            source={require('../shared/trello.jpg')}
            style={styles.img}
          />
        </View>
        <View style={{alignItems: 'center', margin: 5}}>
          <Text style={styles.txtheader}>Theo dõi và cập nhật</Text>
          <Text style={styles.txtcontent}>
            Mời mọi người vào các bảng và thẻ, thêm nhận xét và điều chỉnh ngày
            hết hạn từ Trello Trang chủ mới. Chúng tôi sẽ hiện thị hoạt động
            quan trọng nhất là đây
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  customview: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 380,
    margin: 5,
  },
  txtheader: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtcontent: {
    fontSize: 16,
  },
});
export default Nodataview;
