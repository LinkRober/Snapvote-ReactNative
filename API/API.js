
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
        this.packageHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }

    //设备注册
    async deviceRegister(uid,response){
        let path = "/user" 
        let url = `${this.baseUrl(this.environment)}${path}`;
        console.log(url);        
        fetch(url,{
            headers: this.packageHeaders,
            method: "PUT",
            body:JSON.stringify({'uid': uid}),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            response(responseJson)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //获取当前用户的所有投票信息
    async voteResult(uid,page,response){
        let pageSize = 10;
        let path = "/user";
        let url = `${this.baseUrl(this.environment)}${path}`+'/'+`${uid}`+'?page='+`${page}`+'&pageSize=10';
        console.log(url);
        fetch(url,{
            headers:this.headers,
            method:"GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
            response(responseJson);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //获取主题信息
    async getTheme(type,response){
        let path = '/themes';
        let url = `${this.baseUrl(this.environment)}${path}` + '?type=' + `${type}`;
        console.log(url);
        fetch(url,{
            headers:this.headers,
            method:"GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
            response(responseJson);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //消息提醒
    async messageRemind(uid,response){
        let path = '/status';
        let url = `${this.baseUrl(this.environment)}${path}` + '/' + `${uid}`;
        console.log(url);
        fetch(url,{
            headers:this.packageHeaders,
            method:"GET"
        })
        .then((response) => response.json())
        .then((responseJson) => {
            response(responseJson);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    //app配置
    async appConfigure(version,response){
        let path = "/stage";
        let url = `${this.baseUrl(this.environment)}${path}` + '/' + `${version}`;
        console.log(url);
        fetch(url,{
            headers:this.packageHeaders,
            method:'GET',
        })
        .then((response) => response.json())
        .then((responseJson) => {
            response(responseJson);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //上传投票信息
    async uploadVoteInfo(uid,title,imageUrl,options,response){
        let path = '/vote';
        let url = `${this.baseUrl(this.environment)}${path}`;
        fetch(url,{
            headers:this.headers,
            method:"POST",
            body:JSON.stringify({
                'uid':uid,
                'title':title,
                'img':imageUrl,
                'options':options,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            response(responseJson);
        })
        .catch((error) => {
            console.log(error);
        })
    }



    //domain
    baseUrl(environment){
        if(environment == Environment.development){
            return "http://10.0.32.76:7001"
        }else{
            return "http://www.snapvote.me"
        }
    }
}
