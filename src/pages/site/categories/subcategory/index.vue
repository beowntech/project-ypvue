<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 project-list">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-12 p-0">
                                <b-tabs content-class="mt-3">
                                    <b-tab active>
                                        <template v-slot:title>
                                            <feather type="target"></feather>
                                            All
                                        </template>
                                        <b-card-text>
                                            <div class="col-sm-12 p-0">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row" v-if="categories.all.length != 0">
                                                            <div class="col-xl-4 col-lg-6"
                                                                 v-for="(project,index) in categories.all" :key="index"
                                                                 :class="index < 3 ? 'mb-4' : ''">
                                                                <div class="project-box">
                                                                    <span class="badge"
                                                                          :class="'badge-'+statusColor(project.status)">{{ statusName(project.status) }}</span>
                                                                    <h6>{{ project.name }}</h6>
                                                                    <div class="media">
                                                                        <!--                                                                        <img v-if="project.image != null" class="img-20 mr-1 rounded-circle" :src='getImgUrl("user/3.jpg")' alt="" title="">-->
                                                                        <!--                                                                        <i v-else-if="project.icon != null" :class="'img-20 mr-1 rounded-circle fa fa-'+project.icon"></i>-->
                                                                        <div class="media-body">
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                    <!--                                                                    <p>{{ project.description }}</p>-->
                                                                    <div class="customers">
                                                                        <ul>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <p class="f-12"
                                                                                   v-if="project.children.length > 0">
                                                                                    +{{project.children.length}} Sub
                                                                                    Categories</p>
                                                                                <p class="f-12" v-else>No Sub
                                                                                    Categories</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div style="bottom: 20px !important;top: auto !important;position: absolute;right: 30px;">
                                                                    <ul class="actionButtons">
                                                                        <li>
                                                                            <span @click="selectedCategoryId = project.id,updateCategory(project.id)"
                                                                                  class="badge badge-info float-right">
                                                                          <i class="fa fa-edit font-light"
                                                                             style="font-size: 14px;margin-right: 2px!important;"
                                                                             ></i>
                                                                </span>
                                                                        </li>
                                                                        <li>
                                                                            <span @click="selectedCategoryId = project.id"
                                                                                  class="badge badge-danger float-right">
                                                                    <i class="fa fa-trash font-light"
                                                                       style="font-size: 14px;margin-right: 2px!important;"
                                                                       v-b-modal.delete_category></i>
                                                                </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row" v-else>
                                                            <div class="col-xl-4 col-lg-6">
                                                                <div class="project-box" style="    cursor: pointer;">
                                                                    <span class="badge" :class="'badge-success'">No Sub Category</span>
                                                                    <h6>No SubCategory</h6>
                                                                    <div class="media">
                                                                        <!--                                                                        <img v-if="project.image != null" class="img-20 mr-1 rounded-circle" :src='getImgUrl("user/3.jpg")' alt="" title="">-->
                                                                        <!--                                                                        <i v-else-if="project.icon != null" :class="'img-20 mr-1 rounded-circle fa fa-'+project.icon"></i>-->
                                                                        <div class="media-body">
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                    <!--                                                                    <p>{{ project.description }}</p>-->
                                                                    <div class="customers">
                                                                        <ul>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <p class="f-12" >No Sub
                                                                                    Categories</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template v-slot:title>
                                            <feather type="check"></feather>
                                            Active
                                        </template>
                                        <b-card-text>
                                            <div class="col-sm-12 p-0">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div v-if="categories.active.length != 0" class="row">
                                                            <div class="col-xl-4 col-lg-6"
                                                                 v-for="(project,index) in categories.active"
                                                                 :key="index" :class="index < 3 ? 'mb-4' : ''">
                                                                <div class="project-box">
                                                                    <span class="badge"
                                                                          :class="'badge-'+statusColor(project.status)">{{ statusName(project.status) }}</span>
                                                                    <h6>{{ project.name }}</h6>
                                                                    <div class="media">
                                                                        <!--                                                                        <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title="">-->
                                                                        <div class="media-body">
                                                                            <!--                                                                            <p>{{ project.parent }}</p>-->
                                                                        </div>
                                                                    </div>
                                                                    <!--                                                                    <p>{{ project.description }}</p>-->
                                                                    <div class="customers">
                                                                        <ul>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <p class="f-12"
                                                                                   v-if="project.children.length > 0">
                                                                                    +{{project.children.length}} Sub
                                                                                    Categories</p>
                                                                                <p class="f-12" v-else>No Sub
                                                                                    Categories</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div style="bottom: 20px !important;top: auto !important;position: absolute;right: 30px;">
                                                                    <ul class="actionButtons">
                                                                        <li>
                                                                            <span @click="selectedCategoryId = project.id,updateCategory(project.id)"
                                                                                  class="badge badge-info float-right">
                                                                          <i class="fa fa-edit font-light"
                                                                             style="font-size: 14px;margin-right: 2px!important;"
                                                                             v-b-modal.delete_category></i>
                                                                </span>
                                                                        </li>
                                                                        <li>
                                                                            <span @click="selectedCategoryId = project.id"
                                                                                  class="badge badge-danger float-right">
                                                                    <i class="fa fa-trash font-light"
                                                                       style="font-size: 14px;margin-right: 2px!important;"
                                                                       v-b-modal.delete_category></i>
                                                                </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row" v-else>
                                                            <div class="col-xl-4 col-lg-6">
                                                                <div class="project-box" style="    cursor: pointer;">
                                                                    <span class="badge" :class="'badge-success'">No Sub Category</span>
                                                                    <h6>No SubCategory</h6>
                                                                    <div class="media">
                                                                        <!--                                                                        <img v-if="project.image != null" class="img-20 mr-1 rounded-circle" :src='getImgUrl("user/3.jpg")' alt="" title="">-->
                                                                        <!--                                                                        <i v-else-if="project.icon != null" :class="'img-20 mr-1 rounded-circle fa fa-'+project.icon"></i>-->
                                                                        <div class="media-body">
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                    <!--                                                                    <p>{{ project.description }}</p>-->
                                                                    <div class="customers">
                                                                        <ul>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <p class="f-12" >No Sub
                                                                                    Categories</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template v-slot:title>
                                            <feather type="alert-octagon"></feather>
                                            Terminated
                                        </template>
                                        <b-card-text>
                                            <div class="col-sm-12 p-0">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div v-if="categories.terminated.length != 0" class="row">
                                                            <div class="col-xl-4 col-lg-6"
                                                                 v-for="(project,index) in categories.terminated"
                                                                 :key="index" :class="index < 3 ? 'mb-4' : ''">
                                                                <div class="project-box">
                                                                    <span class="badge"
                                                                          :class="'badge-'+statusColor(project.status)">{{ statusName(project.status) }}</span>
                                                                    <h6>{{ project.name }}</h6>
                                                                    <div class="media">
                                                                        <!--                                                                        <img class="img-20 mr-1 rounded-circle" :src='getImgUrl(project.img)' alt="" title="">-->
                                                                        <div class="media-body">
                                                                            <!--                                                                            <p>{{ project.parent }}</p>-->
                                                                        </div>
                                                                    </div>
                                                                    <!--                                                                    <p>{{ project.description }}</p>-->
                                                                    <div class="customers">
                                                                        <ul>
                                                                            <li class="d-inline-block"  v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block"  v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block"  v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <transition name="bounce">
                                                                                <p class="f-12"
                                                                                   v-if="project.children.length > 0">
                                                                                    +{{project.children.length}} Sub
                                                                                    Categories </p>
                                                                                    <p class="f-12" v-else>No Sub
                                                                                        Categories</p>
                                                                                </transition>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div style="bottom: 20px !important;top: auto !important;position: absolute;right: 30px;">
                                                                    <ul class="actionButtons">
                                                                        <li>
                                                                            <span @click="selectedCategoryId = project.id,updateCategory(project.id)"
                                                                                  class="badge badge-info float-right">
                                                                          <i class="fa fa-edit font-light"
                                                                             style="font-size: 14px;margin-right: 2px!important;"></i>
                                                                </span>
                                                                        </li>
                                                                        <li>
                                                                            <span @click="selectedCategoryId = project.id"
                                                                                  class="badge badge-danger float-right">
                                                                    <i class="fa fa-trash font-light"
                                                                       style="font-size: 14px;margin-right: 2px!important;"
                                                                       v-b-modal.delete_category></i>
                                                                </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row" v-else>
                                                            <div class="col-xl-4 col-lg-6">
                                                                <div class="project-box" style="    cursor: pointer;">
                                                                    <span class="badge" :class="'badge-success'">No Sub Category</span>
                                                                    <h6>No SubCategory</h6>
                                                                    <div class="media">
                                                                        <!--                                                                        <img v-if="project.image != null" class="img-20 mr-1 rounded-circle" :src='getImgUrl("user/3.jpg")' alt="" title="">-->
                                                                        <!--                                                                        <i v-else-if="project.icon != null" :class="'img-20 mr-1 rounded-circle fa fa-'+project.icon"></i>-->
                                                                        <div class="media-body">
                                                                            <p></p>
                                                                        </div>
                                                                    </div>
                                                                    <!--                                                                    <p>{{ project.description }}</p>-->
                                                                    <div class="customers">
                                                                        <ul>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <p class="f-12" >No Sub
                                                                                    Categories</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </div>
                            <div class="col-sm-6 create-project-btn">
                                <div class="text-right">
                                    <div class="form-group mb-0 mr-0"></div>
                                    <a class="btn btn-primary" @click="openModal">
                                        <i data-feather="plus-square"> </i>Create New Category</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->

        <!-- Delete Sub Category -->
        <b-modal id="delete_sub_category"
                 @ok="deleteCategory"
                 centered title="Delete Category"
                 ok-variant="danger"
                 cancel-variant="success"
                 ok-title="Delete" class="theme-modal">
            <p>Are you sure you want to delete this Category?</p>
        </b-modal>
    </div>
