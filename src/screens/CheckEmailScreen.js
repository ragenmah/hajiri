import React from 'react';
import LogoContainer from '../components/Login/LogoContainer';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import PageInfoContainer from '../components/Login/component/PageInfoContainer';
import FooterContainer from '../components/Login/FooterContainer';
import {useKeyboard} from '../utils/useKeyboard';
import CheckEmailContainer from '../components/RecoveryPassword/CheckEmailContainer';

const CheckEmailScreen = () => {
  const isKeyBoardOpen = useKeyboard();

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <LogoContainer />
        <PageInfoContainer
          title={'Check your mail'}
          description={`We have sent a recovery link to the email you provided.\nPlease verify with the link sent to your email. `}
        />
        <CheckEmailContainer />
      </ScrollView>

      {isKeyBoardOpen ? <View /> : <FooterContainer />}
    </SafeAreaView>
  );
};
export default CheckEmailScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    position: 'relative',
  },
});
