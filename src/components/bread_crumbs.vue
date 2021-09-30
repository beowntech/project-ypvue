<template>
    <div>
        <div class="container-fluid">
            <div class="page-title">
                <div class="row">
                    <div class="col-6 d-flex">
                        <div class="row">
                            <div class="col-md-2" v-if="backEnable">
                                <i class="fa fa-arrow-left font-info" style="cursor: pointer;font-size: 23px" @click="resetCategory"></i>
                            </div>
                            <div class="col">
                                <h3 class="d-inline-block">{{title}}</h3>
                            </div>
                        </div>
                        <transition name="fadeIn">
                        <b-button class="bredcumbButton-danger" @click="action"
                                  v-if="closeButton" style="margin: 0">{{ closeTitle }} <i
                                class="fa fa-close"></i></b-button>
                            <b-button class="bredcumbButton"
                                      v-else-if="buttonEnable"
                                      style="margin: 0"
                                      @click="action">{{ buttonTitle }} <i
                                    class="fa fa-plus"></i></b-button>
                        </transition>
                    </div>
                    <div class="col-6">
                        <ol class="breadcrumb pull-right">
                            <li class="breadcrumb-item">
                                <router-link :to="{ path: '/dashboard/dashboard' }">
                                    <feather type="home"></feather>
                                </router-link>
                            </li>
                            <li class="breadcrumb-item" v-if="main">{{main}}</li>
                            <li class="breadcrumb-item active" v-if="title">{{title}}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container-fluid">
          <div class="page-title">
            <div class="row">
              <div class="col-6 d-flex">
                  <h3>{{title}}</h3>

              </div>
              <div class="col-6">
                <Bookmark />
              </div>
            </div>
          </div>
        </div> -->
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                default: 'home'
            },
            main: {
                default: ''
            },
            backEnable: {
                default: false
            },
            closeButton:{
              default: false
            },
            closeTitle:{
                default: ''
            },
            buttonEnable:{
                default: false
            },
            buttonTitle:{
                default: ''
            }
        },
        methods:{
            action(){
              this.$emit('action')
            },
            resetCategory(){
                this.$emit('resetCategory')
            }
        },
        components: {
            // Bookmark,
        }
    }
</script>
<style>
    .bredcumbButton {
        background-image: -webkit-gradient(linear, left top, right top, from(var(--theme-deafult)), to(var(--theme-secondary)));
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        position: relative;
        border: 0px !important;
        -webkit-box-shadow: 0px 0px 12px 0px rgb(115, 102, 255, 0.35) !important;
        box-shadow: 0px 0px 12px 0px rgb(115, 102, 255, 0.35) !important;
        margin-bottom: 10px;
    }
    .bredcumbButton-danger {
        background-image: -webkit-gradient(linear, left top, right top, from(var(--theme-deafult)), to(indianred));
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        position: relative;
        border: 0px !important;
        -webkit-box-shadow: 0px 0px 12px 0px rgb(115, 102, 255, 0.35) !important;
        box-shadow: 0px 0px 12px 0px rgb(115, 102, 255, 0.35) !important;
        margin-bottom: 10px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .progressing{
        border-bottom-color: transparent;
        animation: 1s progressing linear infinite;
        position: relative;
    }
</style>
