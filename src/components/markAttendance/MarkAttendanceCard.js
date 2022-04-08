import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import moment from 'moment';
import ShowTimeCard from './ShowTimeCard';
import AttendanceButtons from './AttendanceButtons';
import BackgroundTimer from 'react-native-background-timer';

const MarkAttendanceCard = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);

  const [totalDuration, setTotalDuration] = useState(0);

  const [secondsLeft, setSecondsLeft] = useState(1);
  const [timerOn, setTimerOn] = useState(false);
  const [checkin, setCheckin] = useState(moment().format('h:mm a'));
  const [checkout, setCheckOut] = useState('0:00 pm');
  const [checkinTime, setCheckinTime] = useState('');
  const [checkoutTime, setCheckOutTime] = useState('');

  const [workTime, setWorkTime] = useState('0h 0m');

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) return secs + 1;
        else return 0;
      });
    }, 1000);
  };
  // Runs when timerOn value changes to start or stop timer
  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  useEffect(() => {
    if (secondsLeft === 0) BackgroundTimer.stopBackgroundTimer();
  }, [secondsLeft]);

  useEffect(() => {}, []);
  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);
    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayHours,
      displayMins,
      displaySecs,
    };
  };

  const showToastMessage = time => {
    ToastAndroid.showWithGravityAndOffset(
      !isTimerStart
        ? `Your check in time is ${time}!`
        : `Your check out time is ${time}!`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  const breakTime =
    clockify().displayHours + 'h ' + clockify().displayMins + `m`;
  +clockify().displaySecs + `s`;

  const calculateWorkTime = (checkin, checkout) => {
    console.log(checkin);
    var diffr = moment.duration(moment(checkout).diff(moment(checkin)));
    if (diffr >0) {
      var hours = parseInt(diffr.asHours());
      var minutes = parseInt(diffr.minutes());
      var seconds = parseInt(diffr.seconds());
      hours = hours != 0 ? hours + 'h' : '';
      minutes = hours != 0 ? minutes + 'm' : '';
      seconds = seconds != 0 ? seconds + 's' : '';
      var d = hours + minutes + seconds;
      setWorkTime(d);
    }
  };

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
        <ShowTimeCard
          // time=  {timeup}
          time={checkin}
          timeText={'Checkin time'}
        />
        <ShowTimeCard
          time={`${
            clockify().displayHours != 0 ? clockify().displayHours + 'h' : ''
          }${clockify().displayMins}m${clockify().displaySecs}s`}
          timeText={'Break time'}
        />
      </View>

      <View style={[styles.displayFlex, styles.marginTimeTop]}>
        <ShowTimeCard time={workTime} timeText={'Work time'} />
        <ShowTimeCard time={checkout} timeText={'Checkout time'} />
      </View>

      <View style={styles.paddinfBtnBottom}>
        <AttendanceButtons
          checkinText={!isTimerStart ? 'check in' : 'check out'}
          toggleCheckIn={() => {
            let currentTime = moment().format('h:mm a');
            let currentDateTime = moment().format('YYYY-MM-DD hh:mm:ss');
            if (!isTimerStart) {
              setCheckin(currentTime);
              setCheckinTime(currentDateTime);
              setIsTimerStart(!isTimerStart);
              showToastMessage(checkin);
            } else {
              setCheckOut(currentTime);
              setCheckOutTime(currentDateTime);
              setIsTimerStart(!isTimerStart);
              calculateWorkTime(checkinTime, checkoutTime);
              showToastMessage(checkout);
            }
          }}
          takeBreak={() => setTimerOn(timerOn => !timerOn)}
        />
      </View>
    </View>
  );
};

export default MarkAttendanceCard;
const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};

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
