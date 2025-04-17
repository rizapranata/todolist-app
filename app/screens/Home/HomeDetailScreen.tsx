// HomeDetailScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HomeDetailScreen = () => {
  const todo = useSelector((state: RootState) => state.todoList.detail);

  console.log('todossss', todo);

  return (
    <View>
      <Text>Detail: {todo?.title}</Text>
    </View>
  );
};

export default HomeDetailScreen;
