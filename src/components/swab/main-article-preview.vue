<template>
    <section id="mainArticlePreview" class="flex">
        <div class="content">
            <header>
                <h1>{{item.value}}<br> by Vue.js</h1>
                The type of thie component: {{item.type}}
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

<style scoped lang="scss">
    .content {
        float:left;
        width: 50%;
        flex-shrink: 1;
        flex-grow: 1;
    }
    #mainArticlePreview {
        margin: auto;
        .image-container {
            // height: 80px;
            width: 400px;
            object-fit: cover;
            float: right;    
            margin: 0 0 2em 4em;
            flex-shrink: 0;
            flex-grow: 0;
            border-radius: 0.375em;
        }
    }
    .btn-on-list {
        cursor: default;
        list-style: none;
        padding-left: 0;
        margin-top: 5px;
    }
    .button-text {
        font-size: 1em;
        height: 3.65em;
        line-height: 3.65em;
    }
    .button-orange {
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        background-color: transparent;
        border-radius: 0.375em;
        border: 0;
        box-shadow: inset 0 0 0 2px #f56a6a;
        color: #f56a6a !important;
        cursor: pointer;
        display: inline-block;
        font-family: "Roboto Slab", serif;
        font-size: 0.8em;
        font-weight: 700;
        height: 3.5em;
        letter-spacing: 0.075em;
        line-height: 3.5em;
        padding: 0 2.25em;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
    }
    .button-orange:hover {
        background-color: rgba(245, 106, 106, 0.05);
    }
    .txt-section {
        margin-bottom: 26px;
    }
    </style>

