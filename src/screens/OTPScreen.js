import React from 'react';
import LogoContainer from '../components/Login/LogoContainer';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import PageInfoContainer from '../components/Login/component/PageInfoContainer';
import FooterContainer from '../components/Login/FooterContainer';
import OTPBodyContainer from '../components/OTP/OTPBodyContainer';

const OTPScreen = () => {
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <LogoContainer />
        <PageInfoContainer
          title={'OTP Verification'}
          description={`Please enter the 4-digit OTP you have received in your email to continue with the log in process.`}
        />
        <OTPBodyContainer />
      </ScrollView>

      <FooterContainer />
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
});
