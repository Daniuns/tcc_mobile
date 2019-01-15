import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import stories from '../../stories';
import { storyService } from '../../services/storyService';
import { playerService } from '../../services/playerService';
import { bindComponent } from '../../operators/bindComponent';

export default class StoriesScreen extends Component {

  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    playerService.getCharacter()
    .pipe(bindComponent(this))
    .subscribe(c => this.setState({char: c}));
  }

  navigate = (story) => {
    storyService.setStory(story);
    this.props.navigation.navigate('Main');
  }

  render() {
    const {char} = this.state;
    return (
      <View style={styles.container}>
         <Text style={styles.title}>Selecione uma História</Text>
         <ScrollView style={styles.scrollView} >
         <View style={styles.characters}>
        {stories.map((story, key) => {
            return(
              <View style={styles.btnCharacter} key={key} onPress={this.navigate.bind(this, story)}>
                <TouchableOpacity onPress={this.navigate.bind(this, story)}>
                  <Text style={styles.characterName}>{story.title}</Text>
                  <Image style={styles.img} source={story.img}/>
                  <Text style={styles.descriptionCharacter}>
                      {char == 'Pedrinho'? story.descriptionP : story.descriptionA }
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
                  </View>
        </ScrollView >
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
