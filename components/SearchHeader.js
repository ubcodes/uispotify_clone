import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import React from 'react'

const SearchHeader = () => {
  return (
    <View style={styles.topContainer}>
      <View>
        <Text style={styles.text}>Search</Text>
      </View>
      <View style={styles.iconContainer}>
            <Feather name="camera" size={30} color="white" />
      </View>
    </View>
   
  )
}

export default SearchHeader

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40,
        justifyContent: 'space-between',
    },
    text: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold"
     },
    iconContainer: { 
        flexDirection: "row"
    },
    icon: {
        marginLeft: 35
    }
})