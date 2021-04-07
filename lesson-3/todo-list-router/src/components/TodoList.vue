<template>
  <div class="todo-list">
    <div v-for="todo in todos" :key="todo.id">
      <input
        type="checkbox"
        :name="todo"
        :id="todo.id"
        v-model="todo.status"
        @click="editTodo(todo.id)"
      />
      <label :for="todo.id" :class="[todo.status ? 'checked' : '']">
        <template v-if="isEditMode === todo.id">
          <input
            type="text"
            :ref="todo.id"
            v-model="todo.name"
            @blur="editTodo(todo.id), turnOffEditMode()"
            @keyup.enter="editTodo(todo.id), turnOffEditMode()"
          />
        </template>
        <template v-else>{{ todo.name }}</template>
      </label>
      <button class="btn btn--edit" @click="turnOnEditMode(todo.id)">
        <i class="fas fa-edit"></i>
      </button>
      <button class="btn btn--remove" @click="removeTodo(todo.id)">
        <i class="fas fa-minus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  props: ["todos"],
  data() {
    return {
      isEditMode: false,
    };
  },
  methods: {
    async removeTodo(id) {
      try {
        await axios.delete(
          `https://606b122af8678400172e585f.mockapi.io/todoItem/${id}`
        );
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (error) {
        alert(error);
      }
    },
    async editTodo(id) {
      const newTodo = this.todos.find((todo) => todo.id === id);
      try {
        await axios.put(
          `https://606b122af8678400172e585f.mockapi.io/todoItem/${id}`,
          newTodo
        );
        await axios.put(
          `https://606b122af8678400172e585f.mockapi.io/todoItem/${id}`,
          newTodo
        );
      } catch (error) {
        alert(error);
      }
    },
    turnOnEditMode(id) {
      this.isEditMode = id;
    },
    turnOffEditMode() {
      this.isEditMode = false;
    },
  },
};
</script>

<style>
.todo-list > div {
  display: flex;
  font-size: 1.25rem;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: aliceblue;
  padding: 0.5rem;
}

.todo-list > div > label {
  flex: 1;
  margin: 0;
}

.todo-list > div > label,
input {
  cursor: pointer;
}

input[type="checkbox"] {
  margin: 8px;
}

.todo-list > div > label > input {
  border: none;
  color: #42b983;
  font-size: inherit;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-family: inherit;
}

.btn {
  padding: 0.5rem;
  margin: 0 0.25rem;
  border: none;
  color: white;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
}

.btn--edit {
  background-color: #42b983;
}

.btn--remove {
  background-color: red;
}

.checked {
  text-decoration: line-through;
}
</style>
