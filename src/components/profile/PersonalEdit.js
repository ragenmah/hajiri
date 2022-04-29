import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomAlert from '../../utils/CustomAlert';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PersonalEdit = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [filePath, setFilePath] = useState({});
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };
  return (
    <View>
      <CustomAlert
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message="Do you want to save the changes?"
      />
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.roundCard}>
          {/* <Text style={styles.graphValue}>92%</Text> */}
          <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
        </View>
        <TouchableHighlight
          activeOpacity={0.1}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.editAvatar}>EDIT IMAGE</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
        }}></View>
      <View style={{marginTop: 10}}>
        <Text>First Name</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>

      <View style={{marginTop: 10}}>
        <Text>Last Name</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View style={{width: '100%', marginTop: 10}}>
        <Text>Employee ID</Text>
        <TextInput
          editable={false}
          style={[
            styles.textInputStyle,
            {backgroundColor: '#E7E7E7'},
          ]}></TextInput>
      </View>
      <View>
        <Text style={{marginTop: 10}}>Email</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View>
        <Text style={{marginTop: 10}}>Designation</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View>
        <Text style={{marginTop: 10}}>Supervisor</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 35,
          marginBottom: 20,
          padding: 30,
        }}>
        <TouchableHighlight
          style={{
            borderRadius: 15,
            backgroundColor: '#803A9B',
            //   marginTop: 25,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
            width: 94,
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: '#fff', letterSpacing: 1.24}}>SAVE</Text>
        </TouchableHighlight>
        <View
          style={{height: 36, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{letterSpacing: 1.25}}>CANCEL</Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalEdit;

const styles = StyleSheet.create({
  roundCard: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: '#F4E0FB',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    borderColor: '#620A83',
    borderRadius: 20,
    borderWidth: 1,
    // textAlignVertical: 'top',
    paddingLeft: 10,
    height: 40,
  },
  editAvatar: {
    color: '#620A83',
    fontWeight: 'bold',
    letterSpacing: 1.24,
    fontSize: 14,
    marginTop: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
