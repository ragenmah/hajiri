import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
    TouchableHighlight,
    TouchableOpacity,
    View,Text
  } from 'react-native';

const FilterAndDownload = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'FIlter', value: 'Filter'},
        // {label: 'Sick', value: 'Sick'},
      ]);
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
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
        placeholder={'Filter'}
      />
      <TouchableHighlight
        style={{
          borderRadius: 15,
          backgroundColor: '#803A9B',
          //   marginTop: 25,
          height: 36,
          alignItems: 'center',
          justifyContent: 'center',
          width: 120,
        }}>
        <Text style={{color: '#fff', letterSpacing: 1.24}}>DOWNLOAD</Text>
      </TouchableHighlight>
    </View>
  );
};

export default FilterAndDownload;
