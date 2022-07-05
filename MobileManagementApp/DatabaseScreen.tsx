import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
  } from 'react-native';

  import * as React from 'react';

const message_1 = "Test Message"


  
const DatabaseScreen = ({ navigation }) => {
    return (
        <Text style={styles.textArea}>
            {message_1}
        </Text>

        
    );
  };

  const styles = StyleSheet.create(
    {
        MenuButtonContainer:{
            marginLeft: 100,
            width: 100,
            height: 100
        },

        textArea: {
          color: "green"
        }
    }
  )
  
  export default DatabaseScreen