import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity} from 'react-native-gesture-handler';

const CorrectAttendance = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View></View>
      <Text>You were absent on 24/02/2022. Mark your calendar.</Text>
      <View>
        <TouchableOpacity
          onPress={() => 
          {navigation.navigate('LeaveRequestFormStack')
        //   console.log()
          }}>
          <Text>APPLY DUTY</Text>
        </TouchableOpacity>
        <Text>APPLY LEAVE</Text>
      </View>
    </View>
  );
};

export default CorrectAttendance;
