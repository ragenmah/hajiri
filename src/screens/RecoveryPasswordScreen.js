import React from 'react';
import LogoContainer from '../components/Login/LogoContainer';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import PageInfoContainer from '../components/Login/component/PageInfoContainer';
import BodyContainer from '../components/Login/BodyContainer';
import FooterContainer from '../components/Login/FooterContainer';
import {useKeyboard} from '../utils/useKeyboard';
import RecoveryBodyContainer from '../components/RecoveryPassword/RecoveryBodyContainer';

const RecoveryPasswordScreen = () => {
  const isKeyBoardOpen = useKeyboard();

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <LogoContainer />
        <PageInfoContainer
          title={'Password Recovery'}
          description={`Please fill in the email you’ve used to create the account for Hajiri and we’ll send you a reser link.`}
        />
        <RecoveryBodyContainer />
      </ScrollView>

       <FooterContainer />
    </SafeAreaView>
  );
};

export default RecoveryPasswordScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    position: 'relative',
  },
});
