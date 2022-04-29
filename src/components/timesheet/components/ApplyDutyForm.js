import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const ApplyDutyForm = props => {
  const [attendanceRequest, setAttendanceRequest] = useState('');
  const [days, setDays] = useState('');
  const handleDatePicker = () => {};
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
          {/* <View style={styles.horizontalLine}></View> */}
          <View style={styles.cardInsideContainer}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              Request for Attendance
            </Text>
            <View>
              <Text style={{fontSize: 16}}>Reason for late attendance</Text>
              <TextInput
                multiline={true}
                numberOfLines={6}
                onChangeText={text => setAttendanceRequest(text)}
                value={attendanceRequest}
                style={{
                  borderColor: '#620A83',
                  borderRadius: 8,
                  borderWidth: 1,
                  textAlignVertical: 'top',
                  paddingLeft: 10,
                }}
                autoCapitalize={'sentences'}
                placeholder={'mininum character is 20 words'}
              />
            </View>
            <View>
              <Text style={{fontSize: 16}}>Days</Text>
              <View style={[styles.inputContainer]}>
                <TextInput
                  style={[styles.inputField]}
                  value={days}
                  onChangeText={text => setDays(text)}
                  placeholder=""
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Pressable onPress={handleDatePicker}>
                  <Image
                    source={require('../../../../assets/images/icons/calendar.png')}
                    resizeMode={'cover'}
                    style={{marginRight: 20}}
                  />
                </Pressable>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Supervisor</Text>
              <View style={[styles.inputContainer]}>
                <Text>Supervisor</Text>
              </View>
            </View>
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
                  marginRight: 0,
                }}
                onPress={() => {
                  props.setModalVisible(false);
                }}>
                <Text style={{color: '#fff', letterSpacing: 1.24}}>
                  SEND REQUEST
                </Text>
              </TouchableHighlight>
              <Text
                style={{letterSpacing: 1.25}}
                onPress={() => {
                  props.setModalVisible(false);
                }}>
                CANCEL
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ApplyDutyForm;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: '40%',
    marginHorizontal: 25,
    fontFamily: 'Inter',
    elevation: 10,
    // alignSelf:'center'
  },
  cardInsideContainer: {
    paddingLeft: 24,
    paddingTop: 16,
    paddingRight: 24,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  inputContainer: {
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: '#620A83',
  },
  inputField: {
    paddingLeft: 10,
    fontSize: 16,
    width: '88%',
  },
});
