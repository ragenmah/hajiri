import React, {useState} from 'react';
import {StyleSheet, View, TouchableNativeFeedback, Image} from 'react-native';
import WelcomeCard from '../welcome/WelcomeCard';

const CustomAppBar = props => {
  var SharedPreferences = require('react-native-shared-preferences');
  const [firstname, setFirstName] = useState('');
  const [image, setImage] = useState('');

  SharedPreferences.getItems(['firstName', 'image'], function (values) {
    console.log(values);
    console.log(values[0]);
    setFirstName(values[0]);
    setImage(values[1]);
  });

  return (
    <View style={styles.headerRightStyle}>
      <View style={styles.headerRight}>
        {props.showWelcome === 'true' ? (
          <WelcomeCard firstName={firstname} />
        ) : (
          <View></View>
        )}

        <TouchableNativeFeedback
          onPress={() => {
            console.log(':hello');

            props.sendDataToParent(!props.showDropdown);
          }}
          style={{left: '50%'}}>
          <View style={styles.roundCard}>
            {image != null ? (
              <Image
                source={{
                  uri: image,
                }}
                style={{width: 36, height: 36, borderRadius: 100}}
              />
            ) : (
              <Image
                source={{
                  uri: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',
                }}
                style={{width: 36, height: 36, borderRadius: 100}}
              />
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default CustomAppBar;

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 10,
  },
  headerRightStyle: {
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  roundCard: {
    borderRadius: 100,
    width: 36,
    height: 36,
    backgroundColor: '#F4E0FB',
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '90%',
  },
});
