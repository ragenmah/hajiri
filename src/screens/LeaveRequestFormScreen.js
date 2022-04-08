import React, {useState} from 'react';
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
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import LeaveStats from '../components/leave/LeaveStats';

const LeaveRequestFormScreen = () => {
  const [items, setItems] = useState([
    {label: 'Annual', value: 'Annual'},
    {label: 'Sick', value: 'Sick'},
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [leaveReason, setLeaveReason] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [ToDate, setToDate] = useState(new Date());
  const [openTODate, setOpenTODate] = useState(false);
  const [ToDateChanged, setToDateChanged] = useState(false);
  const [startDateChanged, setStartDateChanged] = useState(false);

  return (
    <SafeAreaView style={styles.scrollContainer}>
      <ScrollView>
      <LeaveStats/>
        <Image
          source={require('../../assets/images/hajiri_logo.png')}
          resizeMode={'cover'}
          style={{width: 75, height: 90, alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 36,
            marginBottom:30,
            marginTop:10,
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
              placeholder={'Annual'}
            />
          </View>
          <View>
            <Text style={{fontSize: 16}}>Reason for leave</Text>
            <TextInput
              multiline={true}
              numberOfLines={8}
              onChangeText={text => setLeaveReason({text})}
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
              marginTop: 40,
              alignItems: 'center',
            }}>
            <Text style={{fontSize:16}}>Days</Text>
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
                setStartDateChanged(true)
                // console.warn(startDate);
              }}
              onCancel={() => {
                setOpenDate(false);
              }}
            />
            <Text style={{fontSize:16}}>-</Text>
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
                setToDateChanged(true)
              }}
              onCancel={() => {
                setOpenTODate(false);
              }}
            />
          </View>
          <View style={{marginTop:10}}> 
            <Text style={{fontSize:16}}>Supervisor</Text>
            <View  style={{
                  borderWidth: 1,
                  borderRadius: 20,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 5,
                  paddingTop: 5,
                  fontSize: 12,
                  marginTop:5
                }}>
              <Text style={{fontSize:16}}>SuperVisor name</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:20, marginBottom:20}}>
            <TouchableHighlight
            style={{
          borderRadius: 15,
          backgroundColor: '#803A9B',
        //   marginTop: 25,
          height: 36,
          alignItems: 'center',
          justifyContent: 'center',
          width:190
        }}>
              <Text style={{color:"#fff",letterSpacing:1.24}}>SEND REQUEST</Text>
            </TouchableHighlight>
            <View style={{height: 36,alignItems: 'center',
          justifyContent: 'center',}}>

            <Text style={{letterSpacing:1.25}}>CANCEL</Text>
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
