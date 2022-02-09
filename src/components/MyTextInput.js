import { View, Text,TextInput } from 'react-native';
import React from 'react';

const MyTextInput = ({


  myplace,
  mytextchange,
  keybordtype=""
}) => {
  return (
    <View>
      
     <TextInput 
            //    autoFocus={myAutoFocus}
               selectionColor={'red'}
              
               placeholder={myplace}
               placeholderTextColor="#C9CBCE"
               autoCapitalize="none"
               autoCorrect={false}
            //    returnKeyType="next"
               underlineColorAndroid="transparent"
               blurOnSubmit
               keyboardType={keybordtype}
               style={{    
                color: 'black',
                height: 80,
                fontSize: 14,
                borderRadius: 5,
                // backgroundColor: '#EFEEF4',
                paddingHorizontal: 10,
                borderRadius: 6}}
                onChangeText={mytextchange}
              />
    </View>
  );
};

export default MyTextInput;
