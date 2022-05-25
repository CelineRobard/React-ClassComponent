import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  jeuContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 240,
  },
  jeuInputLabel: {
    textAlign: 'center',
    fontSize: 20,
  },
  jeuInputText: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 310,
  }
});
