import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ShowTimeCard = ({time, timeText}) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.timeTextStyle}>{time}</Text>
        <Text style={styles.timeNameStyle}>{timeText}</Text>
      </View>
      <View style={styles.roundCard}>
        <Text>s</Text>
      </View>
    </View>
  );
};

export default ShowTimeCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    padding:7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
  },
  timeTextStyle: {
    fontSize: 20,
    letterSpacing: 0.18,
    fontWeight: 'bold',
  },
  roundCard: {
    borderRadius: 100,
    width: 10,
    height: 10,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F4E0FB',
    alignItems:'center',
  },
  timeNameStyle: {
    fontSize: 12,
    letterSpacing: 0.18,
    color:"#8A8A8A",
  },
});
