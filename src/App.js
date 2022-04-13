
import MyList from "./components/MyList";
import ToDoProvider from "./Context/ToDoState";

export default function App() {
  return (
    <div>
      <h1>My List</h1>
        <ToDoProvider>
            <MyList />
        </ToDoProvider>
    </div>
  );
}
