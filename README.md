# Desciption

This todo app uses

- local storage to save todo list (Read more below)
- redux toolkit for interchange between components (Read more below)
- styled-components for uickly styling

Set up by following flow:

1. DEFINE redux include <store>, <slice>s, and <selector>s
2. CALL <store> at top-level component with Provider
3. USE <selector> to get data and dispatch(<slice>.action) to set data from <store>
   Note: Redux toolkit self-defines and names <slice>.action after <slice>.reducer name

# Components \\Components at abstract level NOT coding-level

todo : {name:String, done:Boolean, urgent:Boolean}

todoList : [<todo>]

filter : {
~ byText: String,
~ byStatus: "done" || "still" || "all" <=> todo.done == True || False || <both>,
~ byPriority: "urgent" || "ordinary" || "all" <=> todo.urgent == True || False || <both>,
} => todoList

# Local storage

key = "todoList"
value = stringtify(todoList)

Read local storage when starting web app
Save to local storage whenever todoList changes

# Redux toolkit

- Define slices
- Write selectors
- Add slices to store

## Slices \\Define seperated slices of root reducer

### todoListSlice

initState = readFromLocalStorage() || []
reducer : {
~ addTodo() \\Push new todo into todoList
~ toggleTodoStatus() \\Change a todo.done from todoList
}

### filterSlice

initState = {
~ byText: "",
~ byStatus: "all"
~ byPriority: "all"
}
reducer : {
~ searchFilterChange() \\Change state.byText
~ statusFilterChange() \\Change state.byStatus
~ priorityFilterChange() \\Change state.byPriority
}

## Selector \\Get functions that read state from store

searchTextFilterSelector() \\Read state.filter.byText
statusFilterSelector() \\Read state.filter.byStatus
priorityFilterSelector() \\Read state.filter.byPriority
todoListSelector() \\Read state.todoList
todoListSelectorWithFilter() \\Read state.dotoList after passing through 3 filters above

## Store \\A global storage used for interchange between components of the website

Confire store by adding slices' reducer
