<template>
    <div class="container">
        <nav>
            <div>
                <span
                    :class="{ active: active === tabs[0] }"
                    @click="_onActive(tabs[0])"
                    >{{ tabs[0] }}</span
                >
                |
                <span
                    :class="{ active: active === tabs[1] }"
                    @click="_onActive(tabs[1])"
                    >{{ tabs[1] }}</span
                >
            </div>
        </nav>
        <main>
            <slot :active="active"></slot>
        </main>
    </div>
</template>

<script>
export default {
    name: "overallayout",
    data() {
        return {
            tabs: ["Home", "About"],
            active: "Home",
        };
    },
    methods: {
        _onActive(tab) {
            this.active = tab;
        },
    },
    mounted() {
        this.$emit("onNavigate", this.active);
    },
};
</script>

<style scoped>
.container {
    padding: 3rem;
}

nav {
    margin-bottom: 2rem;
}

nav div {
    text-align: center;
    font-size: 1.5rem;
}

nav div span {
    text-decoration: underline;
    font-weight: 700;
    cursor: pointer;
}

.active {
    color: green;
}

main {
    border: 2px solid #333;
    border-radius: 4px;
    padding: 2rem 4rem;
    max-width: 756px;
    margin: auto;
    text-align: left;
}
</style>
