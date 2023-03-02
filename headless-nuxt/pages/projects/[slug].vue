<template>
    <div v-if="project">
        <h1>{{ project.name }}</h1>
        <img :src="project.image.url" alt="" width="500">
        <h3>{{ project.description }}</h3>
        <div v-for="technologie in project.technologies">
            <img :src="technologie.image.url" alt="" width="100">
        </div>
        <a :href="project.lien">Lien du site</a>
        <button onclick="history.back();">Retour</button>

    </div>
</template>
<script setup>
const {findOne} = useStrapi()
const route = useRoute()
const project = ref()

onMounted( async() => {
    project.value = await findOne(`projets?filters[slug]'=${route.params.slug}&populate=deep`)
    project.value = project.value.data[0]
    console.log(project.value)
})
</script>