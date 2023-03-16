import styled from "styled-components";
import Todo from "./Todo";
import { todoListSelectorWithFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";

function TodoList() {
  const todoList = useSelector(todoListSelectorWithFilter);
  return (
    <TodoListBox>
      <Title>TO DO ({todoList.length})</Title>
      <Window>
        <List>
          {todoList.map((todo, index) => (
            <Todo key={index} {...todo} />
          ))}
        </List>
      </Window>
    </TodoListBox>
  );
}

const TodoListBox = styled.div`
  overflow-y: hidden;
`;
const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin: 10px auto;
`;

const Window = styled.div`
  height: 300px;
  border: 5px solid blue;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const List = styled.div``;

export default TodoList;
