import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CalendarAttendance from '../components/calendar/CalendarAttendance';
import AttendanceChart from '../components/charts/AttendanceChart';
import WorkingHoursChart from '../components/charts/WorkingHoursChart';
import MarkAttendanceCard from '../components/markAttendance/MarkAttendanceCard';
import WelcomeCard from '../components/welcome/WelcomeCard';
import {API_BASE_URL} from '../utils/constants';

const DashboardScreen = () => {
  var SharedPreferences = require('react-native-shared-preferences');

  const [userToken, setUserToken] = useState('');
  const [userAll, setUserAll] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userId, setUserId] = useState('');
  
  useEffect(() => {
    SharedPreferences.getItem('token', function (value) {
      setUserToken(value);
    });
    try {
    console.log("hello")
      axios
        .get(`${API_BASE_URL}/users/me`, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + userToken,
          },
        })
        .then(res => {
          const data = JSON.stringify(res.data['data']);
          // setUserAll(res.data);
          // console.log('hello' + JSON.stringify(res.data['data']));
          console.log('userid' + res.data['data']['first_name']);
          setUserId(res.data['data']['id'])
          setFirstName(res.data['data']['first_name']);
          SharedPreferences.setItem(
            'userId',
            res.data['data']['id'].toString(),
          );
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.error(error);
    }
  });


  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
        <WelcomeCard firstName={firstName} />
        <MarkAttendanceCard userId={userId} />
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
