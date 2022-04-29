import React, {useRef} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomsheetMessage from './BottomsheetMessage';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';

const LeaveCard = ({fromDate, toDate}) => {
  const refRBSheet = useRef();
  return (
    <View>
      <View style={styles.cardContainer}>
        <View>
          <View>
            <View>
              <Text style={styles.fromText}>From</Text>
              <Text style={{fontWeight: 'bold'}}>
                {moment(fromDate).format('Do MMMM, YYYY')}
              </Text>
            </View>
            <View>
              <Text style={styles.fromText}>To</Text>
              <Text style={{fontWeight: 'bold'}}>
                {moment(toDate).format('Do MMMM, YYYY')}
              </Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly'}}>
          <View style={[styles.roundCard, {backgroundColor: '#43C741'}]}>
            <Text>s</Text>
          </View>
          <Text style={{color: '#803A9B', fontWeight: 'bold'}}>
            {moment(fromDate).diff(moment(toDate), 'days')} Days
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              refRBSheet.current.open();
            }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                width: 20,
                alignItems: 'center',
                left: 20,
              }}>
              <Icon name="up" size={15} color="#757575" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

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
    paddingBottom: 16,
    marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
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
    left: 20,
    elevation: 10,
  },
  fromText: {
    color: '#757575',
  },
});
