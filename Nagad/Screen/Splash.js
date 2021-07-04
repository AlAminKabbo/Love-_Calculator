import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Screen/Splash')}
        style={styles.image}>
        <Text style={styles.text}>1.0.71.01</Text>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Splash;
