import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ApplyDutyForm from './components/ApplyDutyForm';

const ApplyDuty = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <ApplyDutyForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message={''}
      />

      <View>
        <Icon name="error-outline" size={25} color={'red'} />
      </View>
      <Text style={styles.headerText}>You were absent on 24/02/2022.</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.applyText}>APPLY DUTY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyDuty;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    marginHorizontal: 16,
    fontFamily: 'Inter',
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  applyText: {
    color: '#620A83',
    fontSize: 14,
    letterSpacing: 1.24,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
});
