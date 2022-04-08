import React from 'react';
import {Text, View} from 'react-native';

const BottomsheetMessage = () => {
  return (
    <View>
      <View>
        <Text>Type of Leave</Text>
        <Text>Annual</Text>
      </View>
      <View>
        <Text>Reason For Leave</Text>
        <Text>Message..</Text>
      </View>
      <View>
        <Text>Supervisor</Text>
        <Text>SuperVisor name</Text>
      </View>
    </View>
  );
};

export default BottomsheetMessage;
