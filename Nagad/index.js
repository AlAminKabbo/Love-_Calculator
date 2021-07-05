/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './Screen/Splash';
import LogIn from './Screen/LogIn';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LogIn);
