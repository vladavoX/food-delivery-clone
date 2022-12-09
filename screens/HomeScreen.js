import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core'
// import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen