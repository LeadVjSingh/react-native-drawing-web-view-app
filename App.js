import React, { Component } from "react";
import { Text, View, StyleSheet, WebView } from "react-native";
import { Constants } from "expo";

export default class App extends Component {
  render() {
    const url = 'http://192.168.43.142:3000/';

    return (
      <WebView
        source={{
          uri: url
        }}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        style={{ flex: 1 }}
      />
    );
  }
}
