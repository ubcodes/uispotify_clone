import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import LyricsScreen from "../screens/LyricsScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack =  createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Lyrics" component={LyricsScreen} />
        </Stack.Navigator>
    );
}

export default MainStack;