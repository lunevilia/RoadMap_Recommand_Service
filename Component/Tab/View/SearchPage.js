import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView,Image, View, Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import {SearchBar} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const SearchPage = (props, {navigation}) => {

  let userId = props.route.params.userId;

  const [ip,setIp] = useState();
  AsyncStorage.getItem("ip").then((value) => {
    setIp(value);
  });

  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch({search});
  }

    return(

      <SafeAreaView style ={styles.container}>

        <View style = {{justifyContent : 'center', marginLeft : 10, marginRight : 10, marginTop : 10}}>
          <SearchBar
              lightTheme = 'true'
              round = "true"
              onChangeText = {updateSearch}
              value = {search}
              autoFocus = {true}
              platform = "ios"
              containerStyle = {{backgroundColor : 'white', height : 'auto', borderWidth : 1, borderRadius : 10, borderColor : 'gray'}}
              inputContainerStyle = {{backgroundColor : 'white', height : 20}}>
          </SearchBar>
        </View>

        <ScrollView>

        </ScrollView>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
  },
  });

export default SearchPage;