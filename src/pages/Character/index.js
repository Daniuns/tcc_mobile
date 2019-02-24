import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { playerService } from '../../services/playerService';
import { ScrollView } from 'react-native-gesture-handler';

export default class Character extends Component {

  navigate = (character) => {
    playerService.setCharacter(character);
    this.props.navigation.navigate('StoriesScreen');
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>Selecione um personagem</Text>
    
        <ScrollView style={styles.scrollView} >

          <View style={styles.characters}>
            <View style={styles.btnCharacter}>
              <TouchableOpacity onPress={this.navigate.bind(this, 'pedrinho')}>
                <Text style={styles.characterName}>Pedrinho</Text>
                <Image style={styles.img} source={require('../../imagens/pedrinho.jpg')}/>
                <Text style={styles.descriptionCharacter}>
                    Pedrinho é uma criança muito legal, ele tem 9 anos e adora brincar.
                    Pedrinho não gosta muito da escola, e recentemente perdeu seu cachorrinho de estimação.
                    Estão sendo dias ruins para Pedrinho. 
                </Text>
              </TouchableOpacity>

            </View>
            <View style={styles.btnCharacter}>
              <TouchableOpacity onPress={this.navigate.bind(this, 'aninha')}>
                  <Text style={styles.characterName}>Aninha</Text>
                  <Image style={styles.img} source={require('../../imagens/aninha.jpg')}/>
                  <Text>
                    Aninha é uma criança muito divertida, ela tem 9 anos e adora brincar.
                    Aninha não gosta muito da escola, e recentemente perdeu seu cachorrinho de estimação.
                    Estão sendo dias ruins para Aninha.
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#00cefa',
  },
  characters:{
    height: '100%',
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  characterName:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 3
  },
  btnCharacter:{
    borderRadius: 5,
    borderWidth: 2,
    width: 220,
    maxHeight: 310,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    marginTop: 20,
    padding: 10,
    alignSelf: 'center',
  },
  img:{
    width: '100%',
    maxHeight: 150,
    resizeMode:'stretch'
  },
  scrollView:{
    width: '100%',
  }
});
