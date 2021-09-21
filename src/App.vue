<template>
  <div id="app">
  <!-- Loader starts-->
    <vue-ins-progress-bar></vue-ins-progress-bar>
<!--    <div class="loader-wrapper" :class="{'loderhide' : !show }">-->
<!--      <div class="loader-index">-->
<!--        <span></span>-->
<!--      </div>-->
<!--    </div>-->
  <!-- Loader ends-->

    <!--<Main/>-->
    <div class="overlayWhole" v-if="loadingPage"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo() {
    return {
      title: "Yog Prerna",
      meta: [
        { name: 'description', content:  'Yog Prerna Description'},
        { property: 'og:title', content: "Yog Prerna Description Title"},
        { property: 'og:site_name', content: 'Yog Prerna Description Sitem Name'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  },
  data(){
    return{
      show: true,
      loadingPage: false
    }
  },
  mounted() {
      this.timeOut();
    },
  watch:{
    '$store.getters.getLoading': function() {
      if(this.$store.getters.getLoading){
        this.loadingPage = true
        this.$insProgress.start()
      }else{
        this.loadingPage = false
        this.$insProgress.finish()
      }
    }
  },
  methods:{
      timeOut(){
            var self = this;
            setTimeout(function(){
                self.show = false;
            }, 1000);
      },
    }
  }
</script>

<style lang="scss" scoped>
.loader-wrapper.loderhide {
  display: none;
}
  .overlayWhole{
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    z-index: 999;
    color: black;
    background: #0a0a0a30;
    position: fixed;
  }
</style>
