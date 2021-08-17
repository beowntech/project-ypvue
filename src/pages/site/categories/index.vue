<template>
    <div>


        <Breadcrumbs main="Widgets" @resetCategory="selectedCategory = []" :back-enable="selectedCategory.length > 0"
                     :title="selectedCategory.length > 0 ? selectedCategory[0].name:'Categories'"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid" v-if="selectedCategory.length == 0">
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
                                                        <div class="row">
                                                            <div class="col-xl-4 col-lg-6"
                                                                 v-for="(project,index) in categories.all" :key="index"
                                                                 :class="index < 3 ? 'mb-4' : ''">
                                                                <div class="project-box" style="cursor: pointer;"
                                                                     @click="selectCurrentCategory(project.id,project.name)">
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
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <transition name="bounce">
                                                                                    <p class="f-12"
                                                                                       v-if="project.children.length > 0">
                                                                                        +{{project.children.length}} Sub
                                                                                        Categories</p>
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
                                                                            <span
                                                                                  @click="selectedCategoryId = project.id,getCategoryDetail(project.id)"
                                                                                  v-b-modal.update-category
                                                                                  class="badge badge-info float-right">
                                                                          <i class="fa fa-edit font-light"
                                                                             style="font-size: 14px;margin-right: 2px!important;"
                                                                          ></i>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span v-if="!notDeletableCategories.includes(project.id)"
                                                                                  @click="selectedCategoryId = project.id"
                                                                                  v-b-modal.delete_category
                                                                                  class="badge badge-danger float-right">
                                                                    <i class="fa fa-trash font-light"
                                                                       style="font-size: 14px;margin-right: 2px!important;"></i>
                                                                </span>
                                                                        </li>
                                                                    </ul>
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
                                                        <div class="row">
                                                            <div class="col-xl-4 col-lg-6"
                                                                 v-for="(project,index) in categories.active"
                                                                 :key="index" :class="index < 3 ? 'mb-4' : ''">
                                                                <div class="project-box" style="    cursor: pointer;"
                                                                     @click="selectCurrentCategory(project.id,project.name)">
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
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <transition name="bounce">
                                                                                    <p class="f-12"
                                                                                       v-if="project.children.length > 0">
                                                                                        +{{project.children.length}} Sub
                                                                                        Categories</p>
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
                                                                            <span
                                                                                  @click="selectedCategoryId = project.id"
                                                                                  v-b-modal.update-category
                                                                                  class="badge badge-info float-right">
                                                                          <i class="fa fa-edit font-light"
                                                                             style="font-size: 14px;margin-right: 2px!important;"
                                                                          ></i>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span v-if="!notDeletableCategories.includes(project.id)"
                                                                                  @click="selectedCategoryId = project.id"
                                                                                  v-b-modal.delete_category
                                                                                  class="badge badge-danger float-right">
                                                                    <i class="fa fa-trash font-light"
                                                                       style="font-size: 14px;margin-right: 2px!important;"></i>
                                                                </span>
                                                                        </li>
                                                                    </ul>
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
                                                        <div class="row">
                                                            <div class="col-xl-4 col-lg-6"
                                                                 v-for="(project,index) in categories.terminated"
                                                                 :key="index" :class="index < 3 ? 'mb-4' : ''">
                                                                <div class="project-box"
                                                                     @click="selectCurrentCategory(project.id,project.name)"
                                                                     style="    cursor: pointer;">
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
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     src='' alt="" title=""></li>
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block"
                                                                                v-if="project.children.length > 0">
                                                                                <img class="img-30 rounded-circle"
                                                                                     :src='getImgUrl("user/3.jpg")'
                                                                                     alt="" title=""></li>
                                                                            <li class="d-inline-block ml-2">
                                                                                <transition name="bounce">
                                                                                    <p class="f-12"
                                                                                       v-if="project.children.length > 0">
                                                                                        +{{project.children.length}} Sub
                                                                                        Categories</p>
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
                                                                            <span
                                                                                  @click="selectedCategoryId = project.id"
                                                                                  v-b-modal.update-category
                                                                                  class="badge badge-info float-right">
                                                                          <i class="fa fa-edit font-light"
                                                                             style="font-size: 14px;margin-right: 2px!important;"
                                                                          ></i>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span v-if="!notDeletableCategories.includes(project.id)"
                                                                                  @click="selectedCategoryId = project.id"
                                                                                  v-b-modal.delete_category
                                                                                  class="badge badge-danger float-right">
                                                                    <i class="fa fa-trash font-light"
                                                                       style="font-size: 14px;margin-right: 2px!important;"></i>
                                                                </span>
                                                                        </li>
                                                                    </ul>
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
                                    <a class="btn btn-primary" v-b-modal.add-category>
                                        <i data-feather="plus-square"> </i>Create New Category</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <subcategory @addNew="$bvModal.show('add-category')" @update="$bvModal.show('update-category'),getCategoryDetail(selectedCategoryId)" :selected-catg.sync="selectedCategoryId" v-else :added="newCategoryAdded"
                     :selected-main="selectedCategory"></subcategory>


        <!--Add Model-->
        <b-modal id="add-category"
                 size="lg"
                 @ok="addCategory"
                 @cancel="resetFields"
                 @close="resetFields"
                 centered title="Create Category"
                 ok-title="Add" class="theme-modal">
            <div class="row">
                <div class="col-md-6">
                    <b-input v-model="categoryName" placeholder="Category Name"></b-input>
                </div>
                <div class="col-md-6">
                    <multiselect v-model="selectedParent" placeholder="Select Parent"
                                 :max="1"
                                 label="name" track-by="code" :options="categories.array"></multiselect>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="form-group row">
                        <div class="col-sm-12">
                            <img :src="selectedcategoryImage" class="mb-2" style="width: 100%;">
                        </div>
                        <div class="col-sm-12">
                            <b-form-file v-model="categoryImage"
                                         :state="Boolean(categoryImage)"
                                         placeholder="Select Featured Image"
                                         drop-placeholder="Drop Image here..."></b-form-file>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="form-group row">
                        <div class="col-sm-12">
                            <img :src="selectedcategoryIcon" class="mb-2" style="width: 100%;">
                        </div>
                        <div class="col-sm-12">
                            <b-form-file v-model="categoryIcon"
                                         :state="Boolean(categoryIcon)"
                                         placeholder="Select Icon Image"
                                         drop-placeholder="Drop Icon here..."></b-form-file>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mt-2">
                    <!--                    <b-textarea v-model="categoryDescription" placeholder="Category Description"></b-textarea>-->
                    <ckeditor :editor="editor" v-model="categoryDescription"></ckeditor>
                </div>
            </div>
        </b-modal>

        <!--Update Model-->
        <b-modal id="update-category"
                 size="lg"
                 @ok="updateCategory"
                 @cancel="resetFields"
                 @close="resetFields"
                 @hidden="resetFields"
                 @hide="resetFields"
                 @bv::modal::hidden="resetFields"
                 @bv:bv::modal::hide="resetFields"
                 centered title="Update Category"
                 ok-title="Update" class="theme-modal">
            <div class="row">
                <div class="col-md-6">
                    <b-input v-model="categoryName" placeholder="Category Name"></b-input>
                </div>
                <div class="col-md-6">
                    <multiselect v-model="selectedParent" placeholder="Select Parent"
                                 label="name" track-by="code" :options="categories.array"></multiselect>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="form-group row">
                        <div class="col-sm-12">
                            <img :src="selectedcategoryImage" class="mb-2" style="width: 100%;">
                        </div>
                        <div class="col-sm-12">
                            <b-form-file v-model="categoryImage"
                                         :state="Boolean(categoryImage)"
                                         placeholder="Select Featured Image"
                                         drop-placeholder="Drop Image here..."></b-form-file>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <div class="form-group row">
                        <div class="col-sm-12">
                            <img :src="selectedcategoryIcon" class="mb-2" style="width: 100%;">
                        </div>
                        <div class="col-sm-12">
                            <b-form-file v-model="categoryIcon"
                                         :state="Boolean(categoryIcon)"
                                         placeholder="Select Icon Image"
                                         drop-placeholder="Drop Icon here..."></b-form-file>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 mt-2">
                    <!--                    <b-textarea v-model="categoryDescription" placeholder="Category Description"></b-textarea>-->
                    <ckeditor :editor="editor" v-model="categoryDescription"></ckeditor>
                </div>
            </div>
        </b-modal>
        <!-- Container-fluid Ends-->

        <!-- Delete Category -->
        <b-modal id="delete_category"
                 @ok="deleteCategory"
                 centered title="Delete Category"
                 ok-variant="danger"
                 @close="selectedCategoryId=null"
                 @cancel="selectedCategoryId=null"
                 @hidden="selectedCategoryId=null"
                 @hide="selectedCategoryId=null"
                 cancel-variant="success"
                 ok-title="Delete" class="theme-modal">
            <p>Are you sure you want to delete this Category?</p>
        </b-modal>
    </div>
