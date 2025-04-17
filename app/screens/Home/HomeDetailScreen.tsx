// HomeDetailScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HomeDetailScreen = () => {
  const detailData = useSelector((state: RootState) => state.todo.detailData);

  return (
    <View>
      <Text>Detail: {detailData}</Text>
    </View>
  );
};

export default HomeDetailScreen;
