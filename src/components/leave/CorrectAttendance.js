import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CorrectAttendance = () => {
  const navigation = useNavigation();
  return (
    <View style={{left: '60%'}}>
      <TouchableHighlight
        style={{
          borderRadius: 5,
          backgroundColor: '#803A9B',
          marginTop: 16,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          width: 125,
        }}
        onPress={() => {
          navigation.navigate('LeaveRequestFormStack');
        }}>
        <Text
          style={{
            fontSize: 14,
            letterSpacing: 1.24,
            alignSelf: 'center',
            color: '#fff',
          }}>
          APPLY LEAVE
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default CorrectAttendance;
