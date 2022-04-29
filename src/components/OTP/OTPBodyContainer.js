import React, {useRef, useState} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-paper';

import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import OTPInputField from './OTPInputField';
import {useDispatch, useSelector} from 'react-redux';
import {getOTPtoken} from '../../redux/actions/OTPActions';

const OTPBodyContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const {otpReducers} = useSelector(state => state);
  return (
    <View style={{padding: 24}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          width: '50%',
          marginBottom: 20,
        }}>
        <OTPInputField otpNumber={otp1} setFunction={setOtp1} ref1={1} />
        <OTPInputField otpNumber={otp2} setFunction={setOtp2} ref1={2} />
        <OTPInputField otpNumber={otp3} setFunction={setOtp3} ref1={3} />
        <OTPInputField otpNumber={otp4} setFunction={setOtp4} ref1={4} />
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
          if (otp1.trim() && otp2.trim() && otp3.trim() && otp4.trim()) {
            var code = `${otp1}${otp2}${otp3}${otp4}`;
            dispatch(getOTPtoken(code));
            console.log('otp token');
            console.log(otpReducers);
            console.log('otp token detail');
            console.log(otpReducers?.otpSuccessResponse?.data?.token);
            if (otpReducers?.otpSuccessResponse?.data?.token != null) {
              console.log('OTP SUCCEMESS');
              console.log(otpReducers?.otpSuccessResponse?.data?.token);
              navigation.navigate('OTPVerifiedScreen', {
                otpToken: otpReducers?.otpSuccessResponse?.data?.token,
              });
            }
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
            SUBMIT
          </Text>

          <AntDesignIcons
            name={'arrowright'}
            size={22}
            color="#fff"
            style={{paddingLeft: 20}}
          />
        </View>
      </TouchableHighlight>
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        style={{fontSize: 5}}
        labelStyle={{
          fontSize: 12,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 18,
        }}
        mode="text"
        uppercase={false}>
        Back To Log In
      </Button>
    </View>
  );
};

export default OTPBodyContainer;
