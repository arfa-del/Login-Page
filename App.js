import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FirstScreen from './src/screens/firstscreen/FirstScreen';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <FirstScreen/>
      </View>
    );
  }
}

export default App;
