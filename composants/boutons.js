import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/boutons_style';

export default class Boutons extends React.Component {
  alert = () => {
    if (this.props.isMagique) {
      Alert.alert('Message !', 'Bravo vous avez trouvé le chiffre magique.', [
        { text: "D'accord", onPress: () => {} },
      ]);
    } else {
      if (this.props.chiffre < 2021) {
        Alert.alert(
          'Message !',
          'Le chiffre que vous avez saisi est inférieur au chiffre magique.',
          [{ text: "D'accord", onPress: () => {} }]
        );
      } else {
        Alert.alert(
          'Message !',
          'Le chiffre que vous avez saisi est supérieur au chiffre magique.',
          [{ text: "D'accord", onPress: () => {} }]
        );
      }
    }
  };

  render() {
    return (
      <View style={styles.boutonsContainer}>
        <TouchableOpacity style={styles.boutonValider} onPress={this.alert}>
          <Text style={styles.labelBoutonValider}>Valider</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boutonEffacer}
          onPress={this.props.resetOnPress}>
          <Text style={styles.labelBoutonEffacer}>Effacer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
