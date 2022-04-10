import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import {API_BASE_URL} from '../../utils/constants';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

const CalendarAttendance = ({token, userId}) => {
  const [attendanceDate, setAttendanceDate] = useState([]);
  const [currentDateTime, setcurrentDateTime] = useState(moment().format('YYYY-MM-DD'));
 
  useEffect(() => {
    try {
      axios
        .get(`${API_BASE_URL}/attendances`, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <View style={styles.cardContainer}>
      <Calendar
        current={new Date()}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
        }}
       renderArrow={direction =>
          direction === 'left' ? (
            <View style={styles.roundCard}>
              <Icon name="left" size={20} color="#fff" />
            </View>
          ) : (
            <View style={styles.roundCard}>
              <Icon name="right" size={20} color="#fff" />
            </View>
          )
        }
        hideExtraDays={true}
       enableSwipeMonths={true}
        markingType={'custom'}
        markedDates={{
          // '2022-04-01': {textColor: 'green'},
          // '2022-04-02': {startingDay: true, color: 'green'},
          // '2022-04-03': {
          //   selected: true,
          //   endingDay: true,
          //   color: 'green',
          //   textColor: 'gray',
          // },

          '2022-04-05': {
            customStyles: {
              container: {
               borderTopWidth:4,
                borderTopColor:'#43C741',
                borderRadius:0
              },
              text: {
                color: 'black',
                fontWeight: 'bold',
              },
            },
          },
          // currentDateTime:  {
          //   customStyles: {
          //     container: {
          //      borderTopWidth:4,
          //       borderTopColor:'#43C741',
          //       borderRadius:0
          //     },
          //     text: {
          //       color: 'black',
          //       fontWeight: 'bold',
          //     },
          //   },
          
        }}
      />
    </View>
  );
};

export default CalendarAttendance;

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
  roundCard: {
    borderRadius: 100,
    width: 25,
    height: 25,
    backgroundColor: '#E7E7E7',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#1F1F1F',
    // left: 24,
    letterSpacing: 0.15,
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
