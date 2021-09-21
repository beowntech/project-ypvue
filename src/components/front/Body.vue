<template>
  <div>

    <div class="page-wrapper horizontal-wrapper">
      <div class="page-header " style="position: initial!important;" :class="{ close_icon:!togglesidebar }">
        <Header @clicked="sidebar_toggle" />
      </div>
      <div class="page-body-wrapper horizontal_sidebar">
<!--        <div class="sidebar-wrapper" :class="[{ close_icon : !togglesidebar }, layout.settings.sidebar_backround]" :sidebar-layout="layout.settings.sidebar_setting">-->
<!--          <Sidebar @clicked="sidebar_toggle" />-->
<!--        </div>-->
        <div style="margin-top: 0!important;">
          <transition name="fadeIn" enter-active-class="animated fadeIn">
           <router-view class="view"></router-view>
          </transition>
        </div>
        <Footer/>
      </div>
<!--      <Customizer/>-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from './header'
import Sidebar from './../sidebar'
import Footer from './footer'
// import Customizer from './customizer'

export default {
  name: 'mainpage',
  data(){
    return{
      mobileheader_toggle_var: false,
      sidebar_toggle_var: false,
      horizontal_Sidebar: true,
      resized:false,
    }
  },
  // props:['sidebar_toggle_var'],
  components:{
    Header,
    Sidebar,
    Footer,
    // Customizer
  },
  computed: {
    ...mapState({
      menuItems: state => state.menu.data,
      layout: state => state.layout.layout,
      togglesidebar: (state) => state.menu.togglesidebar,
    })
  },
  created(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
    this.resized = this.sidebar_toggle_var;
    this.$store.dispatch('layout/set')
  },
  watch:{
    '$route' (){
      this.menuItems.filter(items => {
        if (items.path === this.$route.path)
          this.$store.dispatch('menu/setActiveRoute', items)
        if (!items.children) return false
        items.children.filter(subItems => {
          if (subItems.path === this.$route.path)
            this.$store.dispatch('menu/setActiveRoute', subItems)
          if (!subItems.children) return false
          subItems.children.filter(subSubItems => {
            if (subSubItems.path === this.$route.path)
              this.$store.dispatch('menu/setActiveRoute', subSubItems)
          })
        })
      })
    },
    sidebar_toggle_var: function (){
      this.resized = (this.width <= 991) ? !this.sidebar_toggle_var : this.sidebar_toggle_var      
    }
  },
  methods:{
    sidebar_toggle(value) {
      this.sidebar_toggle_var = !value
    },
    mobiletoggle_toggle(value) {
      this.mobileheader_toggle_var = value
    },
    handleResize() {
      this.$store.dispatch("menu/resizetoggle");
    }
  }
}
</script>

<style scoped>
  .progressing{
      border-bottom-color: transparent;
      animation: 1s progressing linear infinite;
      position: relative;
  }

  .seo-button {
      background-image: -webkit-gradient(linear, left top, right top, from(var(--theme-deafult)), to(#91d468));
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      position: relative;
      border: 0px !important;
      -webkit-box-shadow: 0px 0px 12px 0px rgb(115, 102, 255, 0.35) !important;
      box-shadow: 0px 0px 12px 0px rgb(115, 102, 255, 0.35) !important;
      margin-bottom: 10px;
      position: fixed;
      right: 0;
      top: 105px;
  }

</style>
