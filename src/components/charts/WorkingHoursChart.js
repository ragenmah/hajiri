import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import {BarChart} from 'react-native-chart-kit';
import DropDownPicker from 'react-native-dropdown-picker';

// import {BarChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import {BarChart, Grid} from 'react-native-svg-charts';
import {transformDataForBarChart} from '../../redux/actions/workHoursActions';

const WorkingHoursChart = () => {
  const data5 = [10, 20, 60, 30, 5, 90, 21, 47, 68, 88, 96, 55, 10, 73];
  const dataWithPickedColors = data5.map(item =>
    transformDataForBarChart(item),
  );

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Monthly', value: 'Monthly'},
    {label: 'Yearly', value: 'Yearly'},
  ]);

  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headerText}>Working Hours</Text>
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
            fontSize: 12,
          }}
          containerStyle={{
            width: 105,
            height: 60,
          }}
          textStyle={{
            color: '#620A83',
          }}
          // labelStyle={{
          //   fontWeight: "bold"
          // }}
          zIndex={3000}
          zIndexInverse={3000}
          placeholder={'Monthly'}
        />
      </View>

      <View>
        <BarChart
          style={{height: 220}}
          spacingInner={0.1}
          gridMin={-10}
          gridMax={120}
          data={dataWithPickedColors}
          yAccessor={({item}) => item.value}
          contentInset={{top: 30, bottom: 30}}>
          <Grid></Grid>
        </BarChart>
        <View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default WorkingHoursChart;

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
    paddingBottom: 10,
    marginBottom: 10,
  },

  headerText: {
    color: '#1F1F1F',
    // left: 24,
    letterSpacing: 0.15,
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
