import React from 'react';
import LogoContainer from '../components/Login/LogoContainer';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import PageInfoContainer from '../components/Login/component/PageInfoContainer';
import FooterContainer from '../components/Login/FooterContainer';
import ResetPasswordContainer from '../components/RecoveryPassword/ResetPasswordContainer';
import {useRoute} from '@react-navigation/native';

const ResetPasswordScreen = () => {
  const route = useRoute();
  console.log(route.params?.otpToken);
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <LogoContainer />
        <PageInfoContainer
          title={'Re-Set Password'}
          description={`Your new password must be different from your old passwords.`}
        />
        <ResetPasswordContainer otpToken={route.params.otpToken} />
      </ScrollView>
      <FooterContainer />
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
});
