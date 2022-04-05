import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const RecoveryBodyContainer = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={{padding: 50}}>
      <TextInput
        label="ID or Email"
        value={email}
        mode="outlined"
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        placeholder="johndoe@gmail.com"
        activeOutlineColor="#620A83"
        // backgroundColor="#803A9B"
        autoFocus={true}
        style={{height: 54, backgroundColor: '#E5E5E5', color: '#000'}}
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
          fontSize:14,
          letterSpacing:1.24
        }}
        onPress={() => console.log('Pressed')}>
        RESET MY PASSWORD
      </Button>
      <Button
          onPress={() => console.log('lPressed')}
          style={{fontSize: 5}}
          labelStyle={{
            fontSize: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}
          mode="text"
          uppercase={false}>
          Back To Log In
        </Button>
    </View>
  );
};

export default RecoveryBodyContainer;
