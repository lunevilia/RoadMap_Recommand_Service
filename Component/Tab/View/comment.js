import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const comment = ({num}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: 30,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
});

export default React.memo(comment);