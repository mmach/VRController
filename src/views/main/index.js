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
  DeviceEventEmitter,
  Button
} from 'react-native';

export default class VRController extends React.Component {
  constructor() {
    super()

  }
  render() {
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            this.props.navigation.navigate('RobotConnection', { name: 'Jane' })
          }
        />
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

//AppRegistry.registerComponent('VRController', () => VRController);
