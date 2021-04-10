<template>
  <div class="todo-container">
    <h2>Todo List</h2>
    <todo-creater @handleAdd="addTodo" />
    <todo-list
      :todosProps="todos"
      @handleEdit="editTodo"
      @handleRemove="removeTodo"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TodoCreater from "../components/TodoCreater.vue";
import TodoList from "../components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoCreater,
    TodoList,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    ...mapActions(["fetchTodos", "addTodo", "editTodo", "removeTodo"]),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todo-container h2 {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
}
</style>
