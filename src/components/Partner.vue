<template>
    <img src = {{logo_source}} alt = {{alt_name}}>
</template>

<script>
export default {
    props: ['logo_source', 'alt_name']
}
</script>

<style scoped>
    img {
        width: 32px;
        padding: 0 16px;
    }
</style>