import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Boutons from './boutons';
import styles from '../styles/logiqueDeJeu_style';

export default class Jeu extends React.Component {
  state = {
    chiffre: '',
    isMagique: false,
  };
  setChiffre = (chiffre) => {
    this.setState({ chiffre: chiffre });
    this.checkMagique(parseInt(chiffre));
  };
  reset = () => {
    this.setState({ chiffre: '' });
    this.setState({ isMagique: false});
  };
  checkMagique = (chiffre) => {
    if (chiffre === 2021) {
      this.setState({ isMagique: true });
    } else {
        this.setState({ isMagique: false });
    }
  };

  render() {
    return (
      <View style={styles.jeuContainer}>
        <Text style={styles.jeuInputLabel}>Devinez le chiffre magique </Text>
        <TextInput
          style={styles.jeuInputText}
          value={this.state.chiffre}
          onChangeText={this.setChiffre}
          placeholder="saisir le chiffre"
          keyboardType="numeric"
        />
        <Boutons
          isMagique={this.state.isMagique}
          chiffre={this.state.chiffre}
          resetOnPress={this.reset}
        />
      </View>
    );
  }
}
