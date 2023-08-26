import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons, EvilIcons , Fontisto, Ionicons, FontAwesome, Foundation} from '@expo/vector-icons'; // Update the icon imports
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import LibraryScreen from './screens/LibraryScreen';
import PremiumScreen from './screens/PremiumScreen';
import LyricsScreen from './screens/LyricsScreen';
import MainStack from './components/MainStack';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={{
            tabBarStyle: {
              height:65,
              paddingTo:10,
              backgroundColor: "black",
              // borderTopWidth: 0,
            },
            tabBarLabelStyle: {
              marginBottom: 5,
              paddingBottom: 5,
              fontSize:10,
              fontWeight: "bold",
            },
            tabBarActiveTintColor: "white"
          }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          
          options={{
            tabBarIcon: ({ color, size }) => (
              // <MaterialCommunityIcons name="home" size={30} color={color} /> // Update the icon component
              <Foundation name="home" size={30} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          // component={MainStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
             <MaterialIcons name="my-library-music" size={30} color={color} /> // Update the icon component
              
            ),
          }}
        />
        {/* <Tab.Screen
          name="Premium"
          component={PremiumScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="spotify" size={30} color={color} /> // Update the icon component
            ),
          }}
        /> */}
        {/* <Tab.Screen 
          name="Lyrics"
          component={LyricsScreen}
         /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
