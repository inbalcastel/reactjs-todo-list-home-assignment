
import { useEffect ,useContext} from "react";
import ToDoItem from "./ToDoItem";
import isEmpty from 'lodash/isEmpty';
import './ToDoStyle.scss';
import { ProgressSpinner } from 'primereact/progressspinner';
import {ToDoContext} from "../Context/ToDoState";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";   

const MyList = () => {
  const {GetToDoList,todoList,loading} = useContext(ToDoContext)

  useEffect(()=>{
        if(isEmpty(todoList))
       {
         GetToDoList();
       }
  },[]);



  return (
      <>
      {loading && 
             <ProgressSpinner className="loader" style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" title="loading"/>
      }
        <ul className="todolist"> 
            {!isEmpty(todoList) &&
            todoList.map(item => {
                    return  <ToDoItem key={item.id} item={item}/> //{...item}
            })  
            }
        </ul>
    </>
  );
};

export default MyList;
