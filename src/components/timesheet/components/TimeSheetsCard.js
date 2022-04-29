import moment from 'moment';
import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const TimeSheetsCard = props => {
  var seconds = props.workingHours;
  seconds = parseInt(seconds);
  var format =
    Math.floor(moment.duration(seconds, 'seconds').asHours()) +
    'h :' +
    moment.duration(seconds, 'seconds').minutes() +
    'm :' +
    moment.duration(seconds, 'seconds').seconds();
  +'s';
  return (
    <View style={styles.cardContainer}>
      <Text style={{color: '#757575'}}>1</Text>
      <View style={{marginLeft: 20}}>
        <Text style={styles.headerText}>
          {moment(props.date).format('Do MMMM, YYYY')}
        </Text>
        <View style={styles.timeRow}>
          <View>
            <Text style={styles.chekinTime}>Check-in</Text>
            <Text style={styles.checkinSubTime}>
              {moment(props.checkInTime).format('h:mm:s a')}
            </Text>
          </View>
          <View>
            <Text style={[styles.chekinTime, {paddingLeft: 10}]}>
              Check-out
            </Text>
            <Text style={styles.checkinSubTime}>
              {moment(props.checkOutTime).format('h:mm:s a')}
            </Text>
          </View>
        </View>
        <View style={styles.timeRow}>
          <View>
            <Text style={styles.chekinTime}>Work Hours</Text>
            <Text style={styles.checkinSubTime}>{format}</Text>
          </View>
          <View>
            <Text style={styles.chekinTime}>Break Time</Text>
            <Text style={styles.checkinSubTime}>5:30 pm</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimeSheetsCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 24,
    paddingTop: 16,
    paddingRight: 24,
    // marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 5,
    flexDirection: 'row',
    paddingBottom: 20,
    // height: 358,
    marginBottom: 10,
  },

  headerText: {
    color: '#1F1F1F',
    // left: 24,
    letterSpacing: 0.15,
    fontSize: 24,
    textTransform: 'capitalize',
    color: '#803A9B',
  },
  chekinTime: {
    fontSize: 16,
    color: '#757575',
  },
  checkinSubTime: {color: '#1F1F1F', fontWeight: 'bold'},
  roundCard: {
    borderRadius: 100,
    width: 10,
    height: 10,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F4E0FB',
    alignItems: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
});
