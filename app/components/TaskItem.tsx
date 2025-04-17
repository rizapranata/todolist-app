import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/colors';
import ConfirmDeleteModal from './ConfirmDeleteModal';

interface TaskItemProps {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  onPress: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  title,
  category,
  completed,
  onPress,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDelete = () => {
    setShowModal(false);
    onDelete(id);
  };

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.taskItem} onPress={() => onPress(id)}>
          <View style={styles.iconWrapper}>
            <Icon
              name="checkmark-done-circle"
              size={30}
              color={completed ? Colors.primary : '#aaa'}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.taskTitle}>{title}</Text>
          </View>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', padding: 10}}>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            disabled={!completed}>
            <Icon
              name="trash-outline"
              size={30}
              color={completed ? Colors.danger : Colors.dark}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ConfirmDeleteModal
        visible={showModal}
        title={title}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9ff',
    padding: 10,
    borderRadius: 14,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    marginRight: 12,
    justifyContent: 'center',
  },
  info: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
});

export default TaskItem;
