import React from 'react';
import { StyleSheet, View, Text, Image , Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function PlayListCard({ title, img }) {
  return (
         <View style={{width: width * .46}}>
          <View style={styles.container}>
      <Image style={styles.image} source={{ uri: img }} />
      <View style={styles.textCont}>
        <Text style={styles.text} >{title}</Text>
      </View>
    </View>
         </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // minWidth:"20%",
    // width: 155,
    // maxWidth: 190,
    // maxHeight: 60,
    backgroundColor: "rgba(51,51,51,0.7)",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    borderRadius: 4,
    overflow: 'hidden',
    // width: "74%",
    // height: "30%",
    // margin: 0,
    // margin: '0 auto',
    marginBottom: 8,
    marginHorizontal:8,
    // marginHorizontal:4,
    // marginRight: 5,
    // marginLeft: 10,
    // marginHorizontal: 5,
    // marginVertical: 5,
    // marginBottom:8,
  },
  image: {
    height: 60,
    width: 60,
  },
  textCont: {
    /* textAlign: "center",
    width: "55%" */
    width: '55%',
    // paddingHorizontal: 8,
  },
  text: {
    color: "white",
    textAlign: 'center',
  }
});
