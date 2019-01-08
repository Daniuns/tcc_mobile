import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { playerService } from '../../services/playerService';

export default class Character extends Component {

  navigate = (character) => {
    playerService.setCharacter(character);
    this.props.navigation.navigate('StoriesScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.characters}>Selecione um personagem</Text>
        <TouchableOpacity onPress={this.navigate.bind(this, 'Pedrinho')} style={styles.btnCharacter}>
          <Text>Pedrinho</Text>
          <Text>
              Pedrinho é blá blá blá...
              Pedrinho é blá blá blá...
              Pedrinho é blá blá blá...
              Pedrinho é blá blá blá...
              Pedrinho é blá blá blá...
              Pedrinho é blá blá blá...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigate.bind(this, 'Aninha')} style={styles.btnCharacter}>
            <Text>Aninha</Text>            
            <Text>
              Aninha é blá blá blá...
              Aninha é blá blá blá...
              Aninha é blá blá blá...
              Aninha é blá blá blá...
              Aninha é blá blá blá...
              Aninha é blá blá blá...
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  btnCharacter:{
    borderRadius: 5,
    borderWidth: 2,
    width: 200,
    height: 'auto',
    borderColor: '#ccc'
  }
});
