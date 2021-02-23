import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Comment from './comment';

const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i);
}

const CommentList = (props, {navigation,num}) => {

    let roadMapId = props.route.params.roadMapId;
    console.log(roadMapId);
  return (
    <FlatList
        keyExtractor={item => item.toString()}
        data={arr}
        renderItem={({item}) => <Comment num={item}/>}
        windowSize = {2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: 100,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
});

export default CommentList;