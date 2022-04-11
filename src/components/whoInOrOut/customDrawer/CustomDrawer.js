import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  TouchableHighlight,
} from 'react-native';
import EmployeeCard from './EmployeeCard';
import Modal from 'react-native-modal';

const CustomDrawer = props => {
  return (
    <Modal
      // animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      // animationIn="slideInLeft"
      // // animationOut="slideOutRight"
      // onRequestClose={() => {
      //   props.setModalVisible(false);
      // }}
      // propagateSwipe
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection="left">
      <Pressable
        style={[
          Platform.OS === 'ios' ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => props.setModalVisible(false)}
      />
      <View>
        <View style={[styles.cardContainer]}>
          <View style={styles.cardInsideContainer}>
            <Text
              style={{
                color: '#803A9B',
                letterSpacing: 1.24,
                textTransform: 'uppercase',
                alignSelf: 'center',
              }}>
              Who is in/out?
            </Text>
            <View>
              <Text style={styles.checkin}>
                Checked in <Text style={styles.checkinNumber}>3</Text>
              </Text>
              <EmployeeCard name={'Kobe checked in'} time={'8:45am'} />
              <EmployeeCard name={'Maya checked in'} time={'8:45am'} />
              <EmployeeCard name={'Sharon checked in'} time={'8:45am'} />
            </View>
            <View>
              <Text style={styles.checkin}>
                Checked Out <Text style={styles.checkinNumber}>1</Text>
              </Text>
              <EmployeeCard name={'Alis checked in'} time={'8:45am'} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: '30%',
    marginBottom: 55,
    fontFamily: 'Inter',
    elevation: 10,
    height: '81%',
    width: '65%',
    left: '40%',
    // bottom: 0,
  },
  cardInsideContainer: {
    paddingLeft: 16,
    paddingTop: 12,
    paddingRight: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  horizontalLine: {
    height: 10,
    backgroundColor: '#803A9B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  checkin: {
    color: '#1F1F1F',
    fontSize: 20,
  },
  checkinNumber: {
    color: '#803A9B',
    fontWeight: 'bold',
    fontSize: 20,
  },
  iOSBackdrop: {
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: '#232f34',
    opacity: 0.32,
    width:200,
    height: '82%',
    width: '100%',
    left: '35%',
    marginTop: '28%',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // bottom: 0,
  },
});
