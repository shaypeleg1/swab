<template>
  <li><a v-bind:href="'#'+componentIdx">{{dataProps.title}}</a></li>

</template>

<script>
    export default  {
        name    : 'navSections',
        props   : {
            componentIdx: {
                require: false,
                type:Number
            },
            dataProps: {
            type    : Object,
            required: false
            }
        },
    }
</script>
<style scoped lang="scss">

.navbar-inverse .navbar-nav > li > a {
  color: white;
  font-weight: bold;
}
.navbar-inverse .navbar-nav > li > a:hover {
color: #EB6429;
}
</style>

