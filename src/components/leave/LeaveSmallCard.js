import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const LeaveSmallCard = ({title, days, colorSelected}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={{paddingRight: 5, fontSize: 14, fontWeight: 'bold'}}>
        {title}
      </Text>
      <Text style={{fontSize: 14, color: colorSelected}}>{days}</Text>
    </View>
  );
};

export default LeaveSmallCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 4,
    //    marginLeft:10,
    paddingRight: 10,
    // marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 45,
    width: '48%',
  },

  headerText: {
    color: '#1F1F1F',
    // left: 24,
    letterSpacing: 0.15,
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
