import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CalendarAttendance from '../components/calendar/CalendarAttendance';
import AttendanceChart from '../components/charts/AttendanceChart';
import WorkingHoursChart from '../components/charts/WorkingHoursChart';
import MarkAttendanceCard from '../components/markAttendance/MarkAttendanceCard';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView >
        <MarkAttendanceCard />
        <CalendarAttendance/>
        <AttendanceChart/>
        <WorkingHoursChart/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent:'space-between'
  },
});
