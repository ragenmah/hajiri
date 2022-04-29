import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

const Page = ({backgroundColor, index, images, title}) => {
  console.log(images);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
      }}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor={'#E5E5E5'}
      />
      {index === 0 ? (
        <View>
          <Image
            source={require('../../../assets/images/onboarding/hajiri_small.png')}
            style={{alignSelf: 'center'}}
          />
          <Image
            source={require('../../../assets/images/onboarding/111.png')}
          />
          <View style={{marginTop: 16}}>
            <Image
              source={require('../../../assets/images/onboarding/1111.png')}
              //   style={{height: 250÷}}
            />
          </View>
          <Image
            source={require('../../../assets/images/onboarding/Group1.png')}
            style={{alignSelf: 'center', marginTop: 10}}
          />
        </View>
      ) : index == 1 ? (
        <View>
          <Image
            source={require('../../../assets/images/onboarding/hajiri_small.png')}
            style={{alignSelf: 'center', marginBottom: 90}}
          />
          <View style={{marginTop: 16}}>
            <Image
              source={require('../../../assets/images/onboarding/1112.png')}
            />
          </View>
          <Image
            source={require('../../../assets/images/onboarding/112.png')}
            // style={{height: '100%', width: '100%'}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../../assets/images/onboarding/Group2.png')}
            style={{alignSelf: 'center', marginTop: 10}}
          />
        </View>
      ) : (
        <View>
          <View style={{marginBottom: 100}}>
            <Image
              source={require('../../../assets/images/onboarding/hajiri_small.png')}
              style={{alignSelf: 'center'}}
            />
          </View>
          <View>
            <View style={{marginTop: 16}}>
              <Image
                source={require('../../../assets/images/onboarding/1113.png')}
              />
            </View>
            <Image
              source={require('../../../assets/images/onboarding/113.png')}
            />
            <Image
              source={require('../../../assets/images/onboarding/Group3.png')}
              style={{alignSelf: 'center', marginTop: 10}}
            />
          </View>
        </View>
      )}
    </View>
  );
};
export default Page;
