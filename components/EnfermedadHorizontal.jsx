import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const EnfermedadHorizontal = ({img,label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://picsum.photos/200/300' }} />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default EnfermedadHorizontal

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0B305C',
    borderRadius: 10,
    marginLeft: 6,
  },
  image:{
    width: 25,
    height: 25,
  },
  text:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
})