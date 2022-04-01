import React, {useState} from 'react';
import {StyleSheet, Text, View, Picker, Dimensions} from 'react-native';
import PieChart from 'react-native-pie-chart';
import StatsCard from './components/StatsCard';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  LineChart,
  BarChart,
  // PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const AttendanceChart = () => {
  const widthAndHeight = 180;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Monthly', value: 'Monthly'},
    {label: 'Yearly', value: 'Yearly'},
  ]);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.headerText}>Attendance</Text>
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

      <View style={styles.graphContainer}>
        <View style={styles.graphStyle}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.68}
            coverFill={'#FFF'}
          />
          <View style={styles.roundGraphCard}>
            <Text style={styles.graphValue}>92%</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <StatsCard color={'#F44336'} title={'Present'} days={'21 days'} />
          <StatsCard color={'#2196F3'} title={'Absent'} days={'2 days'} />
          <StatsCard color={'#FFEB3B'} title={'Holidays'} days={'8 days'} />
        </View>
        {/* <BarChart
  // style={graphStyle}
  data={data}
  width={screenWidth}
  height={220}
  yAxisLabel="$"
  chartConfig={chartConfig}
  verticalLabelRotation={30}
/> */}
      </View>
    </View>
  );
};

export default AttendanceChart;

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
  graphContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graphStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundGraphCard: {
    position: 'absolute',
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F4E0FB',
  },
  graphValue: {
    fontSize: 20,
    fontWeight: 'bold',
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
  statsContainer: {
    // padding:40
  },
});
