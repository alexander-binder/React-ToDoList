const Task = ({task , handleToggleTask}) => {
  const onToggle = () => {
    handleToggleTask(task.id);
  }

    return (
        <label>
            <input type="checkbox" checked={task.done} onChange={onToggle}/>
            {task.text}
        </label>
    );
}

export default Task;