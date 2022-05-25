import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../constantes/colors';

export default StyleSheet.create({
  headerTitreContainer: {
    backgroundColor: COLORS.primary,
    paddingTop: 50,
    paddingBottom: 25,
  },
  headerTitreText: {
    color: COLORS.textColor,
    textAlign: 'center',
    fontSize: 20,
  },
  headerImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  headerImage: {
    width: 90,
    height: 90,
  }
});
