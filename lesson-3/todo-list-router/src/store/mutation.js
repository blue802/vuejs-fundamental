const mutations = {
  fetchTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos.unshift(todo);
  },
  editTodo(state, todo) {
    const indexTodo = state.todos.indexOf((item) => item.id === todo.id);
    state.todos.splice(indexTodo, 1, todo);
  },
  removeTodo(state, todo) {
    const indexTodo = state.todos.indexOf(todo);
    state.todos.splice(indexTodo, 1);
  },
};

export default mutations;
