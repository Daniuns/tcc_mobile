
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import { storyService } from '../../services/storyService';
import { relatoryService } from '../../services/relatoryService';
import { bindComponent } from '../../operators/bindComponent';

export default class GameScreen extends Component {
    constructor(){
        super();
        this.state = {actualVertice: null}
    }
    componentDidMount(){
        storyService.getActualVertice()
            .pipe(bindComponent(this))
            .subscribe(actualVertice => this.setState({actualVertice}));

        // storyService.wakeUp()
        // .pipe(bindComponent(this))        
        // .subscribe(speed => console.log(`You moved your phone with ${speed}`),
        //     error => {
        //         console.log("The sensor is not available");
        //     });
    }

    finish = () => {
        relatoryService.sendRelatory();
        storyService.nextVertice('A');
        this.props.navigation.navigate('Main');
    }

    nextVertice = (aresta) => {
        const data = {situation: this.state.actualVertice.text, answer: aresta.text}
        storyService.nextVertice(aresta.destiny);
        relatoryService.setRelatory(data);
    }
    render(){
        if(!this.state.actualVertice){
            return null;
        }

        const {actualVertice} = this.state;
        return(
        <ImageBackground 
            style={styles.image}
            source={actualVertice.img} 
            resizeMode='stretch'
        >
            <View style={styles.container}>
                <ScrollView style={styles.descriptionScroll}>
                    <View style={styles.description}>
                        <Text style={styles.text}>
                            {actualVertice.text}
                        </Text>
                    </View>
                </ScrollView>
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
                                <Text style={styles.textOption}>
                                    {aresta.text}
                                </Text>
                            </TouchableOpacity>
                            );
                        }) : 
                        <TouchableOpacity 
                            onPress={this.finish} 
                            style={styles.btnOption}
                        >
                            <Text style={styles.textOption}>Inicio</Text>
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
        maxHeight: 100,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    description:{
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#fff',        
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
    });