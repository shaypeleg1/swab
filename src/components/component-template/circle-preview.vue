<template>
    <section id="circlePreview" class="flex">
        <header>
            <h2>{{dataProps.title}}</h2>
            <p>{{dataProps.content}}</p>
        </header>
        <span class="image-container"><img src="../../assets/images/pic01.jpg" alt=""></span>
    </section>
</template>
<script>
    export default  {
    name    : 'circlePreview',
    props   : {
        dataProps: {
        type    : Object,
        required: true
        }
    }
    }
</script>

<style scoped lang="scss">
    #circlePreview {
        text-align: right;
        .image-container {
            margin-left: 2em;
            position: relative;
            overflow: hidden;
            width: 50%;
        } img {
            overflow: hidden;
            border-radius: 100%;
            border-top-left-radius: 100%;
            border-top-right-radius: 100%;
            border-bottom-right-radius: 100%;
            border-bottom-left-radius: 100%; 
        }
}
</style>

