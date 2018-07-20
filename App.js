import {
  StackNavigator,
} from 'react-navigation';

import  VRController from './src/views/main/index' 
import RobotConnectionViews from './src/views/video_player/index' 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  Button
} from 'react-native';

const RootStack = StackNavigator({

  Home: { screen: VRController },
  RobotConnection: { screen: RobotConnectionViews },
},
{
  initialRouteName: 'Home',
});


//AppRegistry.registerComponent('RootStack', () => RootStack);
//AppRegistry.registerComponent('RobotConnectionViews', () => RobotConnectionViews);
//AppRegistry.registerComponent('VRController', () => VRController);

export default RootStack;