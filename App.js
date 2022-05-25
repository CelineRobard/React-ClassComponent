import React from 'react';
import { ScrollView } from 'react-native';
import Header from './composants/header';
import Jeu from './composants/logiqueDeJeu';
import ReglesDuJeu from './composants/reglesDuJeu';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ScrollView>
          <Jeu />
          <ReglesDuJeu />
        </ScrollView>
      </>
    );
  }
}