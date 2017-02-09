<template>
<li><router-link :to="{path:`#`+componentIdx}">{{dataProps.title}}</router-link></li>
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
        computed: {
            publishedSiteIdhref() {
            return this.$route.params.id;
            },
        },
        methods: {
            navTo() {
                let publishedSiteId = this.$route.params.id;
                this.$router.push('/published/'+publishedSiteId+'/#'+this.componentIdx);
            }
        }
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

