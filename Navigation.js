import {Navigation} from 'react-native-navigation'

export default function RegisterScreens(){
    // Navigation.registerComponent('App',()=>require('./App').default);
    console.log(()=>require('./components/Screens/Register').default);
    Navigation.registerComponent('Register',()=>require('./components/Screens/Register.js').default);
}