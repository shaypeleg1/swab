<template>
    <section id="mainArticlePreview" class="flex">
        <div class="content">
            <header>
                <h1>{{item.props.title}}</h1>
                <p>{{item.props.subtitle}}</p>
            </header>
            <p class="txt-section">{{item.props.content}}</p>
            <ul class="btn-on-list">
                <li><a href="#" class="button-orange button-text">{{item.props.button}}</a></li>
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
    computed: {
        function imgSrc() {
            return item.props.img_src;
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

