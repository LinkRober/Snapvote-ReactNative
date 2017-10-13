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
    Modal
} from 'react-native';


import HomeView from './HomeView.js';
import ResultView from './ResultView.js';
import SettingView from '../RNView/SettingView.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Foundationicon from 'react-native-vector-icons/Foundation';

export default class TabbarView extends Component{
    constructor(props){
        super(props);
        this._selectTitle = this._selectTitle.bind(this);
        this._addNavigator = this._addNavigator.bind(this);
        this._tabBarLayout = this._tabBarLayout.bind(this);
        this.state = {
            selectedTab:'HomeView',
            title:'Vote',
            settingVisible:false
        };
    }

    _selectTitle(title){
        this.setState({
            title:title,
        });
    }

    _addNavigator(component,title){
        //let data = title;

        //if(title === '')

        return <NavigatorIOS
        ref = 'nav'
        initialRoute = {{
            component:component,
            title:title,
            translucent:false,
            leftButtonTitle: title == 'Snapvote' ? 'Setting' : '',
            onLeftButtonPress:(() => {
                  //this.refs.nav.present({
                  //title:'Setting',
                  //component:SettingView,
                //});
                this.setState({
                    settingVisible:true
                });
            })
            //passProps:{data},
        }}
        style={{flex:1}}
    />
    }

    _tabBarLayout(){
        return <View style={{flex:1}}>
            <TabBarIOS >
                <Icon.TabBarItem 
                    title='Vote'
                    iconName='ios-home-outline'
                    selected={this.state.selectedTab === 'HomeView'}
                    onPress={() => {
                        this.setState({
                            selectedTab:'HomeView'
                        });
                    }}
                >
                {this._addNavigator(HomeView,'Snapvote')}
                </Icon.TabBarItem>

                <Foundationicon.TabBarItem 
                    title='Result'
                    iconName='results'
                    selected={this.state.selectedTab === 'ResultView'}
                    onPress={() => {
                        this.setState({
                            selectedTab:'ResultView'
                        });
                    }}
                    
                >
                {this._addNavigator(ResultView,'Result')}
                </Foundationicon.TabBarItem >

            </TabBarIOS>

            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.settingVisible}
                onRequestClose={() => {
                    console.log('xxx');
                }}
                >
                <Text>
                    text
                </Text>
            </Modal>


        </View>
    }

    render(){
        return <View style={{flex:1}}>
            {this._tabBarLayout()}
        </View>
    }

}