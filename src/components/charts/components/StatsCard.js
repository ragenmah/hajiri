import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StatsCard = ({color, title, days}) => {
  return (
    <View style={styles.statsContainer}>
      <View style={[styles.roundCard, {backgroundColor: color}]} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{days}</Text>
      </View>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  roundCard: {
    borderRadius: 100,
    width: 15,
    height: 15,
    marginTop:5
  },
  titleStyle: {
    fontSize: 16,
    color: '#8A8A8A',
  },
});
