<template>
  <section id="shortArticlePreview">
    <a href="#" class="image-container"><img src="../../assets/images/pic02.jpg" alt=""></a>
    <h3>{{item.value}}</h3>
    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla
      amet lorem feugiat tempus aliquam.</p>
    <ul class="btn-on-list">
      <li><a href="#" class="button-orange button-text">More</a></li>
    </ul>
  </section>
</template>
<script>
    export default{
      name:'shortArticlePreview',
        props:{

        },
        data(){

        }
    }
</script>
<style src="./swab-component.scss"></style>
