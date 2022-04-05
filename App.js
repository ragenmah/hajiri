import React, {createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainApp, {MyDrawer} from './src/MainApp';
import CustomAppBar from './src/components/customAppBar/CustomAppBar';

// import DrawerNavigator from './src/routes/DrawerNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet} from 'react-native';
import DrawerNavigator from './src/routes/navigations/DrawerNavigator';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RecoveryPasswordScreen from './src/screens/RecoveryPasswordScreen';
import CheckEmailScreen from './src/screens/CheckEmailScreen';

const navigationRef = createRef();
const nav = () => navigationRef.current;

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        {/* <DrawerNavigator nav={nav} /> */}
        {/* <LoginScreen/> */}
        <CheckEmailScreen/>
        {/* <SplashScreen Navigation={nav}/> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default App;
