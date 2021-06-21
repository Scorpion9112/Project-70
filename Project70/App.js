import React from "react";
import {Stylesheet, Text, View, Image} from "react-native";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import ReadStoryScreen from "./Screens/ReadStoryScreen"
import WriteStoryScreen from "./Screens/WriteStoryScreen"

export default class App extends React.Component{
    render(){
        return(
            <View>
            <AppContainer/>
            </View>
        )
    }
}
const TabNavigator=createBottomTabNavigator({
    ReadStoryScreen:{screen:ReadStoryScreen, 
    navigationOptions:{tabBarIcon:<Image source={require("./read.png")}
    style={{width:30, height:30}}
    />
}},
WriteStoryScreen:{screen:WriteStoryScreen, 
    navigationOptions:{tabBarIcon:<Image source={require("./write.png")}
    style={{width:30, height:30}}
    />
}}
})
const AppContainer=createAppContainer(TabNavigator)