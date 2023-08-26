import { StyleSheet,Image, View, Text } from 'react-native'
import React from 'react'

export default function ShowCard({ img, title, artists }) {
  return (
    <View style={styles.container}>
      <Image 
        // style={styles.image}
        style={{height: 160, width:160, borderRadius:20,}}
        source={{uri:img}}
      />
      <Text style={styles.text} numberOfLines={1} >{title}</Text>
      <Text style={styles.subText} numberOfLines={1} > { artists }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      overflow: 'hidden',
      minHeight: 220,
      maxHeight: 220,
      maxWidth: 160,
      marginRight: 20,
    },
    text: {
      color: "white",
      marginTop: 10,
      fontWeight: "800"
    },
    subText: {
      color: "gray",
      marginTop:4,
      fontWeight:"800",
    }
})