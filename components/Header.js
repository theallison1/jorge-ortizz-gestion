import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.menu}>☰</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.user}>👤</Text>
    </View>
  );
}

const styles = StyleSheet.create({

container:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:25
},

menu:{
fontSize:28,
color:colors.text
},

title:{
fontSize:22,
fontWeight:"bold",
color:colors.text
},

user:{
fontSize:28
}

});