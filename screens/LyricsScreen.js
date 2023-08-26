import { View, Text } from 'react-native'
import React from 'react'

export default function LyricsScreen({ route }) {
  const { title, lyrics } =route.params;

  return (
    <View>
      <Text>Title: {title} </Text>
      <Text>Lyrics: {lyrics}</Text>
    </View>
  )
}