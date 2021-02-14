import React from "react";
import {StyleSheet, Text, ScrollView} from "react-native";


const MainPage = () => {
  return(
    <ScrollView style={styles.container}>
        <Text>MainPage</Text>
    </ScrollView>

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

export default MainPage;