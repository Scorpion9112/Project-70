import React from "react";
import {Header} from "react-native-elements";
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from "react-native"

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super()
        this.state={
          title:"",
          author:"",
          story:""
        }
      }
render(){
    return(
<View>
    <View>
<Header
     style={styles.Header}
      />
    </View>
    <View style={{flexDirection:"row"}}>
 <TextInput style={styles.InputBox}
 placeholder="Title"
 onChangeText={(text)=>{
 this.setState({
   title:text
 })
 }}/>
</View>
<View style={{flexDirection:"row"}}>
 <TextInput style={styles.InputBox}
 placeholder="BookId"
 onChangeText={(text)=>{
 this.setState({
   author:text
 })
 }}/>
 </View>
</View>
    )
}
}
const styles=StyleSheet.create({
    Header:{
backgroundColor:"green",
text:"Monkey Chunky",
color:"lightblue",
fontSize:20,
textAlign:"center"
    },
    InputBox:{
        borderWidth:2,
        width:"80%",
        marginTop:50,
        },
})