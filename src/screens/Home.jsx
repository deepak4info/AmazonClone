import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Category from '../components/Category'
import Brands from '../components/Brands'
import Deals from '../components/Deals'


const Home = () => {
  return (
    <ScrollView>
      <Header/>
      <SubHeader/>
      <Carousel/>
      <Category/>
      <Services/>
      <Deals/>
      <Brands/>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})