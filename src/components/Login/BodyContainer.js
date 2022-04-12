import axios from 'axios';
import React, {useRef, useState} from 'react';
import {Text, View, ActivityIndicator, Keyboard} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import {validateEmail, validatePassword} from '../../redux/actions/authActions';
import {API_BASE_URL} from '../../utils/constants';
import CustomMsgAlert from '../../utils/CustomMsgAlert';

const BodyContainer = ({
  navigation,
  authReducers,
  postLogin,
  handleRememberme,
}) => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const ref_input2 = useRef();
  const ref_input1 = useRef();

  const [modalVisible, setModalVisible] = useState(false);
  console.log('authReducers');
  console.log(authReducers);
  console.log(authReducers.userData);
  console.log(authReducers.userData.length);
  const gotoDashboard = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'DashboardHome',
          params: {someParam: 'Param1'},
        },
      ],
    });
  };

  return (
    <View style={{padding: 50}}>
      <View>
        <CustomMsgAlert
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          message={
            authReducers.userData.length === 0
              ? 'User is not authorized'
              : !password.trim() || !emailId.trim()
              ? 'Enter valid email and password'
              : 'Invalid Email and password'
          }
        />
        <TextInput
          label="ID or Email"
          value={emailId}
          mode="outlined"
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          placeholder="johndoe@gmail.com"
          activeOutlineColor={validateEmail(emailId) ? '#620A83' : '#EA3A3A'}
          // backgroundColor="#803A9B"
          style={{
            height: 54,
            backgroundColor: '#E5E5E5',
            color: false ? 'red' : '#fff',
          }}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          ref={ref_input2}
          blurOnSubmit={true}
          autoCapitalize="none"
        />
        {!validateEmail(emailId) ? (
          <Text style={{color: 'red'}}>Your email is not valid</Text>
        ) : (
          <View></View>
        )}
      </View>

      <View>
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          secureTextEntry={passwordVisible}
          onChangeText={text => setPassword(text)}
          style={{
            height: 54,
            backgroundColor: '#E5E5E5',
            color: validatePassword(password) ? 'red' : '#000',
          }}
          activeOutlineColor={validatePassword(emailId) ? '#620A83' : '#EA3A3A'}
          showSoftInputOnFocus={passwordVisible}
          autoCapitalize="none"
          right={
            <TextInput.Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              onPress={() => {
                setPasswordVisible(!passwordVisible);
              }}
              style={{marginTop: 10}}
            />
          }
          ref={ref_input2}
        />
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
                handleRememberme(checked);
                setIsLoading(false);
              } else setModalVisible(true);
              setChecked(!checked);
            }}
            color="#620A83"
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
          Forget Password?
        </Button>
      </View>
      <TouchableHighlight
        style={{
          borderRadius: 15,
          backgroundColor: '#803A9B',
          marginTop: 25,
          height: 54,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          console.log('hello reducers');
          console.log(authReducers.error);
          setIsLoading([authReducers.loading]);
          postLogin(emailId, password);
          setIsLoading(true);
          console.log(authReducers);
          if (authReducers.userData.length === 0) {
            setModalVisible(true);
            // console.error(authReducers.userData);
            setIsLoading(false);
          } else if (!password.trim() || !emailId.trim()) {
            setModalVisible(true);
            setIsLoading(false);
            return;
          } else if (validatePassword(password) && validateEmail(emailId)) {
            gotoDashboard();
            setIsLoading(false);
          }
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
