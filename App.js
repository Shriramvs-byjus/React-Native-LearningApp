import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
export default class App extends Component <Props> {

    render() {
    return (
        <View>
          <Text style={styles.welcome}> Hello Shriram !!</Text>          
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

