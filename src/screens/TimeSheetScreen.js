import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import CustomAppBar from '../components/customAppBar/CustomAppBar';
import ProfileCustomDropdown from '../components/dropdown/ProfileCustomDropdown';
import AllTimeSheets from '../components/timesheet/AllTimeSheets';
import ApplyDuty from '../components/timesheet/ApplyDuty';
import FilterAndDownload from '../components/timesheet/FilterAndDownload';
import TimesheetStats from '../components/timesheet/TimesheetStats';
import WelcomeCard from '../components/welcome/WelcomeCard';

const TimeSheetScreen = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const sendDataToParent = data => {
    // the callback. Use a better name
    console.log(data);
    setShowDropdown(data);
  };
  var SharedPreferences = require('react-native-shared-preferences');
  const [userToken, setUserToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // dispatch(postUserDetail(route.params.token));

    SharedPreferences.getItems(['token', 'userId'], function (values) {
      setUserToken(values[0]);
      setUserId(values[1]);
    });
  });

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <CustomAppBar
        sendDataToParent={sendDataToParent}
        showDropdown={showDropdown}
        showWelcome={'true'}
      />
      <ScrollView>
        <ProfileCustomDropdown showdrawer={showDropdown} />
        <TimesheetStats />
        <ApplyDuty />
        <View style={{paddingLeft: 41, paddingRight: 41, marginTop: 20}}>
          {/* <FilterAndDownload /> */}
          <AllTimeSheets token={userToken} userId={userId} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
  },
});

export default TimeSheetScreen;
