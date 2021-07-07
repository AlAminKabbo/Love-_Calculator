import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
const mainScreen = () => {
  return (
    <View style={styles.item}>
      <Image source={require('../Image/mainScreen.jpg')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: '-10%',
  },
  img: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: '100%',
  },
});
export default mainScreen;
