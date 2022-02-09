import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const LoginButton = () => {
  return (
    <TouchableOpacity 
    activeOpacity={0.8}
    style={{ backgroundColor:'#5E7C9E',
    height:45,
    width:200,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    top:-20,elevation:6,shadowColor:'black',shadowOpacity:0.5}}>
        <Text style={{fontSize:20,fontWeight:'900'}}>Login</Text>
    </TouchableOpacity>
   
  )
}

export default LoginButton