import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const DoctorCard = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    width: 131,
    height: 170,
    borderRadius: 15,
    backgroundColor: "#1655A7",
    marginLeft: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
    marginBottom: 10,
  },
});
