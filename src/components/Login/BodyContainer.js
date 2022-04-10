import axios from 'axios';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import {API_BASE_URL} from '../../utils/constants';

const BodyContainer = ({navigation}) => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  var SharedPreferences = require('react-native-shared-preferences');
  const data = {
    // username: emailId,
    // password: password,
    username: 'superuser@example.com',
    password: 'superuser',
  };

  const options = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  const onSubmitFormHandler = async event => {
    if (!password.trim() || !emailId.trim()) {
      alert('Enter valid email and password');
      return;
    }
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'DashboardHome',
          params: {someParam: 'Param1'},
        },
      ],
    });
    setIsLoading(true);
    try {
      axios
        .post(`${API_BASE_URL}/auth/login`, data, options)
        .then(res => {
          // navigation.navigate('DashboardHome', {nav: navigation});
          console.log(`TOKEN ==== : ${JSON.stringify(res.data['token'])}`);
          SharedPreferences.clear();
          console.log(`attendance token ${JSON.stringify(res.data['token'])} `);
          SharedPreferences.setItem('token', res.data['token']);
          handleRememberMe();
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'DashboardHome',
                params: {someParam: 'Param1'},
              },
            ],
          });
        })
        .catch(err => {
          console.log('1dERROR: ====', err);
        });
    } catch (error) {
      // alert("An error has occurred");
      console.log('error' + error);
    }
    setIsLoading(false);
  };

  const handleRememberMe = () => {
   
    if (checked) {
      
      if (!password.trim() || !emailId.trim()) {
        alert('Enter valid email and password');
        return;
      }
      SharedPreferences.setItem('setRememberMe', "true");
      SharedPreferences.getItem('setRememberMe', function (value) {
        console.log("checked" +value)
      });
    }
  };

  return (
    <View style={{padding: 50}}>
      <TextInput
        label="ID or Email"
        value={emailId}
        mode="outlined"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        placeholder="johndoe@gmail.com"
        activeOutlineColor="#620A83"
        // backgroundColor="#803A9B"
        style={{height: 54, backgroundColor: '#E5E5E5', color: '#000'}}
      />
      <TextInput
        label="Password"
        value={password}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        style={{height: 54, backgroundColor: '#E5E5E5', color: '#000'}}
        right={
          <TextInput.Icon
            name={passwordVisible ? 'eye' : 'eye-off'}
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={{marginTop: 10}}
          />
        }
      />
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
        onPress={onSubmitFormHandler}>
        <Text
          style={{
            fontSize: 14,
            letterSpacing: 1.24,
            alignSelf: 'center',
            color: '#fff',
          }}>
          LOG IN
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default BodyContainer;
