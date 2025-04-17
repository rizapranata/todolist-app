import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo, setDetailData} from '../../store/todoSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/colors';
import TaskItem from '../../components/TaskItem';
import SearchBar from '../../components/SearchBar';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const todos = useSelector((state: any) => state.todoList.todos);

  const goToDetail = (id: string) => {
    dispatch(setDetailData(id));
    navigation.navigate('DetailTodo');
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            backgroundColor: Colors.primary,
            padding: 16,
            borderRadius: 16,
            paddingVertical: 20,
            marginVertical: 16,
          }}>
          <Text style={{color: 'white'}}>Cuaca hari ini</Text>
        </View>
        <Text style={styles.title}>Today's Task</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TaskItem
              id={item.id}
              title={item.title}
              category={item.category}
              completed={item.completed}
              onPress={goToDetail}
              onDelete={handleDelete}
            />
          )}
          contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={() => (
            <View style={{padding: 40, alignItems: 'center'}}>
              <Text style={{color: '#aaa', fontSize: 18}}>
                No tasks available.
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
