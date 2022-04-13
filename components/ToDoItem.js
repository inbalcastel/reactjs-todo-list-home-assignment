

import { useContext } from "react";
import {ToDoContext} from "../Context/ToDoState";

const ToDoItem = ({ item}) => { 

    const {setUpdateTodo,setDeleteTodo} = useContext(ToDoContext)

    const handleOnClick=(e)=>{
        if(e.ctrlKey || e.metaKey)
        {
            setDeleteTodo(item)
        }
        else
        {
            setUpdateTodo({...item,["completed"]:!item.completed})
        }
        
    }

    return <li key={item.id} 
                style={{ textDecoration: item.completed ?  'line-through' :''}} 
                onClick={handleOnClick}>
                {item.title} 
            </li>
  };
  
  export default ToDoItem;