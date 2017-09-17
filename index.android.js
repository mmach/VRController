/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';
import { Accelerometer, Gyroscope } from 'react-native-sensors';
import Video from './src/components/video_player/index.js'
let state = {
  servoX: 0,
  servoY: 0
};
let socketIsOpened = false;
var socket = new WebSocket("ws://192.168.8.107:3000/socket");

socket.onopen = function () { socketIsOpened = true; console.log('CONNECTED') };



setInterval(() => {
  if (socketIsOpened == true) {
    socket.send(JSON.stringify(state));
  }
}, 500)
const gyroObservable = new Gyroscope({
  updateInterval: 500,// defaults to 100ms
});
export default class VRController extends Component {
  constructor() {
    super();
    //  this.state.accelerationObservable = new Accelerometer({
    //    updateInterval: 100, // defaults to 100ms
    // });

    gyroObservable
      .map(({ x, y, z }) => {
        return { x: x, y: y, z: z };
      })
      .filter(speed => { return true; })
      .subscribe(speed => {
        state.servoX = Math.round(speed.x * 180 / 6.28);
        state.servoY = Math.round(speed.y * 180 / 6.28);
        //console.log(`gyro X - ${speed.x * 180/6.28}`);
    //    console.log(`gyro Y - ${speed.y * 180 / 6.28}`);
        //console.log( `gyro z - ${speed.z}`)
      });





  }
  render() {


    return (
      <View style={styles.container}>
        <Video style={styles.cam}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cam: {
    alignItems: 'left',
  
  },

});

AppRegistry.registerComponent('VRController', () => VRController);
