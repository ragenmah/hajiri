import React, {useState} from 'react';
import PersonalEdit from '../components/profile/PersonalEdit';
import PasswordEdit from '../components/profile/PasswordEdit';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const [changePage, setChangePage] = useState(true);

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <View style={styles.tabContainer}>
          <View style={styles.tabLabelContainer}>
            <TouchableOpacity
              onPress={() => {
                setChangePage(false);
              }}>
              <Text
                style={{color: '#1F1F1F',fontWeight:'bold'}}
                onPress={() => {
                  setChangePage(false);
                }}>
                Personal
              </Text>
              {changePage ? (
                <View></View>
              ) : (
                
                <View style={styles.horizontalLine}></View>
              )}
            </TouchableOpacity>
          </View>
          <View style={[styles.tabLabelContainer, {marginLeft: 10}]}>
            <TouchableOpacity
              onPress={() => {
                setChangePage(true);
              }}>
              <Text style={{color: '#1F1F1F',fontWeight:'bold'}}>Password</Text>
              {!changePage ? (
                <View></View>
              ) : (
                <View style={styles.horizontalLine}></View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingLeft: 24, paddingRight: 24}}>
          {!changePage ?<PersonalEdit /> :  <PasswordEdit /> }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    position: 'relative',
  },
  tabContainer: {
    flexDirection: 'row',
    marginLeft: 45,
    marginBottom: 20,
  },
  horizontalLine: {
    width: '100%',
    // height: 200,

    backgroundColor: '#803A9B',
    // width: '100%',
    height: 5,
    paddingLeft: 5,
    paddingRight: 5,
    // borderTopColor: '#803A9B',
    // borderTopWidth:5,
  },
  tabLabelContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});
