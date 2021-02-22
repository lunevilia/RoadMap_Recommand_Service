import React, {Component, useState} from 'react';
import {View, Text,ScrollView, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image, Button} from 'react-native';

const RoadMap = (props, {navigation}) => {

    let roadMapId = props.route.params.roadMapId;
    let roadmap = props.route.params.roadmap;

    return(

      <SafeAreaView style ={styles.container}>
          <Text>
            {roadmap}
          </Text>
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

export default RoadMap;