import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import FooterContainer from '../components/Login/FooterContainer';

const PageNotFound = () => {
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <View>
          <Image
            source={require('../../assets/images/Ellipse_up.png')}
        
          />
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            <Text style={{fontSize:24,fontWeight:'bold'}}>OOPS...</Text>
          </View>
        </View>
        <View style={{marginLeft: 15,marginRight:15}}>
          <Image
            source={require('../../assets/images/404_notfound.png')}
            // resizeMode={'cover'}
            style={{width: "100%", height: 302}}
          />
          <Text style={{fontSize:24,fontWeight:'bold'}}>Something went terribly wrong!</Text>
        <Button
          mode="contained"
          uppercase={false}
          style={{
            borderRadius: 15,
            backgroundColor: '#803A9B',
            marginTop: 25,
            height: 54,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            letterSpacing: 1.24,
          }}
          onPress={() => console.log('Pressed')}>
          GO BACK
        </Button>
        </View>
      </ScrollView>
      <FooterContainer />
    </SafeAreaView>
  );
};

export default PageNotFound;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    position: 'relative',
  },
});
