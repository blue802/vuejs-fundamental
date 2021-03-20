<template>
    <div id="app">
        <overallayout @onNavigate="_onNavigate">
            <template slot-scope="{ active }">
                <todo-list v-if="active === 'Home'" />
                <about v-else />
            </template>
        </overallayout>
    </div>
</template>

<script>
import Overallayout from "./components/Overallayout";
import TodoList from "./components/TodoList";
import About from "./components/About";

export default {
    name: "App",
    data() {
        return { active: null };
    },
    components: {
        Overallayout,
        TodoList,
        About,
    },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: "Caveat", cursive;
    text-align: center;
    color: #2c3e50;
}
</style>
