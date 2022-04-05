import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import DropDownPicker from 'react-native-dropdown-picker';

const WorkingHoursChart = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Monthly', value: 'Monthly'},
    {label: 'Yearly', value: 'Yearly'},
  ]);
  const data = {
    labels: ['1', '2', '3', '4', '5', '6','7'],
    datasets: [
      {
        data: [5, 8, 10, 55, 44, 8,12],
      },
    ],
  };
  const screenWidth = Dimensions.get('window').width * 0.8;
  const chartConfig = {
    // backgroundGradientFrom: '#1E2923',
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: '#08130D',
    // backgroundGradientToOpacity: 0.5,
    backgroundColor:"#000",
    // color: "#0000",
    color: (opacity = 0) => `rgba(26, 255, 146, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    // useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headerText}>Workin Hours</Text>
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
            height: 90,
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

      <BarChart
        style={{
            // backgroundColor:"#fff",
        //   marginVertical: 8,
        //   borderRadius: 16,
        }}
        data={data}
        width={screenWidth}
        height={220}
        // yAxisLabel="$"
        chartConfig={chartConfig}
        // verticalLabelRotation={30}
      />
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
    paddingBottom:10,
    marginBottom:10
  },

  headerText: {
    color: '#1F1F1F',
    // left: 24,
    letterSpacing: 0.15,
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
