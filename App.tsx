import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './src/components/FlatCards'
import ElevatedCards from './src/components/ElevatedCards'
import FancyCards from './src/components/FancyCards'
import ActionCard from './src/components/ActionCard'
import ContactList from './src/components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App