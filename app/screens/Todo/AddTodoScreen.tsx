import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import Colors from '../../constants/colors';
import {Picker} from '@react-native-picker/picker';
import {addTodo, updateTodo} from '../../store/todoSlice';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  AddToDoStackParamList,
  HomeStackParamList,
} from '../../types/navigation';
import {useDispatch, useSelector} from 'react-redux';
import Categories from '../../constants/categories';
import OutlineButton from '../../components/OutlineButton';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;

type AddTodoRouteProp = RouteProp<AddToDoStackParamList, 'AddToDoScreen'>;

type FormData = {
  title: string;
  desc: string;
  category: string;
};

const AddTodoScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const todos = useSelector((state: any) => state.todoList.todos);
  const route = useRoute<AddTodoRouteProp>();
  const {id} = route.params ?? {};
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    if (id) {
      console.log('id param', id);
      const selected = todos.find((item: any) => item.id === id);
      if (selected) {
        reset({
          title: selected.title,
          category: selected.category,
          desc: selected.desc,
        });
      }
    }
  }, [route.params]);

  const onSubmit: SubmitHandler<FormData> = data => {
    if (id) {
      dispatch(updateTodo({...data, id}));
    } else {
      dispatch(
        addTodo({title: data.title, desc: data.desc, category: data.category}),
      );
    }
    reset({
      title: '',
      category: '',
      desc: '',
    });
    navigation.navigate('Home', {screen: 'HomeScreen'});
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="title"
        rules={{required: 'Task name cannot be empty!'}}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.inputContainer}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 10}}>
              Task Name
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Reed Book"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.title && (
              <Text style={styles.errorText}>{errors.title.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="category"
        rules={{required: 'Please select a category!'}}
        render={({field: {onChange, value}}) => (
          <View style={styles.inputContainer}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 10}}>
              Category
            </Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={value}
                onValueChange={onChange}
                style={styles.picker}>
                <Picker.Item label="-- Select Category --" value="" />
                {Categories.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.category}
                    value={item.category}
                  />
                ))}
              </Picker>
            </View>
            {errors.category && (
              <Text style={styles.errorText}>{errors.category.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="desc"
        rules={{
          required: 'Description cannot be empty!',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.inputContainer}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 10}}>
              Description
            </Text>
            <TextInput
              style={[styles.input, {height: 100}]}
              placeholder="Description is.."
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline={true}
              textAlignVertical="top"
            />
            {errors.desc && (
              <Text style={styles.errorText}>{errors.desc.message}</Text>
            )}
          </View>
        )}
      />

      <View
        style={styles.buttonWrapper}>
        <OutlineButton title="Cancel" onPress={() => navigation.goBack()} />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>
            {id ? 'Update Task' : 'Create Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {marginBottom: 15},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    padding: 15,
    fontSize: 18,
  },
  errorText: {color: 'red', fontSize: 12, marginTop: 5},
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    overflow: 'hidden',
  },
  picker: {
    height: 55,
    fontSize: 18,
    marginLeft: 8,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
