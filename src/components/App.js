import React,{ useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList';
import Form from './Form';

const App = () => {

    const LOCAL_STORAGE_KEY = 'toDoList';

    const [tasks, setTasks] = useState([
      { id: 1, text: "Faire les courses", done: false },
      { id: 2, text: "Ménage !", done: false }
    ]);

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     
     if(storedTasks) {setTasks(storedTasks)};
   }, []);


    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(tasks));
    }, [tasks]);

   const handleAddNewTask = (inputText) =>{
   
    if(inputText === '') return;

      const newTask = {
        id: uuidv4(),
        text: inputText,
        done: false
      };

     
      setTasks([...tasks, newTask]);

      
      // console.log(tasks);
   };

   
const handleToggleTask = (id) => {
  const newTasks = [...tasks];
  const toggledTask = newTasks.find((task) => task.id === id);
  toggledTask.done = !toggledTask.done;
  setTasks(newTasks );
}

const handleDeleteTasks = () => {
  const newTasks = tasks.filter((task) => !task.done);
  setTasks(newTasks);
}
      


    return( 
          <>
            <div className='ui container' style={ { marginTop: '10px' } }>
              <h1>Do do List</h1>
              <Form handleAddNewTask={handleAddNewTask} handleDeleteTasks={handleDeleteTasks}/>
              <TaskList tasks={tasks} handleToggleTask={handleToggleTask}/>
              <div>{tasks.filter((task) => !task.done).length} Left to Do</div>
              
            </div>
          </>
    ); 

  };

export default App;