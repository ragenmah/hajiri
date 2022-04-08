import React from 'react';
import {Text, View, FlatList,StyleSheet} from 'react-native';

const TimeSheetsCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={{color:"#757575"}}>1</Text>
      <View style={{marginLeft:20}}> 
        <Text style={styles.headerText}>3rd Feb 2022</Text>
        <View style={styles.timeRow}>
          <View>
            <Text>Check-in</Text>
            <Text>5:30 pm</Text>
          </View>
          <View>
            <Text>Check-out</Text>
            <Text>5:30 pm</Text>
          </View>
        </View>
        <View style={styles.timeRow}>
          <View>
            <Text>Work Hours</Text>
            <Text>5:30 pm</Text>
          </View>
          <View>
            <Text>Break Time</Text>
            <Text>5:30 pm</Text>
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
      marginHorizontal: 16,
      fontFamily: 'Inter',
      elevation: 10,
      flexDirection:'row'
      // height: 358,
    },
  
    headerText: {
      color: '#1F1F1F',
      // left: 24,
      letterSpacing: 0.15,
      fontSize: 24,
      textTransform: 'capitalize',
      color:"#803A9B"
    },
    roundCard: {
      borderRadius: 100,
      width: 10,
      height: 10,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#F4E0FB',
      alignItems: 'center',
    },
    timeRow:{flexDirection:'row'}
  });
  