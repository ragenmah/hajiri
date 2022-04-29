import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ProfileCustomDropdown = ({showdrawer}) => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(true);
  var SharedPreferences = require('react-native-shared-preferences');

  return showdrawer ? (
    <View style={styles.cardContainer}>
      <TouchableHighlight
        style={[
          styles.btnStyle,
          {backgroundColor: selected ? '#803A9B' : '#F9F9F9'},
        ]}
        onPress={() => {
          setSelected(!selected);
          navigation.navigate('ProfileStack');
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <EvilIcon
            name="user"
            size={22}
            color={selected == false ? '#000' : '#fff'}
            style={{paddingLeft: 20}}
          />

          <Text
            style={[styles.btnTextStyle, {color: selected ? '#fff' : '#000'}]}>
            PROFILE
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.btnStyle,
          {backgroundColor: selected == false ? '#803A9B' : '#F9F9F9'},
        ]}
        onPress={() => {
          setSelected(!selected);
          SharedPreferences.removeItem('token');
          SharedPreferences.removeItem('userId');
          SharedPreferences.removeItem('firstName');
          SharedPreferences.removeItem('image');
          SharedPreferences.removeItem('setRememberMe');
          SharedPreferences.getAllKeys(function (keys) {
            console.log(keys);
          });
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'LoginScreen',
              },
            ],
          });
        }}>
        <View style={{flexDirection: 'row'}}>
          <SimpleLineIcons
            name="logout"
            size={22}
            color={selected ? '#000' : '#fff'}
            style={{paddingLeft: 20}}
          />
          <Text
            style={[
              styles.btnTextStyle,
              {color: selected == false ? '#fff' : '#000'},
            ]}>
            LOG OUT
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  ) : (
    <View></View>
  );
};

export default ProfileCustomDropdown;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    // borderRadius: 20,
    // marginTop: 100,
    // paddingLeft: 24,
    // paddingTop: 16,
    // paddingRight: 24,
    left: '50%',
    right: 0,
    zIndex: 1000,
    marginHorizontal: 16,
    elevation: 10,
    width: '40%',
    // paddingTop: '90%',
    // height: '16%',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    // borderRadius: 15,
    backgroundColor: '#803A9B',
    // marginTop: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: 12,
    letterSpacing: 0.4,
    alignSelf: 'center',
    color: '#fff',
  },
});
