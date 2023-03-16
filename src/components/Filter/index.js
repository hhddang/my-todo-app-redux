import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import filterSlice from "../../redux/slices/filterSlice";

function Filter() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(filterSlice.actions.searchFilterChange(e.target.value));
  };
  const handleChangeStatusFilter = (e) => {
    const value = e.target.value;
    if (["all", "done", "still"].includes(value)) {
      console.log("Status filter: ", value);
      setStatusFilter(value);
      dispatch(filterSlice.actions.statusFilterChange(value));
    }
  };
  const handleChangePriorityFilter = (e) => {
    const value = e.target.value;
    if (["all", "urgent", "ordinary"].includes(value)) {
      console.log("Priority filter: ", value);
      setPriorityFilter(value);
      dispatch(filterSlice.actions.prioritiesFilterChange(value));
    }
  };

  return (
    <FilterBox>
      <Search>
        <Title>Search by name</Title>
        <input placeholder="Enter your todo name" value={searchText} onChange={handleChangeSearchText}></input>
      </Search>
      <StatusFilter>
        <Title>Filter by Status</Title>
        <CheckboxContainer onClick={handleChangeStatusFilter}>
          <Checkbox>
            <input type="radio" name="status-filter" value="all" checked={"all" === statusFilter} />
            <span>All</span>
          </Checkbox>
          <Checkbox>
            <input type="radio" name="status-filter" value="done" />
            <span>Done</span>
          </Checkbox>
          <Checkbox>
            <input type="radio" name="status-filter" value="still" />
            <span>Still</span>
          </Checkbox>
        </CheckboxContainer>
      </StatusFilter>
      <PriorityFilter>
        <Title>Filter by Priority</Title>
        <CheckboxContainer onClick={handleChangePriorityFilter}>
          <Checkbox>
            <input type="radio" name="priority-filter" value="all" checked={"all" === priorityFilter} />
            <span>All</span>
          </Checkbox>
          <Checkbox>
            <input type="radio" name="priority-filter" value="urgent" />
            <span>Urgent</span>
          </Checkbox>
          <Checkbox>
            <input type="radio" name="priority-filter" value="ordinary" />
            <span>Ordinary</span>
          </Checkbox>
        </CheckboxContainer>
      </PriorityFilter>
    </FilterBox>
  );
}

const FilterBox = styled.div`
  padding: 10px 20px;
  flex: columns;
  & > div {
    margin-bottom: 10px;
    & > span {
      color: blue;
      margin-bottom: 5px;
    }
  }
`;

const Title = styled.span`
  color: white;
  font-weight: 700;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    height: 25px;
  }
`;

const StatusFilter = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-right: 50px;
  }
`;

const PriorityFilter = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-right: 44px;
  }
`;

const CheckboxContainer = styled.div``;

const Checkbox = styled.label`
  cursor: pointer;
  input:checked + span {
    text-decoration: underline;
  }
`;

export default Filter;
