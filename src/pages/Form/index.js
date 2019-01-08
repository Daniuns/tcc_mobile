import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Picker} from 'react-native';
import { playerService } from '../../services/playerService';
import * as _ from 'lodash';
import { bindComponent } from '../../operators/bindComponent';
import { take } from 'rxjs/operators';

export default class Form extends Component {

  constructor(){
    super();
    this.state = {informationsPlayer: {}};
  }

  componentDidMount(){
    playerService.getInformationsPlayer()
      .pipe(bindComponent(this))
      .subscribe(data => {
        console.log(data);
      });
  }

  changeName = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const name = {name: event};
        newData = _.merge(data, name);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }

  changeGender = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const gender = {gender: event};
        newData = _.merge(data, gender);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }

  changeAge = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const age = {age: event};
        newData = _.merge(data, age);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }

  changeResponsible = (event) => {
    playerService.getInformationsPlayer()
      .pipe(take(1), bindComponent(this))
      .subscribe(data => {
        const responsible = {responsible: event};
        newData = _.merge(data, responsible);
        this.setState({informationsPlayer: newData});
        playerService.informationsPlayer$.next(newData);
      });
  }
  navigate = () => {
    const informationsPlayer = this.state.informationsPlayer;
    if(!informationsPlayer.name || 
        !informationsPlayer.gender ||
        informationsPlayer.gender == 'none' ||
        !informationsPlayer.age ||
        !informationsPlayer.responsible
      ){
        this.setState({errMsg: 'Não pode haver nenhum campo sem preenchimento =)'})
        return;
      }else{
        this.props.navigation.navigate('Character');
      }
  }

  render() {
    const {informationsPlayer, errMsg} = this.state
    return (
      <View style={styles.container}>

        <Text style={styles.formTitle}>Fomulário do Jogador</Text>
      
        <View style={styles.formContent}>
          <TextInput
            style={styles.textInput}
            placeholder={'Nome'}
            onChangeText={this.changeName}
          />

          <View style={styles.textInput}>
            <Picker
              selectedValue={informationsPlayer.gender || ''}
              style={styles.selectInput}
              onValueChange={(itemValue, itemIndex) => this.changeGender(itemValue)}>
              <Picker.Item label="--Sexo--" value="none" />
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
            </Picker>
          </View>
          
          <TextInput
            keyboardType={'numeric'}
            style={styles.textInput}
            placeholder={'Idade'}
            onChangeText={this.changeAge}
          />

          <TextInput
            style={styles.textInput}
            placeholder={'Responsável'}
            onChangeText={this.changeResponsible}
          />
        <Text style={styles.errMsg}>{errMsg}</Text>
        <TouchableOpacity onPress={this.navigate} style={styles.btnContinue}>
          <Text style={styles.btnContinueText}>Próximo</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#00cefa',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    height: '100%'
  },
  formTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40
  },
  formContent:{
    width: 250,
    height: 350,
    justifyContent: 'space-between',
  },
  textInput:{
    borderRadius: 5,
    borderWidth: 1,
  },
  selectInput:{
    borderRadius: 5,
    borderWidth: 1,
    height: 30,
    margin: 10
  },
  btnContinue:{
    borderRadius: 5,
    borderWidth: 1,
    height: 42,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#7d09a2',
  },
  btnContinueText: {
    color: '#FFF',
  },
  errMsg:{
    fontSize: 12,
    color: 'red'
  }
});
