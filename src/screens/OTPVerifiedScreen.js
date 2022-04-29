import React, {useState} from 'react';

import LogoContainer from '../components/Login/LogoContainer';
import {SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import PageInfoContainer from '../components/Login/component/PageInfoContainer';
import FooterContainer from '../components/Login/FooterContainer';
import OTPBodyContainer from '../components/OTP/OTPBodyContainer';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const OTPVerifiedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log('verified screen');
  console.log(route.params?.otpToken);

  useState(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'ResetPassword',
            params: {otpToken: route.params.otpToken},
          },
        ],
      });
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <LogoContainer />
        <PageInfoContainer title={'OTP Verified'} description={``} />
        <Image
          source={require('../../assets/images/verified.png')}
          resizeMode={'cover'}
          style={{alignSelf: 'center'}}
        />
      </ScrollView>

      <FooterContainer />
    </SafeAreaView>
  );
};

export default OTPVerifiedScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
});
