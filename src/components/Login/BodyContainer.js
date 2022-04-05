import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Checkbox, TextInput} from 'react-native-paper';

const BodyContainer = () => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

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
          onPress={() => console.log('Pressed')}
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
      <Button
        mode="contained"
        uppercase={false}
        style={{
          borderRadius: 15,
          backgroundColor: '#803A9B',
          marginTop: 25,
          height: 54,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize:14,
          letterSpacing:1.24
        }}
        onPress={() => console.log('Pressed')}>
        LOG IN
      </Button>
    </View>
  );
};

export default BodyContainer;
