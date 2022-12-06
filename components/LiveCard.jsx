import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const LiveCard = ({ title, subtitle, image }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundImage: `uri(${image})` }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default LiveCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    marginLeft: 24,
    marginRight: 19,
    marginTop: 14,
    borderRadius: 28,
    height: 156,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 19,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: " #BCBCBC",
  },
});
