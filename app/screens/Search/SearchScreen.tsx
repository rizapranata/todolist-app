import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { SearchStackParamList } from '../../types/navigation'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'

type SearchScreenProps = NativeStackNavigationProp<SearchStackParamList, 'SearchScreen'>

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<SearchScreenProps>();
  
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen