/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const ContactUs = () => {
  return (
    <View >
      <View style={styles.viewOne}>
        <Text>1</Text>
      </View>
      <View style={styles.viewTwo}>
        <Text>1</Text>
      </View>
      <View style={styles.viewThree}>
        <Text style={styles.NagadSheba}>Nagad Sheba</Text>
      </View>
      <View style={styles.viewFour}>
        <Text>x</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewOne: {
    height:'30%',
    backgroundColor:'red',
  },
  viewTwo: {
    height:'10%',
    backgroundColor:'#f8f8f8',
  },
  viewThree: {
    height:'7%',
    backgroundColor:'#f8f8f8',
  },
  NagadSheba:{
    textAlign:'center',
    color:'#f14a28',
    fontSize: 20,
    padding:10,
  },
  viewFour: {
    height:'53%',
    backgroundColor:'#f8f8f8',
  },
});

export default ContactUs;
