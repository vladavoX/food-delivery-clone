import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

import RestuarantCard from './RestuarantCard'
import sanityClient from '../setupSanity.js'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        }
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants)
      })
  }, [id])

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <View>
          <Text className='font-bold text-lg'>{title}</Text>
          <Text className='text-xs text-gray-500'>{description}</Text>
        </View>
        <ArrowRightIcon color='#00CCBB' />
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {restaurants?.map((restaurant) => (
          <RestuarantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
