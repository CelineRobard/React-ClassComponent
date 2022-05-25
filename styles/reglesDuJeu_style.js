import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../constantes/colors';

export default StyleSheet.create({
  reglesContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 500,
    paddingLeft: 50,
    paddingRight: 50,
  },
  reglesListeContainer: {
    flexDirection: 'row',
  },
  reglesListeText: {
    marginLeft: 10,
  }
});
