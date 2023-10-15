import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity} from 'react-native'
import React,{useState, useEffect} from 'react'
import { Categories } from '../data/Categories'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
const navigation = useNavigation();
  return (
  <ScrollView horizontal style={styles.conatiner}>
    {Categories.map(item=>(
        <TouchableOpacity onPress={()=>navigation.navigate('Product')}
         style={styles.category} key={item.id}>
            <Image source={item.image} style={styles.imgStyle}/>
            <Text style={styles.title}>{item.title} </Text>
        </TouchableOpacity>
    ))}
  </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({
    conatiner: {
      backgroundColor: '#FFFFFFFF',
      padding: 10,
    },
    imgStyle: {
      height: 50,
      width: 50,
    },
    title: {
      fontSize: 10,
      color: '#2c4341',
    },
    category: {
      paddingHorizontal: 8,
      alignItems: 'center',
    },
  });