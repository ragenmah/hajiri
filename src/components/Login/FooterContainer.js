import React from 'react';
import {Image, View, ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';
import BodyContainer from './BodyContainer';

const FooterContainer = () => {
  return (
    <View
      style={
        {
          // right: '0%',
          // bottom: '0%',
          zIndex:-1,
          // position:'absolute'
        }
      }>
      <Image
        source={require('../../../assets/images/Ellipse_down.png')}
        // resizeMode={'cover'}
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          // top:10,
          zIndex:-1,
        }}
      />
    </View>
  );
};

export default FooterContainer;
