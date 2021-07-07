import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import LogIn from './LogIn';
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace(LogIn);
  }, 2000);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white-content"
        hidden={false}
        backgroundColor="#f14a28"
        translucent={true}
      />
      <ImageBackground
        source={require('../Image/SplashScreen.jpg')}
        style={styles.image}>
        <View style={styles.textView}>
          <ActivityIndicator size="small" color="white" />
          <Text style={styles.text}>1.0.71.01</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  textView: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});

export default Splash;
