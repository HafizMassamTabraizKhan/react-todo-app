import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

const LOCAL_STORAGE_KEY = 'todo:savedTasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSaveTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSaveTasks();
  }, [])

  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle){
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId){
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTask);
  }

  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return{
          ...task,
          isCompleted :!task.isCompleted
        }
      }
      return task;
    })
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />

    </>
  )
}

export default App
