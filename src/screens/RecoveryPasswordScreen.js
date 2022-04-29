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
          title={'Account Recovery'}
          description={`Please enter your email ID associated with Hajiri`}
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
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
});
