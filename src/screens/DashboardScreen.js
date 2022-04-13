import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CalendarAttendance from '../components/calendar/CalendarAttendance';
import AttendanceChart from '../components/charts/AttendanceChart';
import WorkingHoursChart from '../components/charts/WorkingHoursChart';
import MarkAttendanceCard from '../components/markAttendance/MarkAttendanceCard';
import WelcomeCard from '../components/welcome/WelcomeCard';
import {postUserDetail} from '../redux/actions/userDetailActions';
import {API_BASE_URL} from '../utils/constants';

const DashboardScreen = () => {
  var SharedPreferences = require('react-native-shared-preferences');

  const [userToken, setUserToken] = useState('');
  const [userAll, setUserAll] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const {userDetailReducers} = useSelector(state => state);

  useEffect(() => {
    dispatch(postUserDetail);
  });

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        {/* <WelcomeCard firstName={firstName} /> */}
        <MarkAttendanceCard userId={userDetailReducers.postData} />
        <CalendarAttendance token={userToken} userId={userId} />
        <AttendanceChart />
        <WorkingHoursChart />
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
