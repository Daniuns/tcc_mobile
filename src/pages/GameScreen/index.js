
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Vibration} from 'react-native';
import { storyService } from '../../services/storyService';
import { relatoryService } from '../../services/relatoryService';
import { bindComponent } from '../../operators/bindComponent';
import { playerService } from '../../services/playerService';
import Sound from 'react-native-sound';
import { audioService } from '../../services/audioService';

Sound.setCategory('Playback');

export default class GameScreen extends Component {
    constructor(){
        super();
        this.state = {actualVertice: undefined, character: undefined, timeInit: undefined}
    }
    componentDidMount(){
        
        storyService.getActualVertice()
            .pipe(bindComponent(this))
            .subscribe(actualVertice => {
                const time = new Date().getTime(); 
                this.setState({timeInit: time});
                this.setState({actualVertice});

                
                if(actualVertice.audios.length > 0){
                    audioService.setAudio(actualVertice.audios);
                    audioService.playAudio()
                }


            });

        playerService.getCharacter()
            .pipe(bindComponent(this))
            .subscribe(character => this.setState({character}));
    }

    finish = async () => {
        
        try{
            await relatoryService.sendRelatory();
            audioService.stopActualAudios();
            this.props.navigation.navigate('Main');

        }catch(err){
            console.log(err);
        }

    }

    nextVertice = (aresta) => {
        audioService.stopActualAudios();
        const {actualVertice, character, timeInit} = this.state;
        
        Vibration.vibrate(300);
        const data = {
            situation: character == 'aninha' ? actualVertice.textA : actualVertice.textP
            , answer: aresta.text
            , time: Math.trunc((new Date().getTime() - timeInit)/1000)
        }
        storyService.nextVertice(aresta.destiny);
        relatoryService.setRelatory(data);
    }
    render(){
        if(!this.state.actualVertice){
            return null;
        }

        const {actualVertice, character} = this.state;
        return(
        <ImageBackground 
            style={styles.image}
            source={actualVertice.img} 
            resizeMode='stretch'
        >
            <View style={styles.container}>
            <View style={styles.descriptionScroll}>
                <ScrollView style={styles.textContent}>
                    <View style={styles.description}>
                            <Text style={[styles.text, {
                                fontFamily: "KidsZone",
                                fontSize: 20,
                                color: '#FFFF00',
                                letterSpacing: 2,
                            }]}
                            >
                                {character == 'aninha' ? actualVertice.textA : actualVertice.textP}
                            </Text>
                    </View>
                </ScrollView>
                <View style={styles.triangleDiv}>
                    <View style={styles.triangleTop} />
                    <View style={styles.triangleBot}/>
                </View>
            </View>
                <View style={styles.containerImage}>
                </View>
                <View style={styles.options}>
                    {actualVertice.arestas.length > 0 ? actualVertice.arestas.map((aresta, key) => {
                        return(
                            <TouchableOpacity 
                                key={key} 
                                onPress={this.nextVertice.bind(this, aresta)} 
                                style={styles.btnOption}
                            >
                                <Text style={[styles.text, {
                                    fontFamily: "KidsZone",
                                    fontSize: 18,
                                    color: '#FFF',
                                    letterSpacing: 2,
                                    textAlign: 'center',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }]}
                                >
                                    {aresta.text}
                                </Text>
                            </TouchableOpacity>
                            );
                        }) : 
                        <TouchableOpacity 
                            onPress={this.finish} 
                            style={styles.btnOption}
                        >
                            <Text style={[styles.text, {
                                    fontFamily: "KidsZone",
                                    fontSize: 18,
                                    color: '#FFF',
                                    letterSpacing: 2,
                                    textAlign: 'center',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    paddingTop: 5,
                                    paddingBottom: 5
                            }]}
                            >
                                Inicio</Text>
                        </TouchableOpacity> 
                    }
                </View>
            </View>
        </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center'
    },
    container:{
        height: '100%',
        justifyContent: 'space-between',
    },
    descriptionScroll:{
        flexDirection: 'row',
        maxHeight: 90,
        marginTop: 20,
        marginBottom: 20,
        paddingRight: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    textContent:{
        // maxHeight: 90,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    description:{
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#fff', 
        width: '95%'       
    },
    text:{
        fontSize: 22,
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: -1},
        textShadowRadius: 10
    },
    options:{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 20,
      },
      
      btnOption:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        minHeight: 50,
        borderRadius: 5,
        borderColor: '#ccc',
        backgroundColor: '#7d09a2',
        margin: 5
      },
      textOption:{
        fontSize: 16,
        color: '#FFF',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5
      },


      image:{
        width: '100%',
        height: '100%',
      },

      triangleTop:{
        width: 0,
        height: 0,
        borderWidth: 13,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FFF',
        borderLeftColor: 'transparent',
        marginBottom: 5,
        shadowColor: 'red',
      },

      triangleBot:{
        width: 0,
        height: 0,
        borderWidth: 13,
        borderTopColor: '#FFF',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent'
        // borderColor: '#FFF transparent transparent transparent'
      },

      triangleDiv: {
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column'
      }
    });