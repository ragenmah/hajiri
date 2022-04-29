import React, {useRef, useState} from 'react';
import {} from 'react-native-paper';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Text,
  Pressable,
} from 'react-native';
import {validatePassword} from '../../redux/actions/authActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {postResetPassword} from '../../redux/actions/resetPasswordActions';

const ResetPasswordContainer = ({otpToken}) => {
  const navigation = useNavigation();
  console.log('OTOP TOKEN');
  console.log(otpToken);
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [repasswordVisible, setrepasswordVisible] = useState(true);
  const [rightPassIcon, setRightPassIcon] = useState('eye-outline');
  const [rightRePassIcon, setRightRePassIcon] = useState('eye-outline');
  const ref_input2 = useRef();
  const handlePasswordVisibility = () => {
    if (rightPassIcon === 'eye-outline') {
      setRightPassIcon('eye-off-outline');
      setPasswordVisible(!passwordVisible);
    } else if (rightPassIcon === 'eye-off-outline') {
      setRightPassIcon('eye-outline');
      setPasswordVisible(!passwordVisible);
    }
  };
  const handleRePasswordVisibility = () => {
    if (rightRePassIcon === 'eye-outline') {
      setRightRePassIcon('eye-off-outline');
      setrepasswordVisible(!repasswordVisible);
    } else if (rightRePassIcon === 'eye-off-outline') {
      setRightRePassIcon('eye-outline');
      setrepasswordVisible(!repasswordVisible);
    }
  };
  const dispatch = useDispatch();
  const {resetPassword} = useSelector(state => state);
  const handleResetPassword = () => {
    console.log(repassword);
    console.log('\n\n\n\n\n\n\n\n');
    dispatch(postResetPassword(password, repassword, otpToken));
    console.log('password succcess');
    console.log(resetPassword.passwordSuccess.msg);

    if (resetPassword.passwordSuccess.msg != '') {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'LoginScreen',
            params: {someParam: 'Param1'},
          },
        ],
      });
    }
  };
  return (
    <View style={{padding: 24}}>
      <View>
        <Text
          style={{
            marginTop: 10,
            color: validatePassword(password) ? '#620A83' : '#EA3A3A',
          }}>
          New Password
        </Text>
        <View
          style={[
            styles.inputContainer,
            {borderColor: validatePassword(password) ? '#620A83' : '#EA3A3A'},
          ]}>
          <TextInput
            style={styles.inputField}
            value={password}
            onChangeText={text => setPassword(text)}
            // keyboardType="email-address"
            placeholder="* * * *"
            activeOutlineColor={
              validatePassword(password) ? '#620A83' : '#EA3A3A'
            }
            ref={ref_input2}
            secureTextEntry={passwordVisible}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <Ionicons name={rightPassIcon} size={22} color="#620A83" />
          </Pressable>
        </View>
        {!validatePassword(password) ? (
          <Text style={{color: 'red'}}>Your password is empty</Text>
        ) : (
          <View></View>
        )}
      </View>
      <View>
        <Text
          style={{
            marginTop: 10,
            color: validatePassword(repassword) ? '#620A83' : '#EA3A3A',
          }}>
          Re-Enter Password
        </Text>
        <View
          style={[
            styles.inputContainer,
            {borderColor: validatePassword(repassword) ? '#620A83' : '#EA3A3A'},
          ]}>
          <TextInput
            style={styles.inputField}
            value={repassword}
            onChangeText={text => setRePassword(text)}
            // keyboardType="email-address"
            placeholder="* * * *"
            activeOutlineColor={
              validatePassword(repassword) ? '#620A83' : '#EA3A3A'
            }
            ref={ref_input2}
            secureTextEntry={repasswordVisible}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable onPress={handleRePasswordVisibility}>
            <Ionicons name={rightRePassIcon} size={22} color="#620A83" />
          </Pressable>
        </View>
        {!validatePassword(repassword) ? (
          <Text style={{color: 'red'}}>Your password is empty</Text>
        ) : (
          <View></View>
        )}
      </View>

      <TouchableHighlight
        style={{
          borderRadius: 15,
          backgroundColor: '#803A9B',
          marginTop: 25,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          handleResetPassword();
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              letterSpacing: 1.24,
              alignSelf: 'center',
              color: '#fff',
            }}>
            UPDATE
          </Text>
          {/* {isLoading ? (
            <ActivityIndicator color={'#fff'} style={{marginLeft: 10}} />
          ) : (
            <View></View>
          )} */}
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ResetPasswordContainer;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
  },
  inputField: {
    paddingLeft: 10,
    fontSize: 16,
    width: '88%',
  },
});
