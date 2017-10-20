'use strict';
import React, { 
    Component
  } from 'react';
  
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
    Image,
    TabBarIOS,
    ListView,
    Button,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class LeftOrRightView extends Component{
    constructor(props){
        super(props);
        this.state = {
            hideInputPlaceHolder:false,
            content:'',
        }
    }

    render(){

        var textHeight = 0;
        var imageEdge = 0;
        if(this.state.hideInputPlaceHolder){
            textHeight = 0;
            imageEdge = 0;
        }else {
            textHeight = 80;
            imageEdge = 22;
        }

        return <View style={{marginTop:64,flexDirection:'column',backgroundColor:'#f0f3f5'}}>
            <View style={{marginLeft:32,marginRight:32}}>
                <View style={{marginTop:30,height:80,backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <View style={{height:textHeight}}>
                        <TouchableOpacity onPress = {() => {
                                this.setState({
                                    hideInputPlaceHolder:true,
                                });
                                this.refs.textInputref.focus()
                            }}>
                            <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
                                <Image
                                    style={{height:imageEdge,width:imageEdge}}
                                    source = {require('../img/edit_icon.png')}
                                />
                                <Text style={{fontSize:18,color:'#40365B',opacity:0.6}}>
                                    Tap here to text vote topic
                                </Text>
                            </View>
                        </TouchableOpacity>
                            <TextInput
                                ref = 'textInputref'
                                style = {{height:80,textAlign:'center'}}
                                value={this.state.content}
                                onChangeText = {(text) => {
                                    console.log(text);
                                    this.setState({
                                        content:text,
                                        hideInputPlaceHolder: text === '' ? false : true
                                    })
                                }}
                            />
                    </View>
                </View>
                    <View style={{height:300,flexDirection:'row'}}>
                        <View style={{flex:1,flexDirection:'column',backgroundColor:'white',borderBottomLeftRadius:10,borderTopWidth:1,borderTopColor:'#f0f3f5'}}>
                            <View style = {{marginLeft:90}}>
                                <Image
                                    style = {{width:24,height:24,marginTop:15}}
                                    source = {require('../img/add_icon.png')}
                                />
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:'#40365B'}}>Tap to choose pic</Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'column',backgroundColor:'white',borderBottomRightRadius:10,borderTopWidth:1,borderTopColor:'#f0f3f5',borderLeftWidth:1,borderLeftColor:'#f0f3f5'}}>
                            <View style = {{marginLeft:90}}>
                                <Image
                                    style = {{width:24,height:24,marginTop:15}}
                                    source = {require('../img/add_icon.png')}
                                />
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:12,color:'#40365B'}}>Tap to choose pic</Text>
                            </View>
                        </View>
                    </View>
            </View>
            <View>
                    
            </View>
        </View>
    }
}