<template>
    <div v-bind:id="componentIdx">
        <button v-if="editable" type="button" @click="deleteSingleComp" class="btn btn-danger btn-delete glyphicon glyphicon-remove"></button>
        <section id="circlePreview" class="flex">
            <header>
                <h2 v-bind:contenteditable="editable" @keyup="updateCompProps($event,'title')">{{dataProps.title}}</h2>
                <p v-bind:contenteditable="editable" @keyup="updateCompProps($event,'content')">{{dataProps.content}}</p>
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
        updateCompProps($event,propToChange) {
            let textValue = $event.target.outerText;
            let compIdx = this.componentIdx;
            this.$store.dispatch('updateProps', {compIdx, textValue, propToChange});
        },
        deleteSingleComp() {
            let that = this;
            swal({
                title: "Are you sure?",
                text: "This will delete " + '"' +that.dataProps.title + '"' + " component.",
                showCancelButton: true,
                confirmButtonColor: "#EB6429",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
                },
                function(isConfirm){
                if (isConfirm) {
                    let type = that.componentIdx;
                    that.$store.dispatch('deleteComp', type);
                }
            });
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
        margin: 10px;
        border-radius: 30%;
        float: right;
    &:focus,
    &.focus {
        outline: 0;
    }
    } 

</style>

