import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../styles/reglesDuJeu_style';

const REGLES = [
  `L’utilisateur devra saisir un chiffre dans un « TextInput ». Ce chiffre sera récupéré dans le programme et comparé avec le chiffre magique 2021`,
  `Si le chiffre entré par l’utilisateur est inférieur au chiffre magique, un message devra être affiché pour mentionner que le chiffre n’est pas le bon car il est inférieur au chiffre magique.`,
  `Si le chiffre entré par l’utilisateur est supérieur au chiffre magique, un message devra être affiché pour mentionner que le chiffre n’est pas le bon car il est supérieur au chiffre magique.`,
  `Si le chiffre entré par l’utilisateur est égal au chiffre magique, il faut afficher un message de félicitation.`,
];

export default class ReglesDuJeu extends React.Component {
  render() {
    return (
      <View style={styles.reglesContainer}>
        <Text>Règles du jeu :</Text>
        {REGLES.map((item, index) => {
          return (
            <View key={index} style={styles.reglesListeContainer}>
              <Text> {index + 1}. </Text>
              <Text style={styles.reglesListeText}> {item} </Text>
            </View>
          );
        })}
      </View>
    );
  }
}
