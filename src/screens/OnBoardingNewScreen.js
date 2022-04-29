import React, {useEffect, useRef, useState} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {useNavigation} from '@react-navigation/native';
import Page from '../components/onboarding/Page';
import Footer from '../components/onboarding/Footer';
import RenderPagination from '../components/onboarding/RenderPagination';

const OnBoardingNewScreen = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  var SharedPreferences = require('react-native-shared-preferences');
  // const [isOnBoarded, setisOnBoarded] = useState(false);

  useEffect(() => {
    SharedPreferences.getItem('onboardLoaded', function (value) {
      if (value === 'true') {
        gotoSplash();
      }
    });
  });
  const gotoSplash = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'SplashScreen',
          params: {someParam: 'Param1'},
        },
      ],
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ViewPager
        style={{flex: 1}}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={e => {
          //   console.log('Current page index', e.nativeEvent.position)
          setActiveIndex(e.nativeEvent.position);
        }}>
        {/* <RenderPagination activeIndex={activeIndex} /> */}
        <View key="1">
          <Page backgroundColor="#E5E5E5" index={activeIndex} />
          <Footer
            leftButtonLabel="Skip"
            leftButtonPress={() => {
              SharedPreferences.setItem('onboardLoaded', 'true');
              gotoSplash();
            }}
            backgroundColor="#E5E5E5"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page backgroundColor="#07689f" index={activeIndex} />
          <Footer
            backgroundColor="#07689f"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <Page backgroundColor="#07689f" index={activeIndex} />
          <Footer
            backgroundColor="#07689f"
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(1);
            }}
            rightButtonLabel="Ok"
            rightButtonPress={() => {
              SharedPreferences.setItem('onboardLoaded', 'true');
              gotoSplash();
            }}
          />
        </View>
      </ViewPager>
    </SafeAreaView>
  );
};

export default OnBoardingNewScreen;
