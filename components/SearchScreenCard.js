import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function SearchScreenCard({ title, img,onPress}) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const containerStyles = [styles.hover];

    if (isHovered) {
        containerStyles.push(styles.containerHovered)
    }

  return (
  
     <View style={styles.container}>
       <TouchableOpacity
        style={containerStyles}
        activeOpacity={0.8}
        // onPress={() => console.log('clicked') }
        onPress={onPress}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
   > 
        <Image 
        style={styles.image}
        source={{ uri : img}}
       />
       <View style={styles.textCont}>
            <Text style={styles.text}>{title}</Text>
       </View>
        </TouchableOpacity>
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    width: '47%', // Adjust the width to display two cards per row
    // minHeight: 250,
    // maxHeight: 250,
    // minHeight: 300,
    //   maxHeight: 300,
      maxWidth: 160,
      margin: 10,
    backgroundColor: "rgba(51,51,51,0.7)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    marginBottom: 30,
        // height: 400

  },
  containerHovered: {
    backgroundColor:'#fff',
  },
    image: {
    height: 150,
    width: 150,
    borderRadius: 30,
    marginTop: 10,
  },
  text: {
    color: "white",
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase"
  }
})