import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from 'react'

const Header = () => {
  return (
    <View style={styles.topCont} >
        <View>
            <Text style={styles.text}>Good Afternoon</Text>
        </View>
        <View style={styles.iconCont}>
        <MaterialCommunityIcons style={styles.icon} name="bell-outline" size={30} color="white" />
        <MaterialCommunityIcons style={styles.icon} name="history" size={30} color="white" />
        <MaterialCommunityIcons style={styles.icon} name="cog-outline" size={30} color="white" />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    topCont: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40,
        justifyContent: 'space-between',
    },

    text:{
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    },
    iconCont: {
        flexDirection: "row"
    },
    icon: {
        marginLeft: 35
    }
})


