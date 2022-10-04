import { useState } from "react";

const Form = ({handleAddNewTask, handleDeleteTasks}) => {
    
   const [term, setTerm] = useState('');

   const onInputChange = (event) => {
     setTerm(event.target.value);
    // console.log(term);
   }

   const onFormSubmit = (event) => {
    event.preventDefault();
      handleAddNewTask(term);
      setTerm('');
    //  return event.target.value = '';
   }
    
    return (
        <>
            <input value={term} onChange={onInputChange} type="text" />
            <button onClick={onFormSubmit}>Add Task</button>
            <button onClick={handleDeleteTasks}>delete done tasks</button>
        </>
      
    );
}

export default Form;