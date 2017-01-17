<template>
    <div>
        <button v-if="editable == true" type="button" @click="deleteSingleComp" class="btn btn-danger btn-delete glyphicon glyphicon-remove"></button>
        <section id="circlePreview" class="flex">
            <header>
                <h2 v-bind:contenteditable="editable">{{dataProps.title}}</h2>
                <p v-bind:contenteditable="editable">{{dataProps.content}}</p>
                component index for debug: {{componentIdx}}
            </header>
            <span class="image-container"><img src="../../assets/images/pic01.jpg" alt=""></span>
        </section>
    </div>
</template>
<script>
    export default  {
    name    : 'circlePreview',
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
        deleteSingleComp() {
            let type = this.componentIdx;
            this.$store.dispatch('deleteComp', type);
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
    .btn-delete {
        border-radius: 30%;
        float: right;
    &:focus,
    &.focus {
        outline: 0;
    }
    } 
</style>

