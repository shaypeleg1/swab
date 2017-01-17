<template>
    <div>
        <button v-if="editable == true" type="button" @click="deleteSingleComp" class="btn btn-danger btn-delete glyphicon glyphicon-remove"></button>
        <section id="mainArticlePreview" class="flex">
            <div class="content">
                <header>
                    <h1 v-bind:contenteditable="editable" @keyup="updateCompTitle($event)">{{dataProps.title}}</h1>
                    <p v-bind:contenteditable="editable">{{dataProps.subtitle}}</p>
                    component index for debug: {{componentIdx}}
                </header>
                <p v-bind:contenteditable="editable" class="txt-section">{{dataProps.content}}</p>
                <ul class="btn-on-list">
                    <li><a v-bind:contenteditable="editable" href="#" class="button-orange button-text">{{dataProps.button}}</a></li>
                </ul>
            </div>
            <span class="image-container">
                <img src="../../assets/images/pic10.jpg" alt="">
            </span>
        </section>
    </div>
</template>

<script>
// import  from ''
    export default  {
    name    : 'mainArticlePreview',
    props   : {
        editable: '',
        componentIdx: {
            require: true,
            type:Number
        },
        dataProps: {
        type    : Object,
        required: true
        }
    },
    methods: {
        updateCompTitle($event) {
            let textValue = $event.target.outerText;
            let compIdx = this.componentIdx;
            this.$store.dispatch('updatePropsTitle', {compIdx, textValue});
        },
        deleteSingleComp() {
            let type = this.componentIdx;
            this.$store.dispatch('deleteComp', type);
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
    .btn-delete {
        border-radius: 30%;
        float: right;
    &:focus,
    &.focus {
        outline: 0;
    }
    } 
</style>

