<style>

h1 {
    color: skyblue;
}

</style>

<template>

<div id="app">
    <h1>Bonjour World!</h1>
    <p>{{message}}</p>
    <p>{{selfData}}</p>
</div>

</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            selfData: 'views/app.jsのscriptタグからの挨拶'
        }
    }
}

</script>
