import React from 'react';
import {Text} from 'react-native';

const WelcomeCard = ({firstName}) => {
  return (
    <Text
      style={{
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        // padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
      }}>
      WelCome, {firstName}!
    </Text>
  );
};

export default WelcomeCard;
