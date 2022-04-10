import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import CustomAlert from '../../utils/CustomAlert';

const PersonalEdit = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <CustomAlert
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.roundCard}>
          <Text style={styles.graphValue}>92%</Text>
        </View>
        <Text style={styles.editAvatar}>EDIT AVATAR</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:40}}>
        <View style={{width: '45%',marginTop:10}}>
          <Text>First Name</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>

        <View style={{width: '45%',marginTop:10}}>
          <Text>Last Name</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
      </View>
      <View style={{width: '45%',marginTop:10}}>
        <Text>Employee ID</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View>
        <Text style={{marginTop:10}}>Email</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View>
        <Text style={{marginTop:10}}>Designation</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View>
        <Text style={{marginTop:10}}>Supervisor</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 35,
          marginBottom: 20,
          padding:30
        }}>
        <View
          style={{height: 36, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{letterSpacing: 1.25}}>CANCEL</Text>
        </View>
        <TouchableHighlight
          style={{
            borderRadius: 15,
            backgroundColor: '#803A9B',
            //   marginTop: 25,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            width: 94,
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: '#fff', letterSpacing: 1.24}}>SAVE</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default PersonalEdit;

const styles = StyleSheet.create({
  roundCard: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: '#F4E0FB',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    borderColor: '#620A83',
    borderRadius: 20,
    borderWidth: 1,
    // textAlignVertical: 'top',
    paddingLeft: 10,
    height: 40,
  },
  editAvatar: {
    color: '#620A83',
    fontWeight: 'bold',
    letterSpacing: 1.24,
    fontSize: 14,
    marginTop: 5,
  },
});
