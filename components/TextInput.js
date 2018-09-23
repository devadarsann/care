import React from 'react';
import { View,Picker,Text } from 'react-native'
import { TextField } from 'react-native-material-textfield';
export default class Register extends React.Component{
    constructor(props){
        super(props);
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
        updateAdharError = updateAdharError.bind(this);
    }

    render(){
        return (
            <View>
                <TextField label='Name' onChangeText={(text)=>this.setState({name:text})}/>
                <TextField label='Phone number' onChangeText={(text)=>this.setState({phonenumber:text})}/>
                <TextField label='Email' onChangeText={(text)=>this.setState({email:text})}/>
                <TextField label='License no.' onChangeText={(text)=>this.setState({license:text})}/>
                <TextField label='Experiance' onChangeText={(text)=>this.setState({experiance:text})}/>
                <TextField label='Address' multiline={true} onChangeText={(text)=>this.setState({address:text})}/>
                <TextField label='Adhar' error={this.state.adharError} onChangeText={(text)=>this._adhar(text)}/>
                <Text>District</Text>
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
            </View>                
        );
    }
}

function updateAdharError(text){
    this.setState({adharError:text});
}