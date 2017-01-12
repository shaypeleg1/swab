<template>
    <section id="circlePreview" class="flex">
        <header>
            <h2>{{item.value}}</h2>
            {{item.type}}
            <p>And there are no hoverboards or flying cars.<br> Just apps. Lots of mother flipping apps.</p>
        </header>
        <span class="image-container"><img src="../../assets/images/pic01.jpg" alt=""></span>
    </section>
</template>
<script>
    export default  {
    name    : 'circlePreview',
    props   : {
        item: {
        type    : Object,
        required: true
        }
    }
    }
</script>

<style src="./swab.component.scss" scoped lang="scss"></style>

