import React, { useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import PlayListCard from '../components/PlayListCard'
import ShowCard from '../components/ShowCard'
import { LinearGradient } from 'expo-linear-gradient'
import TrendingCard from '../components/TrendingCard'
import trendingData from '../data/trendingData'
import cardData  from '../data/cardData'
import showsData from '../data/showsData'
import mixData from '../data/mixData'
import MixCard from '../components/MixCard'
import { Pressable } from 'react-native'



const HomeScreen = ({navigation}) => {
    useEffect(() => {
         navigation.setOptions({
          headerShown:false
         })
    }, [])

    const dat = cardData;

  return (
    <SafeAreaView style={styles.container}>
     <LinearGradient
  colors={['#8a0a0a', '#111', '#111', '#111', '#111']}
  start={{ x: -0.1, y: 0.2 }}
  end={{ x: 1, y: 1 }}
  locations={[0.01, 0.25, 0.5, 0.75, 1]}
     >
        <ScrollView>
        {/* <View> */}
          <View style={styles.subContainer}>
            <Header />

        <FlatList 
            numColumns={2}
            data={dat}
            renderItem={({ item }) => (
              <Pressable
                  
              >
                <PlayListCard title={item.title} img={item.img} />
              </Pressable>
            )}
            style={{marginTop: 15}}
        />

            {/*   <View 
            style={styles.cardContainer} flexDirection="row" flexWrap="wrap" >
              {cardData.map((dat) => 
                  <PlayListCard
                   key={dat.title} 
                   title={dat.title} 
                   img={dat.img}
                  />
                )}
            </View>    */}
            
        {/* <View style={styles.cardContainer}>
              <View
                style={styles.row}
            >
              {cardData.slice(0,  cardData.length / 2).map((dat) => (
                <PlayListCard key={dat.title} title={dat.title} img={dat.img} />
              ))}
            </View>
            <View>
              {cardData.slice(0, cardData.length / 2).map((dat) => (
                <PlayListCard key={dat.title} title={dat.title} img={dat.img} />
              ))}
            </View>
          </View>  */}


            <View style={styles.showContainer}>
              <Text style={styles.text}>Made for Ubokabasi</Text>
              <ScrollView horizontal={true}>
                {showsData.map( dat => 
                 <ShowCard
                   key={dat.title}  
                   title={dat.title}
                   artists={dat.artists}
                   img={dat.img}
                  />
                )}
              </ScrollView>
            </View>
            <View style={styles.bestContainer}>
              <Text style={styles.text}>Top Mixes</Text>
              <ScrollView horizontal={true}>
                {mixData.map(dat => 
                    <MixCard 
                        key={dat.title}
                        title={dat.title}
                        artists={dat.artists}
                        img={dat.img}
                    />
                  )}

              </ScrollView>
            </View>
            <View style={styles.bestContainer}>
                <Text style={styles.text}>Trending Now</Text>
              <ScrollView horizontal={true}>
                {trendingData.map(dat => 
                    <TrendingCard 
                        key={dat.title}
                        title={dat.title}
                        artists={dat.artists}
                        img={dat.img}
                    />
                  )}

              </ScrollView>
            </View>
          </View>
        </ScrollView>
        {/* </View> */}
     </LinearGradient>

    </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
     container: {
      flex:1,
     },
     subContainer: {
      paddingRight: 15,
      paddingLeft: 15
     },
     cardContainer: {
      flexDirection: 'row' ,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 16,

     },
     	row: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom:16,
  	      },
     text: {
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 20
     },
     showContainer: {
      marginTop: 30,
      flex:1,
      minHeight: 60
    },
     
})
