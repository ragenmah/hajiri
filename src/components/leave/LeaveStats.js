import React from 'react';
import LeaveSmallCard from './LeaveSmallCard';
import {Text, View, StyleSheet} from 'react-native';

const LeaveStats = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        justifyContent: 'space-between',
      }}>
      <LeaveSmallCard
        title={'Available'}
        days={'18'}
        colorSelected={'#43C741'}
      />
      <LeaveSmallCard title={'Pending'} days={'1'} colorSelected={'#FFC738'} />
      <LeaveSmallCard title={'Rejected'} days={'3'} colorSelected={'#EA3A3A'} />
    </View>
  );
};

export default LeaveStats;
