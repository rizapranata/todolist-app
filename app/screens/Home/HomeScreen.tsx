// HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { setDetailData } from '../../store/todoSlice';
import { HomeStackParamList } from '../../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToDetail = () => {
    dispatch(setDetailData('Data dari Home'));
    navigation.navigate('HomeDetail');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Detail" onPress={goToDetail} />
    </View>
  );
};

export default HomeScreen;
