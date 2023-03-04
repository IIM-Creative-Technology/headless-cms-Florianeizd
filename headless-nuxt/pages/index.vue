<template>
<body>
<ul>
  <li><a class="active" href="">Home</a></li>
  <li><a href="http://localhost:3000/projects/laravel">Laravel</a></li>
  <li><a href="http://localhost:3000/projects/react">React</a></li>
  <li><a href="http://localhost:3000/projects/todolist">Todolist</a></li>
</ul>

<div style="margin-left:25%;padding:1px 16px;height:1000px;">
    <div v-if="projects">
            <h1>Portfolio</h1>
            <h2>Floriane IZARD</h2>
            <div v-if="types">
                <div><button class="button-56" @click="filterSelection('all')">All</button></div>
                <br>
                <div>
                    <button class="button-56" v-for="projectType in types" @click="filterSelection(projectType)">
                    {{ projectType }}
                    </button>
                </div>
                <br>
            </div>

            <div class="card">
            <div class="container">
                <h4><b><nuxt-link :to="`projects/${project.slug}`" v-for="project in filteredSelection">
                {{ project.name}} <br>
                </nuxt-link></b></h4> 
            </div>
            </div>
        </div>
</div>


</body>

</template>

<script setup>
import "@/assets/css/style.css";

const {find} = useStrapi()
const projects = ref()
const types = ref([])
const activeFilter = ref('all')

const filterSelection = (type) => {
    activeFilter.value = type
}

const filteredSelection = computed(() => {
    if(activeFilter.value === 'all') return projects.value.data
    return projects.value.data.filter(project => project.type === activeFilter.value)
})

onMounted( async() => {
    projects.value = await find('projets', {populate :'deep'})
    types.value = new Set(projects.value.data.map(project => project.type))
})

</script>

<style scoped>


</style>