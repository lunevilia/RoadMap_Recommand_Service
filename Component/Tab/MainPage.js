import React, { useState } from "react";
import {StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";

const MainPage = ({navigation}) => {

  const [userId, userIdModified] = useState(["garam0410"]);

  return(
    <ScrollView style={styles.container}>
        <TouchableOpacity onPress = {() =>{
            navigation.navigate("MyPage", {userId : userId[0]})
          }}>
          <Text>마이 페이지</Text>
        </TouchableOpacity>
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