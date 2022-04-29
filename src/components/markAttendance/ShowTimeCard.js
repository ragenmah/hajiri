import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ShowTimeCard = ({time, timeText, icon}) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.timeTextStyle}>{time}</Text>
        <Text style={styles.timeNameStyle}>{timeText}</Text>
      </View>

      <View style={styles.roundCard}>
        {icon === 'login' ? (
          <AntDesign name={`${icon}`} size={15} color="#803A9B" />
        ) : (
          <Fontisto name={`${icon}`} size={15} color="#803A9B" />
        )}
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
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    borderRadius: 16,
    elevation: 5,
  },
  timeTextStyle: {
    fontSize: 20,
    letterSpacing: 0.18,
    fontWeight: 'bold',
  },
  roundCard: {
    borderRadius: 100,
    width: 25,
    height: 25,
    backgroundColor: '#F4E0FB',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeNameStyle: {
    fontSize: 12,
    letterSpacing: 0.18,
    color: '#8A8A8A',
    paddingTop: 10,
  },
});
