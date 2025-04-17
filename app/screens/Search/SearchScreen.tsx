import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SearchStackParamList} from '../../types/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SearchBar from '../../components/SearchBar';
import TaskItem from '../../components/TaskItem';
import {deleteTodo, setDetailData} from '../../store/todoSlice';

type SearchScreenProps = NativeStackNavigationProp<
  SearchStackParamList,
  'SearchScreen'
>;

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<SearchScreenProps>();
  const todos = useSelector((state: any) => state.todoList.filteredTodos);

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
        <Text style={styles.title}>Search Task</Text>
        <SearchBar />
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

export default SearchScreen;

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
