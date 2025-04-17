import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TodoDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TodoDetailScreen</Text>
    </View>
  );
};

export default TodoDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  text: {fontSize: 20, color: 'black'},
});
