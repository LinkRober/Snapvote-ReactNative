/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';

import HomeView from './RNView/HomeView.js';
import SettingView from './RNView/SettingView.js'
AppRegistry.registerComponent('HomeView',() => HomeView); 
AppRegistry.registerComponent('SettingView',() => SettingView);

// import API from './API/API.js'
    // this.Api = new API();
    // let uid = "6166325F-5F1B-4AB3-B802-4379954F52E1"
    // this.Api.deviceRegister(uid,(response)=>{
    //   console.log(response);
    // });
    // this.Api.voteResult(uid,1,(response) => {
    //   console.log(response);
    // });
    // this.Api.getTheme(0,(response) => {
    //   console.log(response);
    // });
    // this.Api.messageRemind(uid,(response) => {
    //   console.log(response);
    // });
    // this.Api.appConfigure('1.2',(response) => {
    //   console.log(response);
    // });
 