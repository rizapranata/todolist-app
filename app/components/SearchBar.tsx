import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {searchTodo, resetFilter} from '../store/todoSlice';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    dispatch(searchTodo(keyword));
    console.log('search keyword', keyword);
    
  };

  const handleReset = () => {
    setKeyword('');
    dispatch(resetFilter());
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Search by title or category..."
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
        <Icon name="search" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleReset}
        style={[styles.iconButton, {backgroundColor: Colors.danger}]}>
        <Icon name="close" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  iconButton: {
    marginLeft: 8,
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
