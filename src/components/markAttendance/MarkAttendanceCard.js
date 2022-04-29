import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableHighlight,
  Image,
} from 'react-native';
import moment from 'moment';
import ShowTimeCard from './ShowTimeCard';
import AttendanceButtons from './AttendanceButtons';
import BackgroundTimer from 'react-native-background-timer';
import {API_BASE_URL} from '../../utils/constants';
import getToken from '../../utils/getToken';
import axios, {Axios} from 'axios';
import CustomDrawer from '../whoInOrOut/customDrawer/CustomDrawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import CustomAlert from '../../utils/CustomAlert';
import {useDispatch, useSelector} from 'react-redux';
import {postUserDetail} from '../../redux/actions/userDetailActions';

const MarkAttendanceCard = ({userId}) => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const navigation = useNavigation();

  const [totalDuration, setTotalDuration] = useState(0);

  const [secondsLeft, setSecondsLeft] = useState(1);
  const [timerOn, setTimerOn] = useState(false);
  const [checkin, setCheckin] = useState('-');
  const [checkout, setCheckOut] = useState('-');
  const [checkinTime, setCheckinTime] = useState('');
  const [checkoutTime, setCheckOutTime] = useState('');

  const [workTime, setWorkTime] = useState('-');
  const [isLoading, setIsLoading] = useState(false);
  // const [dt, setDt] = useState(new Date().toLocaleString());

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
    // let secTimer = setInterval(() => {
    //   setDt(new Date().toLocaleString());
    // }, 1000);
    // return () => clearInterval(secTimer);
  }, [isTimerStart]);

  useEffect(() => {
    if (secondsLeft === 0) BackgroundTimer.stopBackgroundTimer();
  }, [secondsLeft]);

  useEffect(() => {
    fetchTodaysAttendance();
  }, []);
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
    if (diffr > 0) {
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

  const convertTohhmms = d => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? 'h' : 'h') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? 'm' : 'm') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : '';
    // return hDisplay + mDisplay + sDisplay;
    setWorkTime(hDisplay + mDisplay + sDisplay);
  };
  var SharedPreferences = require('react-native-shared-preferences');
  const [userToken, setUserToken] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const {userDetailReducers} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    SharedPreferences.getItem('token', function (value) {
      // console.log(`value token ${value}`);
      setUserToken(value);
    });

    SharedPreferences.getItems(
      ['firstName', 'lastName', 'userId'],
      function (values) {
        setFirstName(values[0]);
        setLastName(values[1]);
      },
    );
  });
  const instance = axios.create({
    baseURL: `${API_BASE_URL}`,
    timeout: 1000,
    headers: {Authorization: 'Bearer ' + userToken},
  });

  const saveCheckInTime = async () => {
    let currentTime = moment().format('h:mm a');
    let currentDateTime = moment().format('YYYY-MM-DD hh:mm:ss');
    setIsLoading(true);
    console.log(`Bearer ${userToken.toString()}`);
    setCheckin(currentTime);
    setCheckinTime(currentDateTime);
    setIsTimerStart(!isTimerStart);
    // showToastMessage(checkin);
    instance
      .post('/attendances/check-in', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(res => {
        // console.log(res);
      })
      .catch(err => console.log(err));
    fetchTodaysAttendance();
    setIsLoading(false);
  };

  const saveCheckOutTime = async () => {
    let currentTime = moment().format('h:mm a');
    let currentDateTime = moment().format('YYYY-MM-DD hh:mm:ss');
    setIsLoading(true);
    console.log(`Bearer ${userToken.toString()}`);
    setCheckOut(currentTime);
    setCheckOutTime(currentDateTime);
    setIsTimerStart(!isTimerStart);
    calculateWorkTime(checkinTime, checkoutTime);
    // showToastMessage(checkout);
    instance
      .post('/attendances/check-out', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(res => {
        // console.log(res);
      })
      .catch(err => console.log(err));
    fetchTodaysAttendance();
    setIsLoading(false);
  };

  const saveBreak = () => {
    setIsLoading(true);
    console.log('Take a break');
    console.log(`Bearer ${userToken.toString()}`);

    instance
      .post('/break-records/break-start', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(res => {
        console.log('break taken');
        console.log(res);
      })
      .catch(err => console.log(err));
    fetchTodaysAttendance();
    setIsLoading(false);
  };

  const saveEndBreak = () => {
    setIsLoading(true);
    console.log(`break Bearer ${userToken.toString()}`);

    instance
      .post('/break-records/break-end', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(res => {
        // console.log(res);
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const fetchTodaysAttendance = () => {
    setIsLoading(true);
    axios
      .get(
        `${API_BASE_URL}/attendances`,
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + userToken,
          },
        },
        {
          params: {
            staff_id: userId,
            from: moment().format('YYYY-MM-DD'),
            till: moment().format('YYYY-MM-DD'),
          },
        },
      )
      .then(res => {
        // markDate.add()
        // console.log(res.data['data']['total_time']);

        res.data['data'].forEach(element => {
          console.log(element.total_time);
          convertTohhmms(element.total_time);
          // setCheckin(`${element.check_in}`);
          setCheckOut(moment(`${element.check_out}`).format('h:mm a'));
          setCheckin(moment(`${element.check_in}`).format('h:mm a'));
          // setCheckOut(moment(element.check_out.toString()).format('h:mm a'));
          //  moment(element.total_time).format('YYYY-MM-DD')
        });
        console.log(res.data['data'][0]);
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  };

  return (
    <View style={{marginBottom: 10}}>
      <CustomAlert
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message="System wants your confirmation?"
        confirmation={confirmation}
        setConfirmation={setConfirmation}
      />
      <TouchableOpacity
        style={{marginTop: '3%', marginBottom: 5, left: '65%'}}
        onPress={() =>
          // setModalVisible(true)}
          navigation.toggleDrawer()
        }>
        <Text
          style={{
            color: '#803A9B',
            letterSpacing: 1.24,
            textTransform: 'uppercase',
          }}>
          who’s in/out?
        </Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        {/* <CustomDrawer
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}

        {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.headerText}>Mark Attendance</Text>
        <TouchableOpacity
          style={{}}
          onPress={() =>
            // setModalVisible(true)}
            navigation.toggleDrawer()
          }>
          <Text
            style={{
              color: '#803A9B',
              letterSpacing: 1.24,
              textTransform: 'uppercase',
            }}>
            who’s in/out?
          </Text>
        </TouchableOpacity>
      </View> */}
        <View style={styles.currentDateCard}>
          <View style={styles.displayFlex}>
            <View style={styles.dateStyle}>
              <Text style={styles.dateTextStyle}>
                {moment().format('Do MMMM, YYYY')}
              </Text>
              <Text style={styles.dayTextStyle}>{moment().format('dddd')}</Text>
            </View>

            {/* <Image
            source={require('../../../assets/images/icons/calendar.png')}
            resizeMode={'cover'}
            style={{marginRight: 20}}
          /> */}
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{paddingTop: 10, textTransform: 'capitalize'}}>
            {firstName} {lastName}
          </Text>
          <Text style={{paddingTop: 10}}>ID: {userId}</Text>
        </View>
      </View>
      <View style={styles.paddinfBtnBottom}>
        <AttendanceButtons
          checkinText={!isTimerStart ? 'check in' : 'check out'}
          showCheckInIndicator={isLoading}
          toggleCheckIn={() => {
            setModalVisible(true);
            if (confirmation) {
              isTimerStart ? saveCheckInTime() : saveCheckOutTime();
            }
          }}
          breakText={!timerOn ? 'Take a Break' : 'Leave a Break'}
          takeBreak={() => {
            setTimerOn(timerOn => !timerOn);
            // setModalVisible(true);
            if (timerOn) {
              saveBreak();
            } else {
              saveEndBreak();
            }
            if (confirmation) {
            }
          }}
        />
      </View>
      <View style={{paddingLeft: 23, paddingRight: 23}}>
        <View style={styles.displayFlex}>
          <ShowTimeCard
            // time=  {timeup}
            time={checkin}
            // time={moment().format('h:mm:s a')}
            timeText={'Checkin time'}
            icon={'login'}
          />
          <ShowTimeCard
            time={checkout}
            timeText={'Checkout time'}
            icon={'login'}
          />
        </View>

        <View style={[styles.displayFlex, styles.marginTimeTop]}>
          <ShowTimeCard
            time={workTime}
            timeText={'Work hours'}
            icon={'stopwatch'}
          />

          <ShowTimeCard
            time={breakTime != '00h 00m' ? breakTime : '-'}
            timeText={'Break time'}
            icon={'stopwatch'}
          />
        </View>
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
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 20,
    paddingTop: 16,
    paddingRight: 24,
    marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 10,
    position: 'relative',
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
    marginTop: 5,
  },
  displayFlex: {flexDirection: 'row', justifyContent: 'space-between'},
  marginTimeTop: {marginTop: 10},
  // paddinfBtnBottom: {paddingBottom: 38},
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
    fontSize: 12,
  },
});
