import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './Screen/Splash';
import LogIn from './Screen/LogIn';
import ContactUs from './Screen/ContactUs';
import mainScreen from './Screen/mainScreen';

const Stack = createNativeStackNavigator();

const Navigating = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: 'ContactUs',
          headerStyle: {
            backgroundColor: '#f14a28',
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="mainScreen"
        component={mainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return <NavigationContainer>{Navigating()}</NavigationContainer>;
};

export default App;
