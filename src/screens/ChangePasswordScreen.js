import React from 'react';
import LogoContainer from '../components/Login/LogoContainer';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import PageInfoContainer from '../components/Login/component/PageInfoContainer';
import FooterContainer from '../components/Login/FooterContainer';
import ChangePassBodyContainer from '../components/changePassword/ChangePassBodyContainer';
import {useRoute} from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const route = useRoute();
  console.log('ROUT');
  console.log(route.params.password);
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <LogoContainer />
        <PageInfoContainer
          title={'Change Password'}
          description={`Please set a unique password for your account.`}
        />
        <ChangePassBodyContainer password={route.params.password} />
      </ScrollView>

      <FooterContainer />
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
});
