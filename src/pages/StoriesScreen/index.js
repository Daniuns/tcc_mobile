import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Modal, ImageBackground, ScrollView} from 'react-native';
import stories from '../../stories';
import { storyService } from '../../services/storyService';
import { playerService } from '../../services/playerService';
import { bindComponent } from '../../operators/bindComponent';

export default class StoriesScreen extends Component {

  constructor(){
    super();
    this.state = {modalVisible: false, previewStory: undefined};
  }

  componentDidMount(){
    playerService.getCharacter()
    .pipe(bindComponent(this))
    .subscribe(c => this.setState({char: c}));
  }

  navigate = () => {
    const story = this.state.previewStory;
    storyService.setStory(story);
    this.closeModal();
    this.props.navigation.navigate('Main');
  }

  closeModal = () => {
    this.setState({modalVisible: false})
  }

  previewStory = (story) => {
    this.setState({previewStory: story, modalVisible: true})
  }

  render() {
    const {char, previewStory} = this.state;
    console.log(previewStory);
    return (
      <View style={styles.container}>
         <Text style={[styles.text, {
          fontFamily: "KidsZone",
          fontSize: 28,
          letterSpacing: 2,
          textAlign: 'center',
          color: '#FFFF00',
          textShadowColor: '#000',
          textShadowOffset: {width: -1, height: -1},
          textShadowRadius: 10
        }]}
        >
          Selecione uma História
        </Text>
        <ScrollView>

          <View style={styles.stories}>
            {stories.map((story, key) => {
                return(
                  <TouchableOpacity key={key} style={styles.btnStories} onPress={this.previewStory.bind(this, story)}>
                      <ImageBackground  
                          resizeMode='stretch'
                          style={styles.ImageBackground}
                          source={char == 'pedrinho' ? story.imgP : story.imgA}
                      >
                          <Text style={[styles.text, {
                            fontFamily: "KidsZone",
                            fontSize: 18,
                            letterSpacing: 2,
                            color: '#FFF',
                            textShadowColor: '#000',
                            padding: 10,
                            textShadowOffset: {width: -1, height: -1},
                            textShadowRadius: 5
                          }]}
                          >
                            {story.title}
                          </Text>
                      </ImageBackground>
                    </TouchableOpacity>
                );
              })}
            </View>
        </ScrollView>

        {previewStory ? 
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
              source={char == 'pedrinho' ? previewStory.imgP : previewStory.imgA}
              blurRadius={2}
            >
              <View style={{padding: 10, justifyContent: 'space-around', height: '100%'}}>
                <Text style={[styles.text, {
                    fontFamily: "KidsZone",
                    fontSize: 32,
                    letterSpacing: 2,
                    color: '#FFFF00',
                    textShadowColor: '#000',
                    textShadowOffset: {width: -1, height: -1},
                    textShadowRadius: 5,
                    textAlign: 'center'
                  }]}
                >
                  {char == 'pedrinho' ? previewStory.descriptionP : previewStory.descriptionA}
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
  stories:{
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
  btnStories:{
    borderRadius: 5,
    borderWidth: 2,
    width: 250,
    height: 270,
    backgroundColor: '#FCF6DE',
    borderColor: '#ccc',
    marginTop: 20,
    alignSelf: 'center',
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
  },

  cancelAccept: {
    fontSize: 28
  }
});
