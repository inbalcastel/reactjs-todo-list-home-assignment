import { createContext, useState } from "react";
import { getTodos , updateTodo ,deleteTodo} from "../api";


export const ToDoContext = createContext({
  todoList: {},
  loading: {},
  GetToDoList: () => {},
  setUpdateTodo: () => {},
  setDeleteTodo: () => {},
});

const ToDoProvider = (props) => {
  const [todoList, setTodoList] = useState({});
  const [loading, setLoading] = useState(false);

  const GetToDoList = async () => {
        setLoading(true)
        await getTodos().then(
            res => {
                if(res)
                {
                     setTodoList(res)

                }
            }).catch((error)=>
            {
              console.log(error);
            });  
        setLoading(false)
    };
  

  const setUpdateTodo = async(item)=>{
        await updateTodo({todoId:item.id,update:item}).then(
        res => {
           if(res)
           {
               let temp =todoList.map(x=>{
                   return x.id === item.id ? res : x
               })
                setTodoList(temp)
           }
        }).catch((error)=>
        {
          console.log(error);
        }); 
  }

  const setDeleteTodo = async(item)=>{
    await deleteTodo({todoId:item.id}).then(
    res => {
       if(res)
       {
            let updateItems = todoList.filter(x=>x.id !== item.id)
            setTodoList(updateItems)

       }
    }).catch((error)=>
    {
      console.log(error);
    }); 
}

  const todoContext = {
    todoList: todoList,
    loading: loading,
    GetToDoList:GetToDoList,
    setUpdateTodo:setUpdateTodo,
    setDeleteTodo:setDeleteTodo
  };

  return (
    <ToDoContext.Provider value={todoContext}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
