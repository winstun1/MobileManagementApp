import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Alert,
  } from 'react-native';

  import * as React from 'react';

const ProfileScreen = ({ navigation, route }) => {
    return (
        <Text>
            This is {route.params.name}'s profile
        </Text>
    );
};

export default ProfileScreen;