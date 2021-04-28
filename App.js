import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabStackScreen from './Component/Router/TabStackScreen';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  // 서버 고유 ip주소 기입
  AsyncStorage.setItem('ip', '');
  AsyncStorage.setItem('autoLogin', "false");

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
