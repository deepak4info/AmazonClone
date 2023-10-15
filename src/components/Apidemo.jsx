import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Categories } from '../data/Categories'


const Apidemo = () => {
  return (
    <View style={{flex:1, backgroundColor:'red'}}>
      {Categories.map(item=>{
        <View>
            <Text>{item.title}</Text>
            </View>
      })}
    </View>
  )
}

export default Apidemo

const styles = StyleSheet.create({})