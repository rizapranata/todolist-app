// HomeDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const DetailTodo = () => {
  const todo = useSelector((state: RootState) => state.todoList.detail);

  console.log('todossss', todo);

  return (
    <View style={styles.container}>
      <Text>Detail: {todo?.title}</Text>
    </View>
  );
};

export default DetailTodo;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'black'},
});
