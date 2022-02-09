import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,Image, ImageBackground,SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { IMGMy } from '../../constants/Imageconstant';
import {Mystyles} from '../../constants/GlobalStyle';
import {california,mainFlexcolor} from '../../styles/TextStyle'
import {ImgStyles} from '../../constants/ImgStyle';
import { Textstyles } from '../../constants/TextStyle';
import { elementsThatOverlapOffsets } from 'react-native/Libraries/Lists/VirtualizeUtils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyTextInput from '../../components/MyTextInput';
import LoginButton from '../../components/LoginButton';






const FirstScreen = () => {
    const [username,setUserName] = useState('');
    const [userpassword,setuserpassword] = useState('');
    
    return (
        <View style={{flex:1,backgroundColor:'#838793',justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
           <KeyboardAwareScrollView style={{height:900,width:'100%'}} >
               <View style={{height:900,width:'100%',borderRadius:30}}>
                <ImageBackground
                style={ImgStyles.ImgMenuStyle}
                source={IMGMy.Menu}
                >
                    

                    <View style={Mystyles.AccountDetails}>
<View style={Mystyles.username}>
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Image
style={ImgStyles.User}
source={IMGMy.user}
/>
</View>
<View style={{flex:4}}>

<MyTextInput

myplace='User Name'


mytextchange={e=>setUserName(e)}
/>
</View>
</View>


<View style={Mystyles.password}>
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Image
style={ImgStyles.User}
source={IMGMy.password}
/>
</View>
<View style={{flex:4}}>

<MyTextInput
myplace='Password'

mytextchange={e=>setuserpassword(e)}
/>
</View>
</View>

<View style={Mystyles.CreateNew}>
<TouchableOpacity
 activeOpacity={0.8}
>
<Text style={{fontSize:12,fontWeight:"bold",left:20}}>Create New Account</Text>
</TouchableOpacity>
<TouchableOpacity
 activeOpacity={0.8}
>
<Text style={{fontSize:12,fontWeight:"bold",left:110}}>Create New Account</Text>
</TouchableOpacity>

</View>



                    </View>
                </ImageBackground>
                <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
             
             
             <LoginButton/>
              
                </View>
               
                </View>
                </KeyboardAwareScrollView>
        </View>
    );
};


export default FirstScreen;
