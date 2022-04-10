import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  TouchableHighlight,
} from 'react-native';

const CustomAlert = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(false);
      }}>
      <Pressable
        style={[
          Platform.OS === 'ios' ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => props.setModalVisible(false)}
      />
      <View>
        <View style={[styles.cardContainer]}>
          <View style={styles.horizontalLine}></View>
          <View style={styles.cardInsideContainer}>
          <Text style={{fontSize:16,color:"#414141"}}>Do you want to save the changes?</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <TouchableHighlight
              style={{
                borderRadius: 15,
                backgroundColor: '#803A9B',
                //   marginTop: 25,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
                width: 90,
                marginRight:30
              }}>
              <Text style={{color: '#fff', letterSpacing: 1.24}}>YES</Text>
            </TouchableHighlight>
            <View
              style={{
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{letterSpacing: 1.25}}>CANCEL</Text>
            </View>
          </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: "50%",
    marginHorizontal: 25,
    fontFamily: 'Inter',
    elevation: 10,
// alignSelf:'center'
  },
cardInsideContainer:{
  paddingLeft: 24,
    paddingTop: 16,
    paddingRight: 24,
    justifyContent:'center',
    alignItems:'center'
},
  horizontalLine: {
    height: 10,
    backgroundColor: '#803A9B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  iOSBackdrop: {
    backgroundColor: '#000000',
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: '#232f34',
    opacity: 0.32,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
