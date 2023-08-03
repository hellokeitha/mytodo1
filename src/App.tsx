// src/App.tsx
import React, { FormEvent, useState, useEffect, useContext } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import styled from "styled-components";
import { ThemeContext } from "./components/ThemeProvider";
import shortId from "shortid";
import useInput from "./hooks/useInput";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // Dark Mode
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem("darkMode") === "true";
    if (isDarkModePreferred) {
      toggleDarkMode();
    }
  }, [toggleDarkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Todo
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

  // custom hook
  const [title, onChangeTitleHandler, setTitle] = useInput();
  const [content, onChangeContentHandler, setContent] = useInput();

  // 타입이 지정된 배열 상태와 초기값
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: shortId.generate(),
      title: "New Todo Title",
      content: "New Todo Content",
      important: 1,
      dueDate: 20230729,
      createdAt: Date.now(),
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: shortId.generate(),
      title: "New Todo Title",
      content: "New Todo Content",
      important: 2,
      dueDate: 20230729,
      createdAt: Date.now(),
      isCompleted: true,
      isDeleted: false,
    },
  ]);

  // 기존의 배열에 새로운 투두를 추가하는 함수
  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: shortId.generate(),
      title,
      content,
      important: 1,
      dueDate: 20230730,
      createdAt: Date.now(),
      isCompleted: false,
      isDeleted: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  // DONE 버튼 클릭 핸들러
  const handleDoneButtonClick = (todoId: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // DELETE 버튼 클릭 핸들러
  const handleDeleteButtonClick = (todoId: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  return (
    <Container>
      <h1>My Own Todo List</h1>
      <DarkModeToggle />
      <div>
        <form onSubmit={addTodo}>
          <input
            placeholder="title"
            value={title}
            onChange={onChangeTitleHandler}
          />
          <input
            placeholder="content"
            value={content}
            onChange={onChangeContentHandler}
          />
          <button>Add</button>
        </form>
      </div>
      <h3>To Do ...</h3>
      {/* TodoList 컴포넌트에 필요한 데이터와 버튼 클릭 핸들러를 props로 전달 */}
      <TodoList
        data={todos.filter((todo) => todo.isCompleted === false)}
        handleDoneButtonClick={handleDoneButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
      ></TodoList>
      <h3>Completed ...</h3>
      {/* setTodos를 TodoList 컴포넌트에게 전달 */}
      <TodoList
        data={todos.filter((todo) => todo.isCompleted === true)}
        handleDoneButtonClick={handleDoneButtonClick}
        handleDeleteButtonClick={handleDeleteButtonClick}
      ></TodoList>
      {/* </ThemeProvider> */}
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
