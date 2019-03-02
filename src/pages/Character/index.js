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
        <Text style={[styles.text, {
          fontFamily: "KidsZone",
          fontSize: 28,
          letterSpacing: 2,
          color: '#FFFF00',
          textShadowColor: '#000',
          textShadowOffset: {width: -1, height: -1},
          textShadowRadius: 5,
          textAlign: 'center'
        }]}>
          Selecione um personagem
        </Text>
    
        <ScrollView style={styles.scrollView} >

          <View style={styles.characters}>
            <View style={styles.btnCharacter}>
              <TouchableOpacity onPress={this.navigate.bind(this, 'pedrinho')}>
                <Text style={[styles.text, {
                  fontFamily: "KidsZone",
                  fontSize: 28,
                  letterSpacing: 2,
                  textAlign: 'center',
                  paddingBottom: 3,
                  color: '#214070',
                  textShadowColor: '#000',
                  textShadowOffset: {width: -1, height: -1},
                  textShadowRadius: 5
                }]}>
                    Pedrinho
                </Text>
                <Image style={styles.img} source={require('../../imagens/pedrinho.jpg')}/>
                <Text style={[styles.text, {
                  fontFamily: "AmaticSC-Bold",
                  fontSize: 18,
                  letterSpacing: 2,
                }]}>
                    Pedrinho é uma criança muito legal, ele tem 9 anos e adora brincar.
                    Pedrinho não gosta muito da escola, e recentemente perdeu seu cachorrinho de estimação.
                    Estão sendo dias ruins para Pedrinho. 
                </Text>
              </TouchableOpacity>

            </View>
            <View style={styles.btnCharacter}>
              <TouchableOpacity onPress={this.navigate.bind(this, 'aninha')}>
                  <Text style={[styles.text, {
                      fontFamily: "KidsZone",
                      fontSize: 28,
                      letterSpacing: 2,
                      textAlign: 'center',
                      color: '#f483b6',
                      paddingBottom: 3,
                      textShadowColor: '#000',
                      textShadowOffset: {width: -1, height: -1},
                      textShadowRadius: 5
                    }]}>
                    Aninha
                  </Text>
                  <Image style={styles.img} source={require('../../imagens/aninha.jpg')}/>
                  <Text style={[styles.text, {
                    fontFamily: "AmaticSC-Bold",
                    fontSize: 18,
                    letterSpacing: 2,
                    marginBottom: 40,    
                  }]}>
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
    width: 250,
    maxHeight: 400,
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
