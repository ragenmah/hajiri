import React, {createRef, Fragment} from 'react';
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
        <Fragment>
          <SafeAreaView style={styles.safeArea}></SafeAreaView>
          <StatusBar
            barStyle="dark-content"
            animated={true}
            backgroundColor="#F9F9F9"
          />
          <LoginNavigation />
        </Fragment>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    // overflow: 'hidden',
    backgroundColor: '#000',
  },
});

export default App;
