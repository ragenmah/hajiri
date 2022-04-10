import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CorrectAttendance = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <View>
        <Icon name="error-outline" size={30} color={'red'} />
      </View>
      <Text style={styles.headerText}>
        You were absent on 24/02/2022. Mark your calendar.
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LeaveRequestFormStack');
            //   console.log()
          }}>
          <Text style={styles.applyText}>APPLY DUTY</Text>
        </TouchableOpacity>
        <Text  onPress={() => {
            navigation.navigate('LeaveRequestFormStack');
            //   console.log()
          }} style={styles.applyText}>APPLY LEAVE</Text>
      </View>
    </View>
  );
};

export default CorrectAttendance;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 24,
    paddingTop: 10,
    paddingRight: 24,
    marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 10,
    flexDirection: 'row',
    // height: 358,
  },

  headerText: {
    color: '#000',
    // left: 24,
    // letterSpacing: 0.15,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    width: '60%',
    marginLeft: 5,
  },
  applyText:{
    color:"#620A83",
    fontSize:14,
    letterSpacing:1.24,
    fontWeight:'bold',
    marginBottom:5,
  }
});
