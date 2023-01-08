import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render(){  
  return (
    <View style={{flex:1,backgroundColor:'gray'}}>
      <View style={{flex:1,backgroundColor:'red'}}>
      </View>
      <View style={{flex:1,backgroundColor:'yellow'}}>
      </View>
      <View style={{flex:2,backgroundColor:'green'}}>
      </View>
    </View>
  );
}
}


export default App;

