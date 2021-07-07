/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, TextInput,StatusBar,Linking, Alert} from 'react-native';


const LogIn = ({ navigation }) => {
  const [number, setNumber] = useState('');

  const Number = '01728-861499';
  const pasword = '1234';
  const check = ()=>{
    if (number === pasword)
    {navigation.navigate('mainScreen');}
    else
    {Alert.alert( 'Login Failed', 'Wrong PIN. Please check and try again.');}
  };
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle="white-content"
        hidden={false}
        backgroundColor="#f14a28"
        translucent={true}
        />
      <Image source={require('../Image/nagadLogo.png')} style={styles.image} />
      <Text style={styles.mobileNumber}>Mobile Number</Text>

      <Text style={styles.number}>{Number}</Text>
      <View style={styles.colum}>
      <Image source={require('../Image/lock.jpg')} style={styles.lock} />
      <TextInput
        style={styles.input}
        placeholder="PIN"
        onChangeText={(text) => setNumber(text)}
        value={number}
        secureTextEntry
        keyboardType="numeric"
        maxLength={4}
      />
      </View>

      <TouchableOpacity onPress={check}>
          <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Please Wait', 'This feature is coming soon...')}>
          <Text style={styles.forgot}>Forgot PIN ?</Text>
      </TouchableOpacity>

      <View style={styles.icon}>
        <TouchableOpacity onPress={() => Alert.alert('Please Wait', 'This feature is coming soon...')}>
        <Image source={require('../Image/storeLocator.png')} style={styles.storeLocator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {Linking.openURL('https://nagad.com.bd/en/');}}>
        <Image source={require('../Image/offers.png')} style={styles.offers} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
        <Image source={require('../Image/help.png')} style={styles.help} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 140,
    width: 120,
    marginTop: 70,
    alignSelf:'center',
  },
  mobileNumber:{
      marginTop: 15,
      textAlign: 'center',
      color:'#c1c1c1',
      marginBottom: 7,
  },
  number:{
      fontSize:19,
      textAlign: 'center',
      marginBottom: 10,
  },
  input:{
      color:'#f14a28',
      marginHorizontal: 10,
      fontSize: 18,
      borderBottomWidth:1,
      width:300,
  },

  login:{
    fontSize: 20,
    textAlign:'center',
    alignSelf:'center',
    backgroundColor:'#f14a28',
    color:'white',
    borderRadius: 50,
    margin: 25,
    width:250,
    padding:8,
  },
  forgot:{
    textAlign:'center',
    color:'#c1c1c1',
  },
  colum:{
      flexDirection:'row',
  },
  icon:{
    flexDirection:'row',
    position: 'absolute',
    bottom: 1,
    alignSelf: 'center',
    justifyContent:'space-around',
    width:'80%',
    },
  lock:{
      marginLeft:20,
      marginTop:9,
  },
  storeLocator:{
      marginBottom:15,
  },
  offers:{
    marginTop:5,
  },
  help:{
    marginTop:5,
  },
});
export default LogIn;
