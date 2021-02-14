import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabStackScreen from './Component/Router/TabStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style = {{flex : 1}}>
        <TabStackScreen></TabStackScreen>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
