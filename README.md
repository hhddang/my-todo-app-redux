# Desciption

This todo app uses

- local storage to save todo list (Read more below)
- redux toolkit for interchange between components (Read more below)
- styled-components for quickly styling

Set up by following flow:

1. DEFINE redux include \<store>, \<slice>s, and \<selector>s
2. CALL \<store> at top-level component with Provider
3. USE \<selector> to get data and dispatch(action) to set data from \<store>

Note: 
- \<slice> includes state and reducer
- Redux toolkit self-defines actions for \<slice> and names they after reducers' name
- \<store> combines \<slice>s and manages states and preducers from \<slice>s


# Components
> Components at abstract level NOT coding-level

<pre>
todo : { name:String, done:Boolean, urgent:Boolean }
</pre>

<pre>
todoList : [todo]
</pre>

<pre>
filter : {
   byText: String,
   byStatus: "done" || "still" || "all" <=> todo.done == True || False || both,
   byPriority: "urgent" || "ordinary" || "all" <=> todo.urgent == True || False || both,
} => todoList
</pre>

# Local storage

<pre>
key = "todoList"
value = stringtify(todoList)
</pre>

Read local storage when starting web app\
Save to local storage whenever todoList changes

# Redux toolkit

- Define slices
- Write selectors
- Add slices to store

## Slices
> Define seperated slices of root reducer

### todoListSlice

<pre>
initState = readFromLocalStorage() || []
reducer : {
   addTodo() //Push new todo into todoList
   toggleTodoStatus() //Change a todo.done from todoList
}
</pre>

### filterSlice

<pre>
initState = {
   byText: "",
   byStatus: "all"
   byPriority: "all"
}
reducer : {
   searchFilterChange() //Change state.byText
   statusFilterChange() //Change state.byStatus
   priorityFilterChange() //Change state.byPriority
}
</pre>

## Selectors
> Get functions that read state from store

<pre>
searchTextFilterSelector() //Read state.filter.byText
statusFilterSelector() //Read state.filter.byStatus
priorityFilterSelector() //Read state.filter.byPriority
todoListSelector() //Read state.todoList
todoListSelectorWithFilter() //Read state.dotoList after passing through 3 filters above
</pre>

## Store
> A global storage used for interchange between components of the website

Confire store by adding slices' reducer
