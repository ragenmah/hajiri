import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AttendanceButtons = () => {
    const [checkinText, setCheckIn] = useState('check in');
    
  const toggleText = () => {};
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={toggleText} style={styles.roundButton}>
        <Text style={styles.btnTextStyle}>{checkinText}</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.roundButton,styles.btnTakeButton]}>
        <Text style={[ styles.btnTextStyle,styles.btnTakeBreakStyle,]}>
          Take a Break
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AttendanceButtons;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  roundButton: {
      width:116,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#803A9B',
    position: 'relative',
  },
  btnTakeButton:{backgroundColor:'transparent',
  borderWidth:1,
  borderColor:"#803A9B"},
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