</template>

<script>
    // import { mapState } from "vuex";
    import axios from 'axios'
    import apiUrls from "../../../../_helpers/apiUrls";
    // import CKEditor from '@ckeditor/ckeditor5-vue';
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    // import Multiselect from 'vue-multiselect'

    export default {
        props: ['selectedMain','added','selectedCatg'],
        data() {
            return {
                categories: [],
                categoryDescription: "",
                categoryImage: null,
                categoryName: "",
                categoryIcon: "",
                selectedCategoryId: null,
                // editor: ClassicEditor,
            }
        },
        watch:{
          added: function () {
              this.getSubCategory()
          }
        },
        components: {
            // Multiselect,
            // ckeditor: CKEditor.component
        },
        methods: {
            addCategory() {
                let formData = new FormData()
                if (this.categoryImage != null) {
                    formData.append('image', this.categoryImage)
                }
                formData.append('icon', this.categoryIcon)
                formData.append('name', this.categoryName)
                formData.append('description', this.categoryDescription)
                axios.post(apiUrls.addCategory, formData)
                    .then((res) => {
                        this.categoryIcon = null
                        this.categoryImage = null
                        this.categoryDescription = ''
                        this.categoryName = ''
                        this.getSubCategory()
                        console.log(res)
                    }).catch(() => {

                })
            },
            updateCategory(id){
                this.$emit('update:selectedCatg',id)
               // this.selectedCatg = id
                this.$emit('update')
            },
            deleteCategory() {
                axios.post(apiUrls.deleteCategory, {
                    id: this.selectedCategoryId
                }).then((res) => {
                    console.log(res)
                    this.getSubCategory()
                    // this.alert()
                }).catch(() => {

                })
            },
            getSubCategory() {
                console.log(this.selectedMain)
                axios.get(apiUrls.getSubCategory + '?id=' + this.selectedMain[0].id).then((res) => {
                    console.log(res.data)
                    this.categories = res.data
                    this.$store.commit('setLoading', false)
                }).catch(() => {

                })
            },
            statusColor(val) {
                if (val === 1) {
                    return 'success'
                } else if (val === 2) {
                    return 'danger'
                }
            },
            statusName(val) {
                if (val === 1) {
                    return 'Active'
                } else if (val === 2) {
                    return 'Terminated'
                }
            },
            openModal(){
                this.$emit('addNew')
            },
            getImgUrl(path) {
                return require('@/assets/images/' + path)
            },
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
            this.getSubCategory()
        }
    }
</script>
<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    .actionButtons li {
        display: inline-flex;
        margin-right: 5px;
    }
</style>
