import styled from "styled-components";
import Filter from "./components/Filter";
import NewTodo from "./components/NewTodo";
import ToDoList from "./components/TodoList";

function App() {
  return (
    <Main>
      <Filter />
      <ToDoList />
      <NewTodo />
    </Main>
  );
}

const Main = styled.div`
  width: 400px;
  position: relative;
  margin: 0 auto;
  padding: 0;
  background-color: black;
  color: white;
`;

export default App;
