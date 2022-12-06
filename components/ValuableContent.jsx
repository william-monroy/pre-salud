import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ValuableContent = ({ label }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ValuableContent;

const styles = StyleSheet.create({
  container: {
    width: 215,
    height: 129,
    borderRadius: 28,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#a78016",
    padding: 14,
    marginLeft: 15,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
