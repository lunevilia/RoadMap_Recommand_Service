import React, {Component, useState} from 'react';
import {View, Text,ScrollView, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, FlatList, Image, Button} from 'react-native';

const SocialDetailPage = (props) => {

  let noticeName = props.route.params.noticeName;

    return(

      <SafeAreaView style ={styles.container}>
          <Text>
            {noticeName}
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

export default SocialDetailPage;