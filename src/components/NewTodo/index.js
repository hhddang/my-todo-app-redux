import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import todoListSlice from "../../redux/slices/todoListSlice";
import { useSelector } from "react-redux";
import { todoListSelector } from "../../redux/selectors";

function NewTodo() {
  const dispath = useDispatch();
  const todoList = useSelector(todoListSelector);

  const [todoName, setTodoName] = useState("");
  const [urgent, setUrgent] = useState(false);

  const handleChangeText = (e) => {
    setTodoName(e.target.value);
  };

  const handleClickUrgent = () => {
    setUrgent(!urgent);
  };

  const handleAddTodo = () => {
    if (todoName) {
      dispath(
        todoListSlice.actions.addTodo({
          name: todoName,
          done: false,
          urgent,
        })
      );
      setTodoName("");
      setUrgent(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <NewTodoBox>
      <Text placeholder="Your todo name" onChange={handleChangeText} value={todoName} />
      <Urgent>
        <input type="checkbox" name="urgent" onClick={handleClickUrgent} checked={urgent} />
        <span>Urgent</span>
      </Urgent>
      <AddButton onClick={handleAddTodo}>Add</AddButton>
    </NewTodoBox>
  );
}

const NewTodoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: blue;
  bottom: 0;
`;
const Text = styled.input.attrs({ type: "input" })`
  flex: 3;
  padding: 5px 0;
`;
const Urgent = styled.label`
  flex: 1;
  font-size: 16px;
  font-weight: 800;
  color: white;
  cursor: pointer;
  input:checked + span {
    color: red;
  }
`;
const AddButton = styled.button`
  flex: 1;
  background-color: gray;
  border-radius: 5px;
  padding: 5px 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: black;
  }
`;

export default NewTodo;
