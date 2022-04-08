import React, { useRef } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomsheetMessage from './BottomsheetMessage';

const LeaveCard = ({fromDate, toDate}) => {
  const refRBSheet = useRef();
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          refRBSheet.current.open();
        }}>
        <View style={styles.cardContainer}>
          <View>
            <View>
              <View>
                <Text>From</Text>
                <Text>{fromDate}</Text>
              </View>
              <View>
                <Text>To</Text>
                <Text>{toDate}</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.roundCard}>
              <Text>s</Text>
            </View>
            <Text>5 Days</Text>
          </View>
        </View>
      </TouchableHighlight>
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
    marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 10,
    // height: 358,
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
    backgroundColor: '#F4E0FB',
    alignItems: 'center',
  },
});
