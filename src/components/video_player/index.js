import React, { Component } from 'react';
import { View, Text,WebView ,StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-player';


export default class Video extends Component {
  constructor() {
    super();

    this.state = {
      video: { width: 800, height: 600 },
      //thumbnailUrl: undefined,
      videoUrl: 'http://192.168.8.107:8080/stream/video.mjpeg',
    };
    console.log('Video')
  }

  render() {
    return (

      <WebView
            style={styles.backgroundVideo}
          automaticallyAdjustContentInsets={true}
          scalesPageToFit={true}
          startInLoadingState={false}
          contentInset={{top: 0, right: 0, left: 0, bottom: 0}}
          scrollEnabled={false}
          source={{html: this.formatHtml(), baseUrl: '/'}} />

    );
  }
  formatHtml () {
    return (`<html><body><img src="` + this.state.videoUrl + `" width="50%" style="background-color: white; float:left;min-height: 100%; min-width: 50%; position: fixed; top: 0; left: 0;"/>
    <img src="` + this.state.videoUrl + `" width="50%" style="background-color: white; min-height: 100%; float:left;min-width: 50%; position: fixed; top: 0; left: 50%;"/></body></html>`);
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    width:640,
    height:480
  }
})