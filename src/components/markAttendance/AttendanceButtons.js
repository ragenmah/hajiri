import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from 'react-native';

const AttendanceButtons = ({
  checkinText,
  toggleCheckIn,
  takeBreak,
  showCheckInIndicator,
  breakText,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight onPress={toggleCheckIn} style={styles.roundButton}>
        <View>
          {showCheckInIndicator ? <ActivityIndicator /> : <View></View>}
          <Text style={styles.btnTextStyle}>{checkinText}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={takeBreak}
        style={[styles.roundButton, styles.btnTakeButton]}>
        <Text style={[styles.btnTextStyle, styles.btnTakeBreakStyle]}>
          {breakText}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default AttendanceButtons;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  roundButton: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#803A9B',
    position: 'relative',
  },
  btnTakeButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#803A9B',
    marginTop: 10,
  },
  btnTextStyle: {
    fontSize: 12,
    color: '#fff',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  btnTakeBreakStyle: {
    color: '#620A83',
  },
});
