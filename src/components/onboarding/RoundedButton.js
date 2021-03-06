import React from 'react';

import {Text, TouchableOpacity} from 'react-native';

const RoundedButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
      style={{alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
export default RoundedButton;
