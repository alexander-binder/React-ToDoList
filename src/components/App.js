import React,{ useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import TasksList from './TasksList';
import From from './From';


const App = () => {

  const [tasks, setTasks] = useState([
    { id: 1, text: "Faire les courses", done: true },
    { id: 2, text: "Ménage !", done: false }
  ]);


  const handleAddNewTask = (term) => {
   if(!term) return 

    const newTask = { 
        id: uuidv4() , 
        text: term, 
        done: false 
      }

    setTasks([...tasks, newTask]);
  };



  const handleToggleTask = (id) => {
    //alwasys create a copy of your state to 
    //mamnipulate the original
    const newtasks = [...tasks];

    const toggled = newtasks.find((task) => task.id === id );
    // this a belean the negation will make it always 
    // the opposite of what it was "true"  or "false"
    toggled.done = !toggled.done;
   
     setTasks(newtasks);
  }


  const handleDeleteTasks = () => {
    const newtasks = tasks.filter((task) => task.done === false);
    setTasks(newtasks);
  }

    return( 
          <>
            <div className='ui container' style={ { marginTop: '10px' } }>
              
              <div className="ui card">
                  <div className="content">
                    <div className="header">Do do List</div>
                  </div>
                  
                  <div className="content">
                    <From addNewTaskCallBack={handleAddNewTask} />
                    <TasksList tasks={tasks} handleToggleTask={handleToggleTask } handleDeleteTasks={handleDeleteTasks}/>
                  </div>
              
                <div className="extra content">
                  <div className="ui submit button" onClick={handleDeleteTasks}>Delete finished Tasks</div>
                </div>
            </div>
            
          </div>
          </>
    ); 

  };

export default App;





