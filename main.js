/*
  Learn More:
  http://facebook.github.io/react-native/releases/0.44/docs/modal.html#modal
*/
import Expo from 'expo';
import React from 'react';

import {
  Picker,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import OrientationView from './OrientationView';

class App extends React.Component {
  state = {
    animationType: 'none',
    visible: true,
    transparent: false,
    selectedSupportedOrientation: 0,
    currentOrientation: 'unknown',
    items: [
      "Portrait",
      "Landscape",
      "Landscape left",
      "Portrait and landscape right",
      "Portrait and landscape",
      "Default supportedOrientations"
    ]
  };

  renderPicker = () => (
    <Picker
      selectedValue={this.state.selectedSupportedOrientation}
      onValueChange={(_, i) => this.setState({selectedSupportedOrientation: i})}
      itemStyle={styles.item}
      >
        { this.state.items.map((label, index) => <Picker.Item key={index} label={label} value={index} /> ) }
    </Picker>
  )
  renderContents = () => (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', color: 'black', fontSize: 36, marginBottom: 48}}>{this.state.currentOrientation}</Text>
      {this.renderPicker()}
    </View>
  )

  render = () => (
      <OrientationView
        animationType={this.state.animationType}
        visible={this.state.visible}
        transparent={this.state.transparent}
        selectedSupportedOrientation={this.state.selectedSupportedOrientation}
        orientationDidChange={orientation => this.setState({currentOrientation: orientation})}>
        {this.renderContents()}
      </OrientationView>
    );
}


var styles = StyleSheet.create({
  item: {
    fontSize: 16,
  },
});

Expo.registerRootComponent(App);
