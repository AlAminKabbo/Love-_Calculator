/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
function App() {
  const [firstLover, setFirstLover] = useState('');
  const [secondLover, setSecondLover] = useState('');
  const [result, setResult] = useState(false);
  const p = Math.floor(Math.random() * 100);

  const resultLove = () => {
      setResult(true);
    ;
  };
  return (
    <View style={styles.myView}>
        <Image source={require('.//image/logo.png')} style={styles.img} />
        <Text style={styles.dev}>    developed by Al Amin Kabbo</Text>
        {result ?
        <View style={styles.resultView}>
         <Text style={styles.resultText}>{firstLover} </Text>
         <Image source={require('.//image/love.png')}style={styles.love}/>
         <Text style={styles.resultText}> {secondLover}{'\n\n'}    {p}%</Text>
        </View> 
        : null}
      {!result ? <TextInput
        style = {styles.inputText}
        placeholder="Enter First Lover Name"
        onChangeText={text => setFirstLover(text)}
        value={firstLover}
      /> : null}
      {!result ?<TextInput
        style = {styles.inputText}
        placeholder="Enter your Partner Name"
        onChangeText={text => setSecondLover(text)}
        value={secondLover}
      /> : null}
      <TouchableOpacity style={styles.calculateLove}
            onPress={()=>{
                if(firstLover === '' || setSecondLover === ''){
                    Alert.alert('Opps!!', 'Choice your partner then try again..!');
                    return;
                    }
                if(result)
                {
                    setResult(false);
                    setFirstLover('');
                    setSecondLover('');
                }
                else
                setResult(true);
            }}
      >
            <Text style = {styles.bottonText}>{result ? 'Try Again' : 'Calculate Love'}</Text>
      </TouchableOpacity>
    </View>

  );
}
const styles = StyleSheet.create({
    inputText:{
      margin:10,
      borderBottomWidth:1,
    },
    calculateLove:{
        color:'red',
        backgroundColor:'#ed0900',
        borderRadius: 20,
        width:'50%',
        alignSelf:'center',
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
        padding:20
      },
      love:{
        height: 90,
        width: 90,
        justifyContent:'center'
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
      resultView: {
        flex: 2,
        flexDirection: 'row',
        padding: 15,
        margin: 2,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
      },
      dev: {
        fontSize: 12,
        textAlign: 'center',
        padding: 1,
      },
});

export default App;
