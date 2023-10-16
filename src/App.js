import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import "./App.css";
import React from "react";
function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
