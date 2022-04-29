import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CalendarAttendance from '../components/calendar/CalendarAttendance';
import AttendanceChart from '../components/charts/AttendanceChart';
import WorkingHoursChart from '../components/charts/WorkingHoursChart';
import CustomAppBar from '../components/customAppBar/CustomAppBar';
import ProfileCustomDropdown from '../components/dropdown/ProfileCustomDropdown';
import MarkAttendanceCard from '../components/markAttendance/MarkAttendanceCard';
import WelcomeCard from '../components/welcome/WelcomeCard';
import {postUserDetail} from '../redux/actions/userDetailActions';
import {useRoute} from '@react-navigation/native';

const DashboardScreen = ({token}) => {
  const route = useRoute();
  var SharedPreferences = require('react-native-shared-preferences');

  const [userToken, setUserToken] = useState('');
  const [userId, setUserId] = useState('');
  const [userAll, setUserAll] = useState('');
  const [firstName, setFirstName] = useState('');

  const dispatch = useDispatch();
  const {userDetailReducers} = useSelector(state => state);

  useEffect(() => {
    // dispatch(postUserDetail(route.params.token));

    SharedPreferences.getItems(['token', 'userId'], function (values) {
      setUserToken(values[0]);
      setUserId(values[1]);
    });
  });
  // var show = '';
  // useEffect(() => {
  //   show = SHOWDOWN();

  // });
  console.log('userId');

  console.log(userId);
  const {showDrawer} = useSelector(state => state);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const sendDataToParent = data => {
    console.log(data);
    setShowDropdown(data);
  };

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <CustomAppBar
        sendDataToParent={sendDataToParent}
        showDropdown={showDropdown}
        showWelcome={'true'}
      />
      <ScrollView>
        <ProfileCustomDropdown showdrawer={showDropdown} />

        <MarkAttendanceCard userId={userId} />
        <CalendarAttendance token={userToken} userId={userId} />
        {/* <AttendanceChart />
        <WorkingHoursChart /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
  },
});
