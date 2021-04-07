<template>
  <div class="todo-container">
    <h2>Todo List</h2>
    <todo-creater :todos="todos" />
    <todo-list :todos="todos" />
  </div>
</template>

<script>
import axios from "axios";
import TodoCreater from "../components/TodoCreater.vue";
import TodoList from "../components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoCreater,
    TodoList,
  },
  data() {
    return {
      todos: [],
      loading: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const res = await axios.get(
          "https://606b122af8678400172e585f.mockapi.io/todoItem"
        );
        this.todos = res.data;
        this.loading = false;
      } catch (error) {
        alert(error);
      }
    },
  },
  mounted() {
    this.fetchData();
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
