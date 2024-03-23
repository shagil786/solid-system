import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList/TodoList";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [toToListData, setToDoListData] = useState([]);

  const generateUniqueId = () => {
    return new Date().getTime().toString();
  };

  const handleSubmit = () => {
    const newId = generateUniqueId();
    const newTodoItem = { id: newId, value: value, completed: false };
    setToDoListData([...toToListData, newTodoItem]);
  };

  const handleDetele = (each) => {
    let updatedList = [...toToListData];

    const indexToDelete = updatedList.findIndex((item) => item === each);

    if (indexToDelete !== -1) {
      updatedList.splice(indexToDelete, 1);

      setToDoListData(updatedList);
    }
  };

  const handleCompleted = (each) => {
    const updatedList = [...toToListData];

    const indexToUpdate = updatedList.findIndex((item) => item.id === each?.id);

    if (indexToUpdate !== -1) {
      updatedList[indexToUpdate].completed = true;

      setToDoListData(updatedList);
    }
  };

  console.log(toToListData);

  return (
    <div className="App">
      <div className="container">
        <input
          name="data"
          id="data"
          value={value}
          onChange={(e) => setValue(e?.target?.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div className="card">
        <TodoList
          data={toToListData}
          handleDatele={handleDetele}
          handleCompleted={handleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
