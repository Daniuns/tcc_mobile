import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import stories from '../../stories';
import { storyService } from '../../services/storyService';

export default class StoriesScreen extends Component {

  navigate = (story) => {
    storyService.setStory(story);
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.form}>Histórias</Text>
        {stories.map((story, key) => {
            return(
                <TouchableOpacity key={key} onPress={this.navigate.bind(this, story)} style={styles.btnStory}>
                    <Text>{story.title}</Text>
                    <Text>{story.description}</Text>
                </TouchableOpacity>
            );
        })}
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
      btnStory:{
        borderRadius: 5,
        borderWidth: 2,
        width: 200,
        height: 'auto',
        borderColor: '#ccc'
      }
});
