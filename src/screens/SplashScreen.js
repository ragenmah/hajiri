import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMes] = useState('');
  const [token, setToken] = useState('');
  var SharedPreferences = require('react-native-shared-preferences');

  useEffect(() => {
    setTimeout(() => {
      console.log('inside timeout');
      console.log(rememberMe);
      // if (rememberMe != null && token != null && 1 != 1) {
      //   console.log('dashboard');
      // } else {
      //   console.log('loggin');
      // }
    }, 2000);
    SharedPreferences.getItems(['setRememberMe', 'token'], function (value) {
      console.log('remember me ' + value);
      console.log(value[0]);
      setRememberMes(value[0]);
      setToken(value[1]);

      value[0] != 'null' && value[1] != 'null' ? gotoDashboard() : gotoLogin();
    });
  }, []);
  const gotoDashboard = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'DashboardHome', params: {token: token}}],
    });
  };
  const gotoLogin = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'LoginScreen',
          params: {someParam: 'Param1'},
        },
      ],
    });
  };
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#803A9B"
      />
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '70%',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/circleBG.png')}
              resizeMode={'cover'}
              // style={{width: 75, height: 90}}
            />
            <Image
              source={require('../../assets/images/hajiriLogo2.png')}
              resizeMode={'cover'}
              style={{position: 'absolute'}}
            />
          </View>

          <Image
            source={require('../../assets/images/HAJIRI_white.png')}
            resizeMode={'cover'}
            style={{marginTop: 10}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#803A9B',
    // position: 'relative',
  },
});
