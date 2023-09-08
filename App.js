import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showAbout, setShowAbout] = useState(false);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>

      <TouchableOpacity style={styles.aboutButton} onPress={toggleAbout}>
        <Text style={styles.aboutButtonText}>About Me</Text>
      </TouchableOpacity>

      {showAbout && (
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>
            Name : M.J.K.S.Marasinghe
            Registration Number : ITT/2017/2018/048
            Index Number : 0735
          </Text>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      
      <Text style={styles.taskListTitle}>Tasks:</Text>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  deleteButton: {
    color: 'red',
  },
  aboutButton: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginBottom: 10,
  },
  aboutButtonText: {
    color: 'white',
  },
  aboutContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
  },
});
