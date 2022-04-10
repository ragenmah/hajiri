import React from 'react'
import {StyleSheet, Text, View,TextInput} from 'react-native';

const PasswordEdit = () => {
  return (
    <View>
      <Text style={{color:"#803A9B",fontWeight:'bold',fontSize:16,marginBottom:20}}>
        Change Password?
      </Text>
      <View>
          <Text style={{marginTop:10}}>Current Password</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
        <View>
          <Text style={{marginTop:10}}>New Password</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
        <View>
          <Text style={{marginTop:10}}>Re-enter New Password</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
    </View>
  )
}

export default PasswordEdit
const styles = StyleSheet.create({
 
  textInputStyle: {
    borderColor: '#620A83',
    borderRadius: 20,
    borderWidth: 1,
    // textAlignVertical: 'top',
    paddingLeft: 10,
    height:40
  },
  
});
