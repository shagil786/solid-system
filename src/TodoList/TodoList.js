import React from "react";
import styles from "./TodoList.module.css";

const TodoList = ({
  data,
  handleDatele = () => {},
  handleCompleted = () => {},
}) => {
  const { itemContainer, isCompleted } = styles;
  return (
    <div className={TodoList}>
      {data?.map((each, index) => (
        <div
          className={`${itemContainer} ${each?.completed ? isCompleted : ""}`}
        >
          <button onClick={() => handleCompleted(each)}>completed</button>
          <div key={`${each?.id}_${index}`}>{each?.value}</div>
          <button onClick={() => handleDatele(each)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

/*
Implement a React component that represents a single item in a todo list. The component should display the todo's text and a checkbox to toggle its completed state. Additionally, it should have a button to delete the todo item.

Write a MongoDB operation to update a specific todo item in a collection called todos. The operation should mark a todo item as completed by its ID
*/
