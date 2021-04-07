<template>
  <div class="todo-creater">
    <input
      type="text"
      v-model="value"
      @keyup.enter="addTodo"
      placeholder="What needs to be done?"
      autofocus
    />
    <span @click="addTodo"><i class="fas fa-chevron-right"></i></span>
  </div>
</template>

<script>
import axios from "axios";
import shortid from "shortid";

export default {
  name: "TodoCreater",
  props: ["todos"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    async addTodo() {
      try {
        const newTodo = {
          id: shortid.generate(),
          name: this.value,
          status: false,
        };
        await axios.post(
          "https://606b122af8678400172e585f.mockapi.io/todoItem",
          newTodo
        );
        this.todos.push(newTodo);
        this.value = "";
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
.todo-creater {
  display: flex;
  margin-bottom: 1.5rem;
}

.todo-creater input {
  border: none;
  border-bottom: 2px solid green;
  color: green;
  width: 100%;
  outline: none;
  font-size: 18px;
  font-family: inherit;
}

.todo-creater span {
  margin-left: 1rem;
  padding: 0.8rem 1.2rem;
  background-color: #f3f3f3;
  font-size: 16px;
  color: green;
  cursor: pointer;
}
</style>
