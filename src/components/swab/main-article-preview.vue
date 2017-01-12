<template>
    <section id="mainArticlePreview" class="flex">
        <div class="content">
            <header>
                <h1>{{item.value}}<br> by Vue.js</h1>
                {{item.type}}
                <p>A free and fully responsive site template</p>
            </header>
            <p class="txt-section">Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer
                mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec
                lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
            <ul class="btn-on-list">
                <li><a href="#" class="button-orange button-text">Learn More</a></li>
            </ul>
        </div>
        <span class="image-container">
            <img src="../../assets/images/pic10.jpg" alt="">
        </span>
    </section>
</template>

<script>
    export default  {
    name    : 'mainArticlePreview',
    props   : {
        item: {
        type    : Object,
        required: true
        }
    }
    }
</script>

<style src="./swab.component.scss" scoped lang="scss"></style>

