import React from "react";

type Todo = {
  id: string;
  title: string;
  content: string;
  important: number;
  dueDate: number;
  createdAt: number;
  isCompleted: boolean;
  isDeleted: boolean;
};

// props data
type TodoListProps = {
  data: Todo[];
  handleDoneButtonClick: (todoId: string) => void;
  handleDeleteButtonClick: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  data,
  handleDoneButtonClick,
  handleDeleteButtonClick,
}) => {
  return (
    <div>
      <div>
        {data
          // .filter((todo) => todo.isCompleted === false)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <p>Title: {todo.title}</p>
                <p>Content: {todo.content}</p>
                <p>Important: {todo.important}</p>
                <p>Due Date: {todo.dueDate}</p>
                <p>Created At: {todo.createdAt}</p>
                <p>is Completed: {todo.isCompleted.toString()}</p>
                <p>is Done: {todo.isDeleted.toString()}</p>
                <button onClick={() => handleDoneButtonClick(todo.id)}>
                  {todo.isCompleted ? "CANCEL" : "DONE"}
                </button>
                <button onClick={() => handleDeleteButtonClick(todo.id)}>
                  DELETE
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
