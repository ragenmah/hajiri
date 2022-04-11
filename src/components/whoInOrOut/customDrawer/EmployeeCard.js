import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
const EmployeeCard = ({name,time}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.roundCard}>
          <Text style={styles.graphValue}>92%</Text>
        </View>
      </View>
      <View style={{marginLeft:8}}> 
        <Text style={{fontSize:16}}>{name}</Text>
        <Text style={{fontSize:12}}>{time}</Text>
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        padding:10,
        width:"85%"

    },
  roundCard: {
    borderRadius: 100,
    width: 40,
    height: 40,
    backgroundColor: '#F4E0FB',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
