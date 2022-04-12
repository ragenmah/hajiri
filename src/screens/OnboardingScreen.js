import React, {useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Image, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  var SharedPreferences = require('react-native-shared-preferences');
  // const [isOnBoarded, setisOnBoarded] = useState(false);

  useEffect(() => {
    SharedPreferences.getItem('onboardLoaded', function (value) {
      if (value === 'true') {
        gotoSplash();
      }
    });
  });
  const gotoSplash = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'SplashScreen',
          params: {someParam: 'Param1'},
        },
      ],
    });
  };
  return (
    <Onboarding
      showPagination
      onSkip={() => {
        gotoSplash();
        SharedPreferences.setItem('onboardLoaded', 'true');
      }}
      onDone={() => {
        gotoSplash();
        SharedPreferences.setItem('onboardLoaded', 'true');
      }}
      pages={[
        {
          backgroundColor: '#FCFCFC',
          image: (
            <Image
              source={require('../../assets/images/onboarding/1.png')}
              style={{height: '100%', width: '100%'}}
              // resizeMode="contain"
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#FCFCFC',
          image: (
            <Image
              source={require('../../assets/images/onboarding/2.png')}
              style={{height: '100%', width: '100%'}}
              // resizeMode="contain"
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#FCFCFC',
          image: (
            <Image
              source={require('../../assets/images/onboarding/3.png')}
              style={{height: '100%', width: '100%'}}
              // resizeMode="contain"
            />
          ),

          title: '',
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
