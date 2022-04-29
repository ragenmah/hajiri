import React from 'react';
import LeaveSmallCard from '../leave/LeaveSmallCard';
import {Text, View, StyleSheet} from 'react-native';

const TimesheetStats = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        justifyContent: 'space-between',
      }}>
      <LeaveSmallCard
        title={'Days Present'}
        days={'18'}
        colorSelected={'#43C741'}
      />
      <LeaveSmallCard
        title={'Days Absent'}
        days={'1'}
        colorSelected={'#EA3A3A'}
      />
      {/* <LeaveSmallCard title={'Working Hours'} days={'3'} colorSelected={"#FFC738"}/> */}
    </View>
  );
};

export default TimesheetStats;
