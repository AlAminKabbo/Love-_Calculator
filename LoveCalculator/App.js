/* eslint-disable prettier/prettier */
import React, {useState,useEffect}from 'react';
import {Image, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
function App() {
  const [firstLover, setFirstLover] = useState('');
  const [secondLover, setSecondLover] = useState('');
  const [result, setResult] = useState(false);
  const p = Math.floor(Math.random() * 100);

  return (
        <View style={styles.myView}>
        <Image source={require('.//image/logo.png')} style={styles.img} />
        <Text style={styles.dev}>    developed by Al Amin Kabbo</Text>
        {result ?
          <View style={styles.newView}>
              <View style={styles.resultView}>
              <Text style={styles.resultText}>{firstLover}</Text>
              <Image style={styles.love} source={require('.//image/love.png')}/>
              <Text style={styles.resultText}>{secondLover}</Text>
              </View>
              <View>
                  <Text style={styles.percent}>{p}%</Text>
                  {p<=30 ? <Text style={styles.comment}>{'\n'} Bad Choice!!</Text>: null}
                  {p>30 && p<=60 ? <Text style={styles.comment}>{'\n'} Not Bad!! It's Okey</Text>: null}
                  {p>60 && p<=80 ? <Text style={styles.comment}>{'\n'} WOW !! Good Choice</Text>: null}
                  {p>80 && p<=90 ? <Text style={styles.comment}>{'\n'} Congratulations !! Perfect Choice</Text>: null}
                  {p>90 && p<=100 ? <Text style={styles.comment}>{'\n'} ও মাগো!! টুরু লাভ </Text>: null}
              </View>
         </View>
        : null}
      {!result ? <TextInput
        style = {styles.inputText}
        placeholder="Enter Your Name"
        onChangeText={text => setFirstLover(text)}
        value={firstLover}
      /> : null}
      {!result ? <TextInput
        style = {styles.inputText}
        placeholder="Enter Your Partner Name"
        onChangeText={text => setSecondLover(text)}
        value={secondLover}
      /> : null}
      <TouchableOpacity style={styles.calculateLove}
            onPress={()=>{
                if (firstLover === ''){
                    Alert.alert('Opps!!', 'Enter your name then try again..!');
                    return;
                    }
                else if (secondLover === ''){
                  Alert.alert('Opps!!', 'Choice your Partner name then try again..!');
                  return;
                }
                if (result)
                {
                    setResult(false);
                    setFirstLover('');
                    setSecondLover('');
                }
                else {
                setResult(true);
                }
            }}
      >
          <Text style = {[{borderRadius:20,backgroundColor: result ? 'green' : 'red'}, styles.bottonText]}>{result ? 'Try Again'  : 'Calculate Love'}</Text>
      </TouchableOpacity>
    </View>

  );
}
const styles = StyleSheet.create({
    inputText : {
      margin : 10,
      borderBottomWidth:1,
    },
    calculateLove:{
        color:'red',
        backgroundColor:'red',
        borderRadius: 20,
        width:'45%',
        alignSelf:'center',
        marginTop:10,
    },
    bottonText:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        justifyContent:'center',
        paddingVertical: 10,
    },
    resultText:{
        textAlign:'center',
        fontSize: 30,
    },
    img: {
        alignSelf: 'center',
        height: 90,
        width: 230,
        borderRadius: 15,
        padding:20,
      },
      love:{
        height: 120,
        width: 120,
       alignSelf:'center',
      },
      myView: {
        flex: 2,
        padding: 15,
        margin: 2,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
      },
      newView:{
        height: 400,
        //flex: 1,
        padding: 20,
        // margin: 2,
        // marginTop:1,
        // marginBottom:20,
        marginVertical:20,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
      },
      resultView: {
        //flex: 2,
        //flexDirection: 'row',
        padding: 45,
        marginTop: 20,
        //margin: 0,
        //borderRadius: 15,
        //backgroundColor: 'white',
        justifyContent: 'center',
      },
      dev: {
        fontSize: 12,
        textAlign: 'center',
        padding: 5,
      },
      percent:{
        textAlign:'center',
        fontSize: 40,
        justifyContent:'center',
        fontWeight:'bold',
        color:'white',
        backgroundColor:'red',
        borderRadius:15,
      },
      comment:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:40,
      }
});

export default App;
