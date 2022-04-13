import React from 'react';
import AppContainer from './src/navigation/AppNavigator';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBbACZNo1bP9M43XaVLuk4Tl3BlcxfyonA",
    authDomain: "mtcrdc-278cb.firebaseapp.com",
    databaseURL: "https://mtcrdc-278cb-default-rtdb.firebaseio.com/",
    projectId: "mtcrdc-278cb",
    storageBucket: "mtcrdc-278cb.appspot.com",
    messagingSenderId: "1002580558169",
    appId: "1:1002580558169:web:3afc61de65a72ff39e4c48",
    measurementId: "G-Z2XHHT9BZ0"
};


firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  state = {
    assetsLoaded: false,
  };

  constructor(){
    super();
    console.disableYellowBox = true;
  }

//resource load at the time of app loading
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/background.png'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      }),
    ]);
  };
  
  render() {
    return (
        this.state.assetsLoaded ? 
          <AppContainer/>
          :         
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onFinish={() => this.setState({ assetsLoaded: true })}
            onError={console.warn}
            autoHideSplash={true}
          />
    );
  }
}