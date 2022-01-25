import React, {Component} from 'react';
import { ImageBackground, StyleSheet, StatusBar, Button, Text, View, Alert} from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

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
            ],
            // Added cancelable property to dismiss the alert by clicking outside of the alert box
            {cancelable: true}
    );

    render() {
    return (
        <View>
          <Text style={styles.welcome}> Hello Shriram !!</Text> 
          <Button                  
                 title="Display Project Name"                
                 onPress={this.displayAlert}
          > </Button>   
          <ImageBackground source={image}>
            <Text style={styles.text}>  </Text>
            </ImageBackground>       
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
  },
  image: {
    flex : 1,
    justifyContent : 'center',
    width: 50,
    height: 50    
  },
  text: {
    color: "white",
    lineHeight: 200,
    textAlign: 'center',
    fontWeight: 'bold'
  } 
});