</template>

<script>
    // import { mapState } from "vuex";
    import axios from 'axios'
    import apiUrls from "../../../_helpers/apiUrls";
    import CKEditor from '@ckeditor/ckeditor5-vue';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    import subcategory from './subcategory/index'
    import Multiselect from 'vue-multiselect'

    export default {
        data() {
            return {
                categories: [],
                categoryDescription: "",
                categoryImage: null,
                selectedcategoryImage: "",
                categoryName: "",
                selectedCategory: [],
                newCategoryAdded: false,
                categoryIcon: null,
                notDeletableCategories: [2, 3, 4, 5],
                selectedcategoryIcon: "",
                selectedParent: [],
                selectedCategoryId: null,
                editor: ClassicEditor,
            }
        },
        components: {
            Multiselect,
            ckeditor: CKEditor.component,
            subcategory
        },
        watch: {
            selectedParent: function (val) {
                console.log(val)
            },
            categoryIcon: function (val) {
                this.selectedcategoryIcon = URL.createObjectURL(val)
            },
            categoryImage: function (val) {
                this.selectedcategoryImage = URL.createObjectURL(val)
            }
        },
        methods: {
            addCategory() {
                let formData = new FormData()
                if (this.categoryImage != null) {
                    formData.append('featured', this.categoryImage)
                }
                if (this.categoryIcon != null) {
                    formData.append('icon', this.categoryIcon)
                }
                if (this.selectedParent.length != 0) {
                    formData.append('parent', this.selectedParent.id)
                }
                formData.append('name', this.categoryName)
                formData.append('description', this.categoryDescription)

                axios.post(apiUrls.addCategory, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })
                    .then((res) => {
                        this.newCategoryAdded = !this.newCategoryAdded
                        this.getMainCategory()
                        console.log(res)
                    }).catch(() => {
                    this.getMainCategory()
                })
            },
            updateCategory(){
                let formData = new FormData()
                if (this.categoryImage != null) {
                    formData.append('featured', this.categoryImage)
                }
                if (this.categoryIcon != null) {
                    formData.append('icon', this.categoryIcon)
                }
                if (this.selectedParent.length != 0) {
                    formData.append('parent', this.selectedParent.id)
                }
                formData.append('id', this.selectedCategoryId)
                formData.append('name', this.categoryName)
                formData.append('description', this.categoryDescription)

                axios.post(apiUrls.updateCategory, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }).then((res) => {
                    this.newCategoryAdded = !this.newCategoryAdded
                        this.getMainCategory()
                        console.log(res)
                    }).catch(() => {
                    this.getMainCategory()
                })
            },
            getCategoryDetail(id){
                axios.post(apiUrls.getCategoryDetail, {
                    id: id
                }).then((res) => {
                    console.log(res)
                    this.categoryName = res.data.name
                    this.categoryDescription = res.data.description
                    this.selectedParent = {id:res.data.parents.id,name:res.data.parents.name}
                    this.selectedcategoryImage = res.data.image
                    this.selectedcategoryIcon = res.data.icon
                    // this.alert()
                }).catch(() => {

                })
            },
            deleteCategory() {
                axios.post(apiUrls.deleteCategory, {
                    id: this.selectedCategoryId
                }).then((res) => {
                    console.log(res)
                    this.getMainCategory()
                    // this.alert()
                }).catch(() => {

                })
            },
            getMainCategory() {
                axios.get(apiUrls.getCategory)
                    .then((res) => {
                        console.log(res)
                        this.categories = res.data
                        this.$store.commit('setLoading', false)
                    }).catch(() => {

                })
            },
            selectCurrentCategory(id, name) {
                this.selectedCategory.push({id: id, name: name})
                console.log(this.selectedCategory)
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
            getImgUrl(path) {
                return require('@/assets/images/' + path)
            },
            resetFields(){
                this.categoryImage = null
                this.selectedcategoryImage = ''
                this.selectedcategoryIcon = ''
                this.categoryIcon = null
                this.categoryName = ''
                this.selectedParent = []
                this.categoryDescription = ''
            }
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
            this.getMainCategory()
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
