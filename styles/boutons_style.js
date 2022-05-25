import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../constantes/colors';

export default StyleSheet.create({
  boutonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 140,
    width: 310,
  },
  boutonValider: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    height: 45
  },
  boutonEffacer: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    height: 45
  },
  labelBoutonValider: {
    textAlign: 'center',
    color: COLORS.textColor
  },
  labelBoutonEffacer: {
    textAlign: 'center',
  }
});

