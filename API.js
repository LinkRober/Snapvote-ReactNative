
'use strict';
import React, { 
    Component
} from 'react';

let Environment = {
    development:0,
    release:1,
}
import 'whatwg-fetch';

export default class API {

    constructor(props){
        this.environment = Environment.development
    }

    async deviceRegister(){
        let uid = "?uid=86A05447-85DD-4F12-A0A6-E435B6C44A87"
        console.log(this.baseUrl(this.environment));
        //`${this.baseUrl(this.environment)}${uid}`
        fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.movies);
            // return responseJson.movies;
        })
        .catch((error) => {
            console.log(error);
        });
    }

    baseUrl(environment){
        if(environment == Environment.development){
            return "http://10.0.32.76:7001"
        }else{
            return "http://www.snapvote.me"
        }
    }
}
// export default {deviceRegister};
// export default API;