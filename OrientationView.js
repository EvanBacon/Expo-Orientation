import React from 'react';

import {
  Modal,
} from 'react-native'

const supportedOrientationsPickerValues = [
  ['portrait'],
  ['landscape'],
  ['landscape-left'],
  ['portrait', 'landscape-right'],
  ['portrait', 'landscape'],
  [],
];

export default class OrientationView extends React.Component {
  state = {
    animationType: 'none',
    modalVisible: true,
    transparent: false,
    selectedSupportedOrientation: 0,
    currentOrientation: 'unknown',
  };

  render() {
    return (
        <Modal
          key={this.props.selectedSupportedOrientation}
          animationType={this.props.animationType}
          transparent={this.props.transparent}
          visible={this.props.visible}
          supportedOrientations={supportedOrientationsPickerValues[this.props.selectedSupportedOrientation]}
          onOrientationChange={evt => {this.setState({currentOrientation: evt.nativeEvent.orientation}); this.props.orientationDidChange(evt.nativeEvent.orientation) }}
          >
            {this.props.children}
        </Modal>
    );
  }
}

OrientationView.defaultProps = {
    selectedSupportedOrientation: 5,
    transparent: false,
    animationType: 'fade',
    visible: true,
    orientationDidChange: (orientation => {}),
    children: []
}
