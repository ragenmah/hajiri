import React from 'react'
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';

const CustomAppBar = () => {
  return (
    <AppBar
    elevation={0}
    color="#E5E5E5"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack style={{paddingRight:10}}>
        <IconButton
          icon={props => <Icon name="notifications-outline" {...props} />}
          {...props}
        />
         <View style={styles.roundCard}>
            <Text style={styles.graphValue}>92%</Text>
          </View>
      </HStack>
    )}
  />
  )
}

export default CustomAppBar

const styles = StyleSheet.create({
   
    roundGraphCard: {
      position: 'absolute',
      borderRadius: 100,
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#F4E0FB',
    },
  
    roundCard: {
      borderRadius: 100,
      width: 36,
      height: 36,
      backgroundColor: '#F4E0FB',
    marginTop:8
    },
    
  });
  