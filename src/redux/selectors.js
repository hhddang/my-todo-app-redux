const searchTextFilterSelector = (state) => state.filter.byText;
const statusFilterSelector = (state) => state.filter.byStatus;
const priorityFilterSelector = (state) => state.filter.byPriority;

export const todoListSelector = (state) => state.todoList;

export const todoListSelectorWithFilter = (state) => {
  var todoList = state.todoList;
  const searchText = searchTextFilterSelector(state);
  const status = statusFilterSelector(state);
  const priority = priorityFilterSelector(state);

  // Step 1: Filter by search text
  todoList = todoList.filter((todo) => todo.name.includes(searchText));

  // Step 2: Filter by status
  if (status !== "all") {
    if (status === "done") {
      todoList = todoList.filter((todo) => todo.done === true);
    } else {
      todoList = todoList.filter((todo) => todo.done !== true);
    }
  }

  // Step 3: Filter by priority
  if (priority !== "all") {
    if (priority === "urgent") {
      todoList = todoList.filter((todo) => todo.urgent === true);
    } else {
      todoList = todoList.filter((todo) => todo.urgent !== true);
    }
  }
  return todoList;
};
