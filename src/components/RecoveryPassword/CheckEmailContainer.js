import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const CheckEmailContainer = () => {
  return (
    <View style={{padding: 50}}>
      <Button
        onPress={() => console.log('lPressed')}
        labelStyle={{
          fontSize: 16,
          alignItems: 'center',
          justifyContent: 'center',
          color: '#620A83',
          marginTop: 16,
        }}
        mode="text"
        uppercase={false}>
        Go to my email
      </Button>
      <Text style={{fontSize: 15, color: '#757575', marginTop: 18}}>
        Did not receive the email? Check your spam folder or
        <TouchableOpacity
          onPress={() => console.log('lppPressed')}
          //  style={{padding:10,}}
        >
          <Text
            style={{
              paddingTop: 5,
              fontSize: 14,
              color: '#620A83',
              fontWeight: 'bold',
            }}>
            {' '}
            try another email address.
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default CheckEmailContainer;
