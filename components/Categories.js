import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        image='https://links.papareact.com/gn7'
        title='Testing 1'
      />
      <CategoryCard
        image='https://links.papareact.com/gn7'
        title='Testing 2'
      />
      <CategoryCard
        image='https://links.papareact.com/gn7'
        title='Testing 3'
      />
      <CategoryCard
        image='https://links.papareact.com/gn7'
        title='Testing 4'
      />
      <CategoryCard
        image='https://links.papareact.com/gn7'
        title='Testing 5'
      />
      <CategoryCard
        image='https://links.papareact.com/gn7'
        title='Testing 6'
      />
    </ScrollView>
  )
}

export default Categories
