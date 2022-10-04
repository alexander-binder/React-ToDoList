import Task from "./Task";

const TasksList = ({tasks, handleToggleTask}) => {
    
 
    return (<>
    <div className="ui card">
        <div className="content">
            <div  className="ui list"> 
                {
                    tasks.map((task) => {
                        return <div className="item"> <Task task={task} handleToggleTask={handleToggleTask } /> </div> ;    
                    })
                }
                
            </div>
        </div>
    </div>
        </>);
}

export default TasksList;


