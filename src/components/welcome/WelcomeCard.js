import React from 'react';
import {Text} from 'react-native';

const WelcomeCard = ({firstName}) => {
  return (
    <Text
      style={{
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 15,
        textTransform: 'uppercase',
      }}>     
      WelCome Back, {firstName}
    </Text>
  );
};

export default WelcomeCard;
