import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Alert, SafeAreaView, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, FlatList, Pressable, Image, ImageBackground } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import searchData from '../data/searchData';
import SearchScreenCard from '../components/SearchScreenCard';
import LyricsScreen from './LyricsScreen';
import { useNavigation } from '@react-navigation/native';


const SearchScreen = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  const data = searchData;




  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#8a0a0a', '#111', '#111', '#111', '#111']}
        start={{ x: -0.1, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        locations={[0.01, 0.25, 0.5, 0.75, 1]}
        style={styles.container}
      >
        {/* <ScrollView > */}
          {/* Search container  */}
         <View style={styles.subContainer}>
      <View style={styles.topContainer}>
      <View>
        <Text style={styles.text}>Search</Text>
      </View>
      <View style={styles.iconContainer}>
            <Feather name="camera" size={30} color="white" />
      </View>
    </View>


          <View style={styles.searchWrapperStyle}>
            <Feather name="search" size={21} color="black" style={styles.iconStyle} />
            <TextInput
              placeholder='Artists, song, or  podcast'
              placeholderTextColor='#444'
              style={styles.searchInputStyle}
              // value={searchQuery}
              // onChangeText={setSearchQuery}
            />
            {/* <FontAwesome name="close" size={30} color="black" style={styles.iconStyle} /> */}
          </View>

        {/* Browse All */}

        <View>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginTop: 20 }}>Browse all</Text>
          </View>

          <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                  <Pressable>
                    {/* <SearchScreenCard item={item} /> */}
                   <ImageBackground
                      style={{
                        aspectRatio: 2/3,
                        height: 240,
                        borderRadius: 6,
                        
                      }}
                      source={{ uri: item.img}}
                   /> 
                   <Text
                    style={{
                      position: "absolute",
                      width: 42,
                      height: 22,
                      left: 21,
                      top: 27,

                      fontStyle:"normal",
                      fontWeight: "700",
                      fontSize: 16,
                      lineHeight: 22,
                      textAlign: "center",
                      color: "#FFFFFF"
                      
                    }}
                   >
                    {item.title}
                   </Text>
                  </Pressable>
                )}
            />

          </View>



        </View>

         </View>
         
        {/* </ScrollView> */}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   topContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40,
        justifyContent: 'space-between',
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
     },
    iconContainer: { 
        flexDirection: "row"
    },
    icon: {
        marginLeft: 35
    },
    subContainer: {
      marginRight: 15, 
      marginLeft:15,
    },
    iconStyle: {
      paddingVertical: 6,
      paddingHorizontal: 6,
    },
    searchWrapperStyle: {
      backgroundColor:"#fff",
      flexDirection: "row",
      // justifyContent: 'space-between', 
      borderRadius: 10,
      // marginHorizontal:  16,
      padding: 8
    },
    searchInputStyle: {
      flex: 1,
      color: '#000',
      fontSize: 21,
      paddingVertical: 6,
      fontWeight: "500",
      paddingHorizontal: 6,
    }
});

export default SearchScreen;
