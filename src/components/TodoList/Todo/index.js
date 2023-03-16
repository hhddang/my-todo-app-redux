import { useDispatch } from "react-redux";
import styled from "styled-components";
import todoListSlice from "../../../redux/slices/todoListSlice";

function Todo({ name, done, urgent }) {
  const dispatch = useDispatch();

  const handleChangeTodoStatus = () => {
    dispatch(todoListSlice.actions.toggleTodoStatus(name));
  };

  return (
    <TodoContainer onClick={handleChangeTodoStatus}>
      <input type="checkbox" checked={done} />
      <Name className="name">{name}</Name>
      <Urgent className="urgent">{urgent && "Urgent"}</Urgent>
    </TodoContainer>
  );
}

const TodoContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border: 1px solid blue;
  cursor: pointer;
  & input:checked {
    & + .name {
      text-decoration: line-through;
    }
    & ~ .urgent {
      color: gray;
    }
  }
`;

const Name = styled.div`
  flex: 1;
  font-size: 20px;
`;

const Urgent = styled.div`
  color: red;
`;

export default Todo;
