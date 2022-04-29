import axios from 'axios';
import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Button, Checkbox} from 'react-native-paper';
import {
  getUserDetail,
  validateEmail,
  validatePassword,
} from '../../redux/actions/authActions';
import {API_BASE_URL} from '../../utils/constants';
import CustomMsgAlert from '../../utils/CustomMsgAlert';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {postUserDetail} from '../../redux/actions/userDetailActions';
import {postOTPUser} from '../../redux/actions/OTPActions';

const BodyContainer = ({
  navigation,
  authReducers,
  postLogin,
  handleRememberme,
  userMe,
}) => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye-outline');

  const [isLoading, setIsLoading] = useState(false);
  const ref_input2 = useRef();
  const ref_input1 = useRef();
  var SharedPreferences = require('react-native-shared-preferences');

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const {userDetailReducers} = useSelector(state => state);

  // console.log('authReducers');
  // console.log(authReducers);
  // console.log(authReducers.userData);
  // console.log(authReducers.userData.length);

  const gotoDashboard = token => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'DashboardHome',
          params: {token: token},
        },
      ],
    });
  };
  const gotoChangePassword = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          // name: 'ResetPassword',
          name: 'ChangePassword',
          params: {password: password},
        },
      ],
    });
  };
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye-outline') {
      setRightIcon('eye-off-outline');
      setPasswordVisible(!passwordVisible);
    } else if (rightIcon === 'eye-off-outline') {
      setRightIcon('eye-outline');
      setPasswordVisible(!passwordVisible);
    }
  };
  return (
    <View style={{padding: 24}}>
      <CustomMsgAlert
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message={
          password === '' || emailId === ''
            ? 'Email or password is empty'
            : authReducers.userData.length === 0
            ? 'User is not authorized'
            : !password.trim() || !emailId.trim()
            ? 'Enter valid email and password'
            : 'Invalid Email and password'
        }
      />

      <View>
        <Text
          style={{
            marginTop: 10,
            color: validateEmail(emailId) ? '#620A83' : '#EA3A3A',
          }}>
          ID or Email
        </Text>
        <TextInput
          style={[
            styles.textInputStyle,
            {borderColor: validateEmail(emailId) ? '#620A83' : '#EA3A3A'},
          ]}
          value={emailId}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          placeholder=""
          activeOutlineColor={validateEmail(emailId) ? '#620A83' : '#EA3A3A'}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          autoCapitalize="none"
        />
        {!validateEmail(emailId) ? (
          <Text style={{color: 'red'}}>Your email is not valid</Text>
        ) : (
          <View></View>
        )}
      </View>
      <View>
        <Text
          style={{
            marginTop: 10,
            color: validatePassword(password) ? '#620A83' : '#EA3A3A',
          }}>
          Password
        </Text>
        <View
          style={[
            styles.inputContainer,
            {borderColor: validatePassword(password) ? '#620A83' : '#EA3A3A'},
          ]}>
          <TextInput
            style={[styles.inputField]}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder=""
            ref={ref_input2}
            secureTextEntry={passwordVisible}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <Ionicons name={rightIcon} size={22} color="#620A83" />
          </Pressable>
        </View>
        {!validatePassword(password) ? (
          <Text style={{color: 'red'}}>Your password is empty</Text>
        ) : (
          <View></View>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              if (!password.trim() || !emailId.trim()) {
                setModalVisible(true);
                setIsLoading(false);
                return;
              } else if (validatePassword(password) && validateEmail(emailId)) {
                // handleRememberme(checked);
                setIsLoading(false);
              }
              // else {
              //   setModalVisible(true);
              // }
              setChecked(!checked);
            }}
            color="#620A83"
            size={24}
          />
          <Text style={{fontSize: 12}}>Remember me</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('ForgetPassword')}
          style={{fontSize: 5}}
          labelStyle={{
            fontSize: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mode="text"
          uppercase={false}>
          Forgot Password?
        </Button>
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
          // console.log('hello reducers');
          // console.log(authReducers.error);
          // setIsLoading(true);
          if (password === '' || emailId === '') {
            setModalVisible(true);
            setIsLoading(false);
            return;
          }
          console.log('CHecked');
          console.log(checked);
          postLogin(emailId, password, checked);
          console.log('user dispatch start \n');
          setIsLoading(true);
          dispatch(postUserDetail(authReducers.userData['token']));
          console.log('user dispatch end \n');
          // console.log(authReducers.userData);
          setIsLoading(true);
          console.log('hello reducers');
          // console.log(authReducers.userMeData);
          // console.log(authReducers.userData['token']);

          if (authReducers.loading === false) {
            if (validatePassword(password) && validateEmail(emailId)) {
              if (
                userDetailReducers.userDetail != [] &&
                userDetailReducers.loading === false
              ) {
                console.log('reducer data`login ============');
                console.log(userDetailReducers.userDetail);
                // console.log(userDetailReducers?.userDetail['data']);
                console.log(userDetailReducers?.userDetail?.data?.last_login);
                console.log('user detail');
                gotoDashboard(authReducers?.userData?.data?.token);
                if (userDetailReducers?.userDetail?.data?.last_login != null) {
                } else {
                  SharedPreferences.setItem('password', password);

                  // gotoChangePassword();
                  // gotoDashboard();
                }
              }
              // if (authReducers.userData.length === 0) {
              //   // console.error(authReducers.userData);
              //   setModalVisible(true);
              //   setIsLoading(false);
              //   return;
              // }

              // setIsLoading(false);
            }
          }
          // gotoDashboard();
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              letterSpacing: 1.24,
              alignSelf: 'center',
              color: '#fff',
            }}>
            LOG IN
          </Text>
          {isLoading ? (
            <ActivityIndicator color={'#fff'} style={{marginLeft: 10}} />
          ) : (
            <View></View>
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default BodyContainer;

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: '#620A83',
    borderRadius: 15,
    borderWidth: 1,
    // textAlignVertical: 'top',
    paddingLeft: 10,
    height: 40,
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
