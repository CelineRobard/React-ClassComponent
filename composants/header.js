import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import styles from '../styles/header_style';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <View style={styles.headerTitreContainer}>
          <Text style={styles.headerTitreText}>Guess My Number </Text>
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            style={styles.headerImage}
            source={require('../assets/logo_react_native.png')}
          />
        </View>
      </>
    );
  }
}
