<template>
  <section id="shortArticlePreview">
    <a href="#" class="image-container"><img src="../../assets/images/pic02.jpg" alt=""></a>
    <h3>{{item.value}}</h3>
    The type of thie component: {{item.type}}
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
  }
</style>
