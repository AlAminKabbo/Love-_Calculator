/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View,Image,StyleSheet,Linking, TouchableOpacity, FlatList} from 'react-native';

const numberOne = '16167';
const numberTwo = '09609616167';

const DATA = [
    {
      name: 'Panchagarh Post Office',
      addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar,Panchagarh-5000',
      counter: 1,
      id: 1,
    },
    {
        name: 'Faridpur Head Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar',
        counter: 6,
        id: 2,
    },
    {
        name: 'Panchagarh Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar,Panchagarh-5000',
        counter: 1,
        id: 3,
    },
    {
        name: 'Faridpur Head Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar',
        counter: 4,
        id: 4,
    },
    {
        name: 'Panchagarh Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar,Panchagarh-5000',
        counter: 1,
        id: 5,
    },
    {
        name: 'Faridpur Head Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar',
        counter: 6,
        id: 6,
    },
    {
        name: 'Faridpur Head Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar',
        counter: 4,
        id: 7,
    },
    {
        name: 'Panchagarh Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar,Panchagarh-5000',
        counter: 1,
        id: 8,
    },
    {
        name: 'Faridpur Head Post Office',
        addres: 'Kayatpara, Tetulia Road, Panchagarh Sadar',
        counter: 6,
        id: 9,
    },
  ];

const Item = ({ name, addres, counter }) => (
    <View style={styles.item}>
        <View style={styles.logoView}>
        <Image source={require('../Image/flatLogo.png')} style={styles.flatLogo}/>
            <View>
            <Text style={styles.name}>{name}</Text>
            <Text>{addres}</Text>
            <Text>Counter : {counter}</Text>
            <Text>Open- Close: 9.00 AM to 5:00 PM</Text>
            </View>
        </View>
    </View>
);

const ContactUs = () => {
    const renderItem = ({item}) => (
        <Item name={item.name} addres={item.addres} counter={item.counter}/>
      );
  return (
    <View >
      <View style={styles.viewOne}>
      <Image style={styles.getInTouch} source={require('../Image/contactUs.jpg')}/>
      </View>
        <View style={styles.viewTwo}>
            <TouchableOpacity 
            onPress={() =>{Linking.openURL(`tel:${numberOne}`)}}>
            <View>
            <Image style={styles.dial}source={require('../Image/dial.png')}/>
            <Text>16167</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() =>{Linking.openURL(`tel:${numberTwo}`)}}>
            <View>
            <Image style={styles.dial} source={require('../Image/dial.png')}/>
            <Text>096 096 16167</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => Linking.openURL('mailto:info@nagad.com.bd') }>
            <View>
            <Image style={styles.mail} source={require('../Image/mail.png')}/>
            <Text>info@nagad.com.bd</Text>
            </View>
            </TouchableOpacity>
      </View>
      <View style={styles.viewThree}>
        <Text style={styles.NagadSheba}>Nagad Sheba</Text>
      </View>
      
      <View style={styles.viewFour}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  viewOne: {
    height:'30%',
    backgroundColor:'red',
  },
  getInTouch:{
    height:'100%',
    width:'100%',
  },
  viewTwo: {
    height:'10%',
    backgroundColor:'#f8f8f8',
    flexDirection:'row',
    bottom: 1,
    alignSelf: 'center',
    justifyContent:'space-around',
    marginTop:8,
    marginLeft:30,
    width:'90%',
  },
  dial:{
    alignSelf:'center',
  },
  mail:{
      alignSelf:'center',
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
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 8,
    borderRadius: 12,
    elevation: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  name: {
      fontWeight:'bold',
  },
  logoView:{
    flexDirection:'row',
    padding:8,
  },
  flatLogo:{
    height:50,
    width:50,
    marginEnd:10,
    alignSelf:'center',
  },
});

export default ContactUs;
