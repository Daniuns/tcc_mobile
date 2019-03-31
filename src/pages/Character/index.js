import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, ImageBackground, ScrollView} from 'react-native';
import { playerService } from '../../services/playerService';

export default class Character extends Component {

  constructor(){
    super();
    this.state = {previewCharacter: undefined, modalVisible: false};
  }

  navigate = () => {
    const character = this.state.previewCharacter;
    playerService.setCharacter(character);
    this.closeModal();
    this.props.navigation.navigate('StoriesScreen');
  }

  previewCharacter = (character) => {
    this.setState({previewCharacter: character, modalVisible: true})
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  render() {
    const {previewCharacter} = this.state;
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
    
        <ScrollView style={styles.scrollView}>
          <View style={styles.characters}>
              <TouchableOpacity style={styles.btnCharacter} onPress={this.previewCharacter.bind(this, 'pedrinho')}>
                <ImageBackground
                  resizeMode='stretch'
                  style={styles.ImageBackground}
                  source={require('../../imagens/pedrinho.jpeg')}
                >
                  <Text style={[styles.text, {
                    fontFamily: "KidsZone",
                    fontSize: 18,
                    letterSpacing: 2,
                    paddingBottom: 3,
                    color: 'red',
                    textShadowColor: '#000',
                    textShadowOffset: {width: -1, height: -1},
                    textShadowRadius: 5,
                    padding: 10
                  }]}>
                      Pedrinho
                  </Text>

                </ImageBackground>

              </TouchableOpacity>

              <TouchableOpacity style={styles.btnCharacter} onPress={this.previewCharacter.bind(this, 'aninha')}>
                <ImageBackground
                  resizeMode='stretch'
                  style={styles.ImageBackground}
                  source={require('../../imagens/aninha.jpeg')}
                >
                  <Text style={[styles.text, {
                    fontFamily: "KidsZone",
                    fontSize: 18,
                    letterSpacing: 2,
                    paddingBottom: 3,
                    color: '#f483b6',
                    textShadowColor: '#000',
                    textShadowOffset: {width: -1, height: -1},
                    textShadowRadius: 5,
                    padding: 10
                  }]}>
                      Aninha
                  </Text>

                </ImageBackground>

              </TouchableOpacity>
          </View>
        </ScrollView>

          
        {previewCharacter ? 
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}
          >
            <ImageBackground 
              resizeMode='stretch'
              style={styles.ImageBackgroundModal}
              source={previewCharacter == 'pedrinho' ? require('../../imagens/pedrinho.jpeg') : require('../../imagens/aninha.jpeg')}
              blurRadius={2}
            >
              <View style={{padding: 10, justifyContent: 'space-around', height: '100%'}}>
                <Text style={[styles.text, {
                    fontFamily: "KidsZone",
                    fontSize: 28,
                    letterSpacing: 2,
                    color: '#FFFF00',
                    textShadowColor: '#000',
                    textShadowOffset: {width: -1, height: -1},
                    textShadowRadius: 5,
                    textAlign: 'center'
                  }]}
                >
                  {previewCharacter == 'pedrinho' ? 
                    `Pedrinho é uma criança muito legal, ele tem 9 anos e adora brincar.
Pedrinho não gosta muito da escola, e recentemente perdeu seu cachorrinho de estimação.
Estão sendo dias ruins para Pedrinho.`
                    : `Aninha é uma criança muito divertida, ela tem 9 anos e adora brincar.
Aninha não gosta muito da escola, e recentemente perdeu seu cachorrinho de estimação.
Estão sendo dias ruins para Aninha.`
                  }
                </Text>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity onPress={this.closeModal}>
                    <Text style={[styles.text, {
                      fontFamily: "KidsZone",
                      fontSize: 28,
                      letterSpacing: 2,
                      color: 'red',
                      textShadowColor: '#000',
                      padding: 10,
                      textShadowOffset: {width: -1, height: -1},
                      textShadowRadius: 5,
                      textDecorationLine: 'underline'
                    }]}>
                      Cancelar
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.navigate}>
                    <Text style={[styles.text, {
                      fontFamily: "KidsZone",
                      fontSize: 28,
                      letterSpacing: 2,
                      color: '#68d23f',
                      textShadowColor: '#000',
                      padding: 10,
                      textShadowOffset: {width: -1, height: -1},
                      textShadowRadius: 5,
                      textDecorationLine: 'underline'
                    }]}>
                      Continuar
                    </Text>
                  </TouchableOpacity>

                </View>
              </View>
            </ImageBackground>
          </Modal>
      :null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#1b212e',
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
    height: 270,
    backgroundColor: '#FCF6DE',
    borderColor: '#ccc',
    marginTop: 20,
    alignSelf: 'center',
  },
  img:{
    width: '100%',
    maxHeight: 180,
    resizeMode:'stretch'
  },

  ImageBackground:{
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  ImageBackgroundModal:{
    width: '100%',
    height: '100%',
  },

  scrollView:{
    width: '100%',
  }
});
