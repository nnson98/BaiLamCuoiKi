import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Block} from 'galio-framework';
const ViewCaiDat = () => {
  return (
    <View>
      <View style={styles.view}>
        <Text style={[styles.margin, {color: 'green'}]}>Thông báo</Text>
        <Text style={[styles.margin, {color: '#cbcbcd'}]}>
          Mở thiết lập hệ thống
        </Text>
        <Block style={styles.block} />
      </View>
      <View style={styles.view}>
        <Text style={[styles.margin, {color: 'green'}]}>Quyền truy cập</Text>
        <Text style={[styles.margin, {color: '#cbcbcd'}]}>
          Chế Độ Hỗ Trợ Người Mù Màu
        </Text>
        <Block style={styles.block} />
      </View>
      <View style={styles.view}>
        <Text style={[styles.margin, {color: 'green'}]}>Tổng quan</Text>
        <Text style={[styles.margin, {color: '#cbcbcd'}]}>
          Hồ sơ và hiện thị
        </Text>
        <Text style={[styles.margin, {color: '#cbcbcd'}]}>Xóa tài khoản</Text>
        <Text style={[styles.margin, {color: '#cbcbcd'}]}>
          Tìm hiểu về Ứng dụng
        </Text>
        <Text style={[styles.margin, {color: '#cbcbcd'}]}>Báo cáo lỗi</Text>
        <Text style={[styles.margin, {color: '#cbcbcd'}]}>Đăng xuất</Text>
        <Block style={styles.block} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
  },
  block: {
    borderColor: '#cbcbcd',
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  margin: {
    marginVertical: 18,
    marginHorizontal: 5,
    marginLeft: 18,
  },
});
export default ViewCaiDat;
