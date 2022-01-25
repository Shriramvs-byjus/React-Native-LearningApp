import React, {Component} from 'react';
import { StyleSheet, StatusBar, Button, Text, View, Alert } from 'react-native';

type Props = {};
export default class App extends Component <Props> {

    displayAlert = () =>
    Alert.alert(
            "Project Name:",
            "Byjus - Mentor Connect",
            [
              {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed")
              },
              {
                text: "Cancel",
                onPress: () => console.log('cancel button pressed')                
              },
              {
                text: "OK",
                onPress: () => console.log("OK Pressed")
              }
            ]
    );

    render() {
    return (
        <View>
          <Text style={styles.welcome}> Hello Shriram !!</Text> 
          <Button 
                 title="Display Project Name"                
                 onPress={this.displayAlert}
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