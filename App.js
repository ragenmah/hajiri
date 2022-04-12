import React, {createRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet} from 'react-native';
import LoginNavigation from './src/routes/othernavigations/LoginNavigation';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const navigationRef = createRef();
const nav = () => navigationRef.current;

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        {/* <SafeAreaView style={styles.safeArea}> */}
        {/* <StatusBar barStyle="dark-content" /> */}
        <LoginNavigation />
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default App;
