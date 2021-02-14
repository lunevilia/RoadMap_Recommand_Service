import React from "react";
import {StyleSheet, Text, ScrollView} from "react-native";


const RoadMapCategoryPage = () => {
  return(
    <ScrollView style={styles.container}>
        <Text>RoadMapCategoryPage</Text>
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

export default RoadMapCategoryPage;