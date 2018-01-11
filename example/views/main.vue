<style>

p {
    color: skyblue;
}

</style>

<template>

<div id="app">
    <p>I am {{otherData}}. </p>
    <p>I like to create {{tnk}} :)&nbsp;&nbsp;</p>
</div>

</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            tnk: 'あ'
        }
    }
}

</script>
