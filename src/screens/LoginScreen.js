import React from 'react';
import LogoContainer from '../components/Login/LogoContainer';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import PageInfoContainer from '../components/Login/component/PageInfoContainer';
import BodyContainer from '../components/Login/BodyContainer';
import FooterContainer from '../components/Login/FooterContainer';
import {useKeyboard} from '../utils/useKeyboard';

const LoginScreen = () => {
  const isKeyBoardOpen = useKeyboard();
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <LogoContainer />
        <PageInfoContainer
          title={'Log in'}
          description={`Welcome to hajiri, please enter your credentials 
to access your account.`}
        />
        <BodyContainer />
      </ScrollView>

      {isKeyBoardOpen ? <View /> : <FooterContainer />}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    position: 'relative',
  },
});
