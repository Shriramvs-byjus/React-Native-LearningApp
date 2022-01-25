import React, {Component} from 'react';
import { StyleSheet, StatusBar, Button, Text, View, Alert } from 'react-native';

type Props = {};
export default class App extends Component <Props> {

    render() {
    return (
        <View>
          <Text style={styles.welcome}> Hello Shriram !!</Text> 
          <Button 
                 title="Display Project Name"
                 onPress={() => Alert.alert('Byjus Mentor Connect')}
          > </Button>   
          <StatusBar backgroundColor="#b3e6ff"  barStyle = "dark-content"></StatusBar>      
        </View>
    );
  }
}

// Applying different styles to the User Name
const styles = StyleSheet.create({
  welcome: {    
    fontSize : 20,    
    textAlign : 'center',
    margin: 10,
    color: 'green',
    fontWeight: 'bold',   
  }
});

