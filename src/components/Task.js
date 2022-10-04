const Task = ({task, handleToggleTask}) => {

    const toggle = () => {
        handleToggleTask(task.id)
    }

    return ( 
    
        <div className="ui checkbox">
            <input type="checkbox" checked={task.done}  onChange={toggle}/>
            <label>{task.text}</label>
        </div>
        
    );
}

export default Task;