import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoProvider from "../context/Todos";

const Todos = () => {
  return (
    <TodoProvider>
      <h2>Todo Application</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default Todos;
