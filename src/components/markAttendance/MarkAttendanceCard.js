import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import ShowTimeCard from './ShowTimeCard';
import AttendanceButtons from './AttendanceButtons';

const MarkAttendanceCard = () => {


  return (
    <View style={styles.cardContainer}>
      <Text style={styles.headerText}>Mark Attendance</Text>

      <View style={styles.currentDateCard}>
        <View style={styles.displayFlex}>
          <View style={styles.dateStyle}>
            <Text style={styles.dateTextStyle}>
              {moment().format('Do MMMM, YYYY')}
            </Text>
            <Text style={styles.dayTextStyle}>{moment().format('dddd')}</Text>
          </View>
          <Text> Calender logo</Text>
        </View>
      </View>

      <View style={styles.displayFlex}>
        <ShowTimeCard time={moment().format('h:mm a')} timeText={'Checkin time'} />
        <ShowTimeCard time={"42m"} timeText={'Break time'} />
      </View>

      <View style={[styles.displayFlex, styles.marginTimeTop]}>
        <ShowTimeCard time={"10h 42m"} timeText={'Work time'} />
        <ShowTimeCard time={moment().format('h:mm a')} timeText={'Checkout time'} />
      </View>
      <View style={styles.paddinfBtnBottom}>
        <AttendanceButtons />
      </View>
    </View>
  );
};

export default MarkAttendanceCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 24,
    paddingTop: 16,
    paddingRight: 24,
    marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 10,
    // height: 358,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121212',
    marginBottom: 5,
  },
  currentDateCard: {
    borderRadius: 16,
    backgroundColor: '#F4E0FB',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    marginTop: 10,
  },
  displayFlex: {flexDirection: 'row', justifyContent: 'space-between'},
  marginTimeTop: {marginTop: 10},
  paddinfBtnBottom: {paddingBottom: 38},
  headerText: {
    color: '#1F1F1F',
    // left: 24,
    letterSpacing: 0.15,
    fontSize: 20,
    textTransform: 'capitalize',
  },
  dateTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1F1F1F',

    letterSpacing: 0.15,
  },
  dayTextStyle: {
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
