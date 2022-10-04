import React,{ useState ,useEffect} from 'react';

const From = ({addNewTaskCallBack, handleDeleteTasks}) => {

    const [term, setTerm] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        addNewTaskCallBack(term);
       //to clear input field after sunmiting 
       //I set Term to an empty string
        setTerm('');
    };



    return (<>
    
    <div class="ui mini form">
        <div className="two fields">
           
           <div className="field">
                <label>Add New Task</label>
                <input value={term} placeholder="New Task" type="text" onChange={(event) => {setTerm(event.target.value) }}/>
            </div>
           
        </div>

        <div className="ui submit button" onClick={onSubmit}>Add New Task</div>
       
    </div>
    
    </>);
}

export default From;