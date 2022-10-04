import Task from "./Task";

const TaskList = ({tasks, handleToggleTask}) => {
    
    // const renderTasklist = () => {
    //     tasks.map(task => task.text);
    // }

    return (
        <div> 
            {
                tasks.map((task) => {
                    return <Task task={task} handleToggleTask={handleToggleTask}/> ;    
                })
            }
            
        </div>
    );
}

export default TaskList;