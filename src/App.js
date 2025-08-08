import { useEffect, useContext } from "react";
import "./App.css";
import TaskCreate from "./compenents/TaskCreate";
import TaskList from "./compenents/TaskList";
import TasksContext from "./context/task";

function App() {
  const { fetchTasks } = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
