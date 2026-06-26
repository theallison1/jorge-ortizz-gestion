import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StatCard({ icon, value, title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.value}>{value}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    backgroundColor: "#1F2937",
    borderRadius: 18,
    padding: 20,
    marginBottom: 15,
  },

  icon: {
    fontSize: 28,
  },

  value: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },

  title: {
    color: "#9CA3AF",
    marginTop: 5,
    fontSize: 15,
  },
});