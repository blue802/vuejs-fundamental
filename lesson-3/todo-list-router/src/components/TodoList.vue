<template>
  <div class="todo-list">
    <div class="todo" v-for="todo in todos" :key="todo.id">
      <input
        type="checkbox"
        :name="todo"
        :id="todo.id"
        v-model="todo.status"
        @change="editTodo(todo)"
      />
      <label :for="todo.id" :class="[todo.status ? 'checked' : '']">
        <input
          type="text"
          :class="[editModeTodo === todo.id ? 'editMode' : '']"
          :ref="todo.id"
          v-model="todo.name"
          @blur="editTodo(todo), turnOffEditMode()"
          @keyup.enter="editTodo(todo), turnOffEditMode()"
          :disabled="editModeTodo !== todo.id"
        />
      </label>
      <button class="btn btn--edit" @click="toggleEditMode(todo.id)">
        <i class="fas fa-edit"></i>
      </button>
      <button class="btn btn--remove" @click="removeTodo(todo)">
        <i class="fas fa-minus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todosProps"],
  data() {
    return {
      editModeTodo: false,
    };
  },
  computed: {
    todos() {
      return this.todosProps;
    },
  },
  methods: {
    removeTodo(todo) {
      this.$emit("handleRemove", todo);
    },
    editTodo(todo) {
      this.$emit("handleEdit", todo);
    },
    toggleEditMode(id) {
      if (this.editModeTodo === id) {
        this.editModeTodo = false;
      } else {
        this.editModeTodo = id;
      }
      this.$refs[id][0].focus();
    },
    turnOffEditMode() {
      this.editModeTodo = false;
    },
  },
};
</script>

<style>
.todo-list > .todo {
  font-size: 1.25rem;
  align-items: center;
  margin-bottom: 0.5rem;
  background-color: aliceblue;
  padding: 0.5rem;
  display: flex;
}

.todo-list > div > label {
  width: 100%;
  display: flex;
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
  color: inherit;
  font-size: inherit;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-family: inherit;
}

.todo-list > div > label > input.editMode {
  color: #42b983;
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
