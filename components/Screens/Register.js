import React,{PureComponent} from 'react';
import { StyleSheet, Text, View,Button,Picker} from 'react-native';
// import TextInput from './components/textInput'
import { TextField } from 'react-native-material-textfield';
import { Navigation } from 'react-native-navigation';
// import Register from './Register.js';
// import {RegisterScreens} from './Navigation.js';

export default class Register extends React.Component {
  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);        
    this.state={
      name:'',
      phonenumber:'',
      email:'',
      license:'',
      experiance:'',
      address:'',
      adhar:'',
      adharError:'',
      district:''
    }

    this.pushViewToScreen = this.pushViewToScreen.bind(this);
  }

  pushViewToScreen(){
    Navigation.push(this.props.componentId,{
        component:{
            name:'Register'
        }
    });
  }
  

  render() {
    return (
      <View style={styles.container}>
        <TextField label='Name' onChangeText={(text)=>this.setState({name:text})}/>
                <TextField label='Phone number' onChangeText={(text)=>this.setState({phonenumber:text})}/>
                <TextField label='Email' onChangeText={(text)=>this.setState({email:text})}/>
                <TextField label='License no.' onChangeText={(text)=>this.setState({license:text})}/>
                <TextField label='Experiance' onChangeText={(text)=>this.setState({experiance:text})}/>
                <TextField label='Address' multiline={true} onChangeText={(text)=>this.setState({address:text})}/>
                <TextField label='Adhar' error={this.state.adharError} onChangeText={(text)=>this._adhar(text)}/>
                <Text style={styles.textLabel}>District</Text>
                <Picker onValueChange={(itemValue,itemIndex)=>this.setState({district:itemValue})}>
                    <Picker.Item label='Thiruvananthapuram' value='TVM'/>
                    <Picker.Item label='Kollam' value='KLM'/>
                    <Picker.Item label='Pathanamthitta' value='PTA'/>
                    <Picker.Item label='Allappuzha' value='ALPA' />
                    <Picker.Item label='Kottayam' value='KOTYM' />
                    <Picker.Item label='Idukki' value='IDK' />
                    <Picker.Item label='Ernakulam' value='EKM'/>
                    <Picker.Item label='Thrissur' value='TSR' />
                    <Picker.Item label='Palakkadu' value='PKD' />
                    <Picker.Item label='Malappuram' value='MLPRM' />
                    <Picker.Item label='Kozhikkodu' value='KZKD' />
                    <Picker.Item label='Wayanady' value='WYD' />
                    <Picker.Item label='Kannur' value='KANR' />
                    <Picker.Item label='Kazargode' value='KZKD' />                    
                </Picker>
        <Button style={styles.submitButton} title='Submit' onPress={this._onSubmit.bind(this)}/>
      </View>
    );
  }

  _onSubmit=()=>{
    console.log(this.props);
    // Navigation.push(this.props.App,{
    //   component:{
    //     name:'Register'
    //   }
    // });
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
    backgroundColor: '#fff',
  },
  submitButton: {
    alignSelf:'flex-end',
    position: 'absolute',
    bottom:0,
  },
  textLabel:{
    fontWeight:'bold',
    color:'blue'
  }
});
