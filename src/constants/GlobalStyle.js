import {  StyleSheet } from 'react-native';

export const  Mystyles = StyleSheet.create({
    background:{
     backgroundColor:'#5E7C9E',
     height:45,
     width:200,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     top:-20,elevation:6,shadowColor:'black',shadowOpacity:0.5

    },
    AccountDetails:{
        width:400,
        height:250,
        backgroundColor:'rgba(131, 135, 147, 0.8)',
        top:160,
        borderRadius:20,
        justifyContent:'center',
     alignItems:'center',elevation:6,shadowColor:'black',shadowOpacity:0.5
       },
       username:{
        height:80,width:380,backgroundColor:"white",borderRadius:20,flexDirection:'row',top:-10,elevation:6,shadowColor:'black',shadowOpacity:0.5
       },
       password:{
        height:80,width:380,backgroundColor:"white",borderRadius:20,flexDirection:'row',elevation:6,shadowColor:'black',shadowOpacity:0.5
       },
       CreateNew:{
        height:40,width:380,top:30,flexDirection:"row"
       }


});

