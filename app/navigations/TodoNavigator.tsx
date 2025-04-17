import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AddTodoScreen from '../screens/Todo/AddTodoScreen';
import TodoDetailScreen from '../screens/Todo/TodoDetailScreen';
const Stack = createNativeStackNavigator();

const TodoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddToDoScreen" component={AddTodoScreen} />
      <Stack.Screen name="TodoDetailScreen" component={TodoDetailScreen} />
    </Stack.Navigator>
  )
}

export default TodoNavigator