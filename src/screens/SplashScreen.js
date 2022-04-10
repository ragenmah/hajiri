import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useState(() => {
    setTimeout(() => {
      
      // navigation.navigate('LoginScreen');

     navigation.reset({
            index: 0,
            routes: [
              {
                name: 'LoginScreen',
                params: { someParam: 'Param1' },
              },
            ],
          })
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.scrollContainer}>
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
