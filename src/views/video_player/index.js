import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';

import { Accelerometer, Gyroscope } from 'react-native-sensors';
import Video from './../../components/video_player/index.js'
let state = {
  servoX: 0,
  servoY: 0,
  acc: 0,
  angle: 0,
  laser: false,
};
let socketIsOpened = false;
var socket = new WebSocket("ws://192.168.0.241:3000/socket");

socket.onopen = function () { socketIsOpened = true; console.log('CONNECTED') };


export default class RobotConnectionViews extends Component {
  constructor() {
    super();

    setInterval(() => {
      if (socketIsOpened == true) {
        socket.send(JSON.stringify(state));
      }
    }, 50)
    const gyroObservable = new Gyroscope({
      updateInterval: 30,// defaults to 100ms
    });


    gyroObservable
      .map(({ x, y, z }) => {
        return { x: x, y: y, z: z };
      })
      .filter(speed => { return true; })
      .subscribe(speed => {
        state.servoX = Math.round(speed.x * 2);
        state.servoY = Math.round(speed.y * 2);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Video style={styles.cam} />
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
    alignItems: 'flex-start',
    backgroundColor: '#333333',
  },

});

//AppRegistry.registerComponent('RobotConnectionViews', () => RobotConnectionViews);
