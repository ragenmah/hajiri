import React, { useRef } from 'react';
import {Text, View, StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomsheetMessage from './BottomsheetMessage';

const LeaveCard = ({fromDate, toDate}) => {
  const refRBSheet = useRef();
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          refRBSheet.current.open();
        }}>
        <View style={styles.cardContainer}>
          <View>
            <View>
              <View>
                <Text style={styles.fromText}>From</Text>
                <Text style={{fontWeight:'bold'}}>{fromDate}</Text>
              </View>
              <View>
                <Text style={styles.fromText}>To</Text>
                <Text style={{fontWeight:'bold'}}>{toDate}</Text>
              </View>
            </View>
          </View>
          <View style={{justifyContent:'space-evenly',}}>
            <View style={[styles.roundCard,{backgroundColor:"#43C741"}]}>
              <Text>s</Text>
            </View>
            <Text style={{color:"#803A9B",fontWeight:'bold'}}>5 Days</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <BottomsheetMessage />
      </RBSheet>
    </View>
  );
};

export default LeaveCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 24,
    paddingTop: 16,
    paddingRight: 24,
    paddingBottom:16,
    marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 10,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  headerText: {
    color: '#1F1F1F',
    // left: 24,
    letterSpacing: 0.15,
    fontSize: 20,
    textTransform: 'capitalize',
  },
  roundCard: {
    borderRadius: 100,
    width: 10,
    height: 10,
    justifyContent: 'center',
    padding: 10,
   
    alignItems: 'center',
    left:20,
    elevation:10
  },
  fromText:{
    color:"#757575"
  }
});
