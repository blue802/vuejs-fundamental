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
export default {
  name: "TodoCreater",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = { name: this.value, status: false };
      this.$emit("handleAdd", newTodo);
      this.value = "";
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
