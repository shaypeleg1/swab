<template>
    <div v-bind:id="componentIdx">
        <button v-if="editable" type="button" @click="deleteSingleComp" class="btn btn-danger btn-delete glyphicon glyphicon-remove"></button>
        <section id="shortArticlePreview">
            <a href="#" class="image-container"><img src="../../assets/images/pic02.jpg" alt=""></a>
            <h3 v-bind:contenteditable="editable" @keyup="updateCompProps($event,'title')">{{dataProps.title}}</h3>
            <p v-bind:contenteditable="editable" @keyup="updateCompProps($event,'content')">{{dataProps.content}}</p>
            <ul class="btn-on-list">
            <li><a v-bind:contenteditable="editable" href="#" class="button-orange button-text" @keyup="updateCompProps($event,'button')">{{dataProps.button}}</a></li>
            </ul>
        </section>
    </div>
</template>
<script>
    export default  {
    name    : 'shortArticlePreview',
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
            let type = this.componentIdx;
            this.$store.dispatch('deleteComp', type);
        }
    }
    }
</script>
<style scoped lang="scss">
  #shortArticlePreview {
      vertical-align: baseline;
      width: 430px;
      .image-container {
          width: 400px;
          object-fit: cover; 
          display: block;
          margin: 0 0 2em 0;
          overflow: hidden;
          padding: 0;
          flex-shrink: 0;
          flex-grow: 0;
          border-radius: 0.375em;
          transition: transform 0.3s;
      }
      .image-container:hover {
          transform: scale(1.075);
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
