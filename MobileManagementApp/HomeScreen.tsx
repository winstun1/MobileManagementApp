import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Dimensions,
    TouchableOpacity 
  } from 'react-native';

  import * as React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
        
        <View style={styles.MenuButtonContainer}>
            <TouchableOpacity 
                style={styles.ButtonContainer}    
                onPress={() =>
                    {
                    navigation.navigate('Profile', { name:"Joost"})
                    }
                }
            >
                   <Text style={ styles.ButtonItemText }>Go to Joost's profile</Text>
            </TouchableOpacity >
                
            <TouchableOpacity 
                    style={styles.ButtonContainer}
                    onPress={() =>
                        navigation.navigate('Profile', { name:"Karel"})
                    }
            >
                    <Text style={ styles.ButtonItemText }>Go to Karel's profile</Text>  
            </TouchableOpacity >

            <TouchableOpacity 
                    style={styles.ButtonContainer}
                    onPress={() =>
                        navigation.navigate('Database')
                    }
            >
                <Text style={ styles.ButtonItemText }>DATABASE!</Text>
            </TouchableOpacity >
      </View>
    );
  };

  const styles = StyleSheet.create(
    {
        MenuButtonContainer:{
            flexDirection: 'row',
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        },

        ButtonContainer:{
            width: 100,
            height: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'lightblue',
            textAlign: 'center'
        },

        ButtonItemText: {
            color: 'darkblue',
            fontWeight: 'bold'
        }
    
    }
  )
  
  export default HomeScreen;