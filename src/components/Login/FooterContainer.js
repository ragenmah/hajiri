import React from 'react';
import {Image, View} from 'react-native';

const FooterContainer = () => {
  return (
    <View
      style={{
        right: '0%',
        bottom: '0%',
        // zIndex:-1,
        position:'absolute'
      }}>
      <Image
        source={require('../../../assets/images/Ellipse_down.png')}
        // resizeMode={'cover'}
        style={{
        //   position: 'absolute',
        //   right: '0%',
        //   bottom: '0%',
        }}
      />
    </View>
  );
};

export default FooterContainer;
