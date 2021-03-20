<template>
    <div class="todo-container">
        <h2>Todo List</h2>
        <div class="create-todo">
            <input
                type="text"
                v-model="value"
                @keyup.enter="addTodo(value)"
                placeholder="What needs to be done?"
            />
            <span @click="addTodo(value)"
                ><i class="fas fa-chevron-right"></i
            ></span>
        </div>
        <div class="todo-list">
            <div v-for="todo in todos" :key="todo.id">
                <input type="checkbox" :name="todo" :id="'todo' + todo.id" />
                <label :for="'todo' + todo.id">{{ todo.title }}</label>
                <button class="btn btn--edit" @click="editTodo(todo)">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn--remove" @click="removeTodo(todo.id)">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "todo-list",
    data() {
        return {
            value: "",
            selectedTodoId: null,
            todos: [
                { id: "1", title: "Do homework" },
                { id: "2", title: "Learn VueX" },
                { id: "3", title: "Speaking English" },
                { id: "4", title: "Relaxing" },
            ],
        };
    },
    methods: {
        addTodo(title) {
            if (!this.selectedTodoId && title) {
                const newTodo = {
                    id: String(this.todos.length + 1),
                    title,
                };
                this.todos.push(newTodo);
            } else {
                for (const todo of this.todos) {
                    if (todo.id === this.selectedTodoId) {
                        todo.title = title;
                        break;
                    }
                }
            }
            this.value = "";
        },
        removeTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
        editTodo(todo) {
            this.value = todo.title;
            this.selectedTodoId = todo.id;
        },
    },
};
</script>

<style scoped>
.todo-container h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
}

.create-todo {
    display: flex;
    margin-bottom: 1.5rem;
}

.create-todo input {
    border: none;
    border-bottom: 2px solid green;
    color: green;
    width: 100%;
    outline: none;
    font-size: 18px;
    font-family: inherit;
}

.create-todo span {
    margin-left: 1rem;
    padding: 0.8rem 1.2rem;
    background-color: #f3f3f3;
    font-size: 16px;
    color: green;
    cursor: pointer;
}

.todo-list > div {
    width: 100%;
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
    background-color: green;
}

.btn--remove {
    background-color: red;
}
</style>
