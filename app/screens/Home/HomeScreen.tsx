import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setDetailData} from '../../store/todoSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types/navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/colors';

// src/constants/dummyTodos.ts
export const dummyTodos = [
  {
    id: '1',
    title: 'UI Design',
    time: '09:00 AM - 11:00 AM',
    completed: false,
  },
  {
    id: '2',
    title: 'Web Development',
    time: '11:30 AM - 12:30 PM',
    completed: true,
  },
  {
    id: '3',
    title: 'Office Meeting',
    time: '02:00 PM - 03:00 PM',
    completed: false,
  },
  {
    id: '4',
    title: 'Dashboard Design',
    time: '03:30 PM - 05:00 PM',
    completed: false,
  },
];

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToDetail = (title: string) => {
    dispatch(setDetailData(title));
    navigation.navigate('HomeDetail');
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

      <FlatList
        data={dummyTodos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.taskItem}
            onPress={() => goToDetail(item.title)}>
            <View style={styles.iconWrapper}>
              <Icon
                name="checkmark-done-circle"
                size={30}
                color={item.completed ? Colors.primary : '#aaa'}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskTime}>{item.time}</Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#aaa" />
          </TouchableOpacity>
        )}
      />
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
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#4e74f9',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9ff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  taskTime: {
    fontSize: 13,
    color: '#888',
  },
});

export default HomeScreen;
