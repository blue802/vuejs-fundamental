import axios from "axios";

export default {
  async fetchTodos({ commit }) {
    try {
      const res = await axios.get(
        "https://606b122af8678400172e585f.mockapi.io/todoItem"
      );
      commit("fetchTodos", res.data);
    } catch (error) {
      alert(error);
    }
  },
  async addTodo({ commit }, newTodo) {
    try {
      const res = await axios.post(
        "https://606b122af8678400172e585f.mockapi.io/todoItem",
        newTodo
      );
      commit("addTodo", res.data);
    } catch (error) {
      alert(error);
    }
  },
  async editTodo({ commit }, todo) {
    try {
      const res = await axios.put(
        `https://606b122af8678400172e585f.mockapi.io/todoItem/${todo.id}`,
        todo
      );
      commit("editTodo", res.data);
    } catch (error) {
      alert(error);
    }
  },
  async removeTodo({ commit }, todo) {
    try {
      const res = await axios.delete(
        `https://606b122af8678400172e585f.mockapi.io/todoItem/${todo.id}`
      );
      commit("removeTodo", res.data);
    } catch (error) {
      alert(error);
    }
  },
};
