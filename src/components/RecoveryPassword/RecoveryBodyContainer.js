import React, {useState} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {validateEmail} from '../../redux/actions/authActions';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {postOTPUser} from '../../redux/actions/OTPActions';

const RecoveryBodyContainer = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {otpReducers} = useSelector(state => state);
  const handleSendMail = () => {
    if (validateEmail(email) && email != '') {
      console.log('validateEmail');
      dispatch(postOTPUser(email));
      // otpReducers.map(e => {
      //   console.log('e mesage');
      //   console.log(e.otpMessage);
      // });
      console.log(otpReducers);
      console.log(otpReducers?.otpMessage?.msg);
      // console.log(otpReducers.otpMessage);
      if (otpReducers?.otpMessage?.msg != '') {
        console.log('otpscreem');
        navigation.navigate('OTPScreen');
      }
    }
  };
  return (
    <View style={{padding: 24}}>
      <View>
        <Text
          style={{
            marginTop: 10,
            color: validateEmail(email) ? '#620A83' : '#EA3A3A',
          }}>
          Email
        </Text>
        <TextInput
          style={[
            styles.textInputStyle,
            {borderColor: validateEmail(email) ? '#620A83' : '#EA3A3A'},
          ]}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          placeholder=""
          autoCapitalize="none"
        />
        {!validateEmail(email) ? (
          <Text style={{color: 'red'}}>
            {email == '' ? 'Enter your email' : 'Your email is not valid'}
          </Text>
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
          handleSendMail();
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              letterSpacing: 1.24,
              alignSelf: 'center',
              color: '#fff',
            }}>
            SEND EMAIL
          </Text>
          {/* {isLoading ? (
            <ActivityIndicator color={'#fff'} style={{marginLeft: 10}} />
          ) : (
            <View></View>
          )} */}
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

export default RecoveryBodyContainer;

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: '#620A83',
    borderRadius: 15,
    borderWidth: 1,
    // textAlignVertical: 'top',
    paddingLeft: 10,
    height: 40,
  },
});
