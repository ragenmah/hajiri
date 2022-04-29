import React from 'react';
import {View, SafeAreaView, StyleSheet, Pressable} from 'react-native';

const RenderPagination = ({activeIndex}) => {
  return (
    <View style={styles.paginationContainer}>
      <View style={styles.paginationDots}>
        <Pressable
          // key={i}
          style={[
            styles.dot,
            activeIndex === 0
              ? {backgroundColor: 'white'}
              : {backgroundColor: 'rgba(0, 0, 0, 0.2)'},
          ]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default RenderPagination;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#1cb278',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});
