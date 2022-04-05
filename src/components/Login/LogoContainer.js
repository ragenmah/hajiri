import React from 'react';
import {Image, View} from 'react-native';

const LogoContainer = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/Ellipse_up.png')}
        // resizeMode={'cover'}
        // style={{width:300,height:200}}
      />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Image
          source={require('../../../assets/images/hajiri_logo.png')}
          resizeMode={'cover'}
          style={{width: 75, height: 90}}
        />
        <Image
          source={require('../../../assets/images/HAJIRI.png')}
          resizeMode={'cover'}
          style={{marginTop: 7}}
        />
      </View>
     
    </View>
  );
};

export default LogoContainer;
