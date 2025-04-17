import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {updateTodo} from '../../store/todoSlice';
import Colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const DetailTodo = () => {
  const navigation = useNavigation();
  const todoDetail = useSelector((state: RootState) => state.todoList.detail);
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(todoDetail?.completed || false);

  if (!todoDetail) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No detailed data.</Text>
      </View>
    );
  }

  const handleStatusChange = (status: boolean) => {
    setCompleted(status);
    dispatch(updateTodo({...todoDetail, completed: status}));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Todo</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Title:</Text>
        <Text style={styles.value}>{todoDetail.title}</Text>

        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{todoDetail.category}</Text>

        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{todoDetail.desc}</Text>

        <Text style={styles.label}>Status:</Text>
        <View style={styles.radioGroup}>
          <Pressable
            style={styles.radioItem}
            onPress={() => handleStatusChange(true)}>
            <View style={styles.radioCircle}>
              {completed && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioLabel}>Done</Text>
          </Pressable>

          <Pressable
            style={styles.radioItem}
            onPress={() => handleStatusChange(false)}>
            <View style={styles.radioCircle}>
              {!completed && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioLabel}>Not yet</Text>
          </Pressable>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.confirmText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailTodo;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  text: {fontSize: 20, color: 'black'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 16},
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {fontSize: 16, color: '#444', marginTop: 12},
  value: {fontSize: 18, fontWeight: '600'},
  radioGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  radioLabel: {fontSize: 16, color: '#333'},
  button: {
    width: '20%',
    backgroundColor: Colors.primary,
    marginTop: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
