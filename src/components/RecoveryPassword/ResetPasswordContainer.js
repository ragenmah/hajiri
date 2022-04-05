import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';

const ResetPasswordContainer = () => {
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('false');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [repasswordVisible, setrepasswordVisible] = useState(true);
  return (
    <View style={{padding: 50}}>
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
      <TextInput
        label="Re-enter Password"
        value={repassword}
        mode="outlined"
        secureTextEntry={true}
        onChangeText={text => setRePassword(text)}
        style={{height: 54, backgroundColor: '#E5E5E5', color: '#000'}}
        right={
          <TextInput.Icon
            name={repasswordVisible ? 'eye' : 'eye-off'}
            onPress={() => setrepasswordVisible(!repasswordVisible)}
            style={{marginTop: 10}}
          />
        }
      />

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
          fontSize: 14,
          letterSpacing: 1.24,
        }}
        onPress={() => console.log('Pressed')}>
        UPDATE
      </Button>
    </View>
  );
};

export default ResetPasswordContainer;
