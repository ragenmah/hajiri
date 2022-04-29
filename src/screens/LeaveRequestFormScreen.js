import React, {useEffect, useState} from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import DateRangePicker from 'react-native-daterange-picker';

import LeaveStats from '../components/leave/LeaveStats';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_BASE_URL} from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {postApplyLeave} from '../redux/actions/leaveActions';
import CustomMsgAlert from '../utils/CustomMsgAlert';

const LeaveRequestFormScreen = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([
    {label: 'Annual', value: 'Annual'},
    {label: 'Sick', value: 'Sick'},
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [leaveReason, setLeaveReason] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [ToDate, setToDate] = useState(new Date());
  const [openTODate, setOpenTODate] = useState(false);
  const [ToDateChanged, setToDateChanged] = useState(false);
  const [startDateChanged, setStartDateChanged] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  var SharedPreferences = require('react-native-shared-preferences');

  const [userToken, setUserToken] = useState('');

  const dispatch = useDispatch();
  const {leaveReducers} = useSelector(state => state);
  const postLeaveRequest = data => dispatch(postApplyLeave(data, userToken));

  const [datePickerDate, setDatePickerDate] = useState({
    startDateM: null,
    endDateM: null,
    displayedDateM: moment(),
    minDateM: moment(),
    // maxDate: moment().set("date", 20),
  });
  const {startDateM, endDateM, displayedDateM, minDateM} = datePickerDate;
  const data = {
    reason_title: value,
    reason_desc: leaveReason,
    from: startDate,
    till: ToDate,
  };
  useEffect(() => {
    SharedPreferences.getItem('token', function (value) {
      setUserToken(value);
    });
  });
  const handleFormRequest = async () => {
    setIsLoading(true);
    console.log('hell to thre king');
    postLeaveRequest(data, userToken);
    setIsLoading(false);
    if (leaveReducers?.postData?.msg != '') {
      setModalVisible(true);
    }
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <CustomMsgAlert
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message={'Request Sent!'}
      />
      <ScrollView>
        <LeaveStats />

        <Icon
          name="doubleleft"
          size={25}
          color="#803A9B"
          style={{paddingLeft: 30, paddingTop: 5}}
          onPress={() => {
            navigation.navigate('LeaveRequestStack');
            //   console.log()
          }}
        />
        <Image
          source={require('../../assets/images/hajiri_logo.png')}
          resizeMode={'cover'}
          style={{width: 75, height: 90, alignSelf: 'center'}}
        />
        <Image
          source={require('../../assets/images/HAJIRI.png')}
          resizeMode={'cover'}
          style={{marginTop: 7, alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 36,
            marginBottom: 30,
            marginTop: 20,
            fontWeight: 'bold',
            color: '#1F1F1F',
          }}>
          Request for Leave
        </Text>
        <View style={{paddingLeft: 36, paddingRight: 50}}>
          <View>
            <Text style={{color: '#5D5D5D', fontSize: 16}}>Type of Leave</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                color: '#620A83',
                width: 105,
                height: 28,
                borderColor: '#620A83',
                fontSize: 14,
                marginTop: 6,
              }}
              containerStyle={{
                width: 105,
                height: 50,
              }}
              textStyle={{
                color: '#620A83',
              }}
              // labelStyle={{
              //   fontWeight: "bold"
              // }}
              zIndex={3000}
              zIndexInverse={3000}
              placeholder={'Select'}
            />
          </View>
          <View>
            <Text style={{fontSize: 16}}>Reason for leave</Text>
            <TextInput
              multiline={true}
              numberOfLines={8}
              onChangeText={text => setLeaveReason(text)}
              value={leaveReason}
              style={{
                borderColor: '#620A83',
                borderRadius: 8,
                borderWidth: 1,
                textAlignVertical: 'top',
                paddingLeft: 10,
              }}
              autoCapitalize={'sentences'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16}}>Days</Text>
            <TouchableOpacity onPress={() => setOpenDate(true)}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 5,
                  paddingTop: 5,
                  fontSize: 12,
                }}>
                <Text>
                  {startDateChanged
                    ? moment(startDate).format('DD-MM-YYYY')
                    : 'DD-MM-YYYY'}
                </Text>
              </View>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={openDate}
              date={startDate}
              onConfirm={date => {
                setOpenDate(false);
                setStartDate(date);
                setStartDateChanged(true);
                // console.warn(startDate);
              }}
              onCancel={() => {
                setOpenDate(false);
              }}
            />
            <Text style={{fontSize: 16}}>-</Text>
            <TouchableOpacity onPress={() => setOpenTODate(true)}>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 5,
                  paddingTop: 5,
                  fontSize: 12,
                }}>
                <Text>
                  {ToDateChanged
                    ? moment(ToDate).format('DD-MM-YYYY')
                    : 'DD-MM-YYYY'}
                </Text>
              </View>
            </TouchableOpacity>

            <DatePicker
              modal
              mode="date"
              open={openTODate}
              date={ToDate}
              onConfirm={date => {
                setOpenTODate(false);
                setToDate(date);
                setToDateChanged(true);
              }}
              onCancel={() => {
                setOpenTODate(false);
              }}
            />
            <DateRangePicker
              onChange={() => {
                setDatePickerDate;
                console.log(startDateM);
              }}
              startDate={startDateM}
              endDate={endDateM}
              // minDate={minDateM}
              // maxDate={maxDate}
              range
              displayedDate={displayedDateM}>
              <Image
                source={require('../../assets/images/icons/calendar.png')}
                resizeMode={'cover'}
                style={{marginRight: 20}}
              />
            </DateRangePicker>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 16}}>Supervisor</Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 5,
                paddingTop: 5,
                fontSize: 12,
                marginTop: 5,
              }}>
              <Text style={{fontSize: 16}}>SuperVisor name</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <TouchableHighlight
              style={{
                borderRadius: 15,
                backgroundColor: '#803A9B',
                //   marginTop: 25,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
                width: 190,
              }}
              onPress={() => {
                console.log('loggged');
                handleFormRequest();
              }}>
              <Text style={{color: '#fff', letterSpacing: 1.24}}>
                SEND REQUEST
              </Text>
            </TouchableHighlight>
            <View
              style={{
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{letterSpacing: 1.25}}
                onPress={() => {
                  navigation.navigate('LeaveRequestStack');
                  //   console.log()
                }}>
                CANCEL
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaveRequestFormScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
  },
});
