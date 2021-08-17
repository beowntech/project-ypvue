<template>
    <div>
        <Breadcrumbs title="Update Course"/>
        <!-- Container-fluid starts-->
        <div>
            <div class="row">
                <div class="col-md-8">
                    <div class="card p-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4>Basic</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <multiselect v-model="courseCategory"
                                                     placeholder="Select Course Category"
                                                     label="name" track-by="id" :options="options"></multiselect>
                                    </div>
                                    <div class="col-md-6">
                                        <multiselect v-if="enableCourseName" v-model="courseName"
                                                     placeholder="Select Course"
                                                     label="name" track-by="id" :options="courseOptions"></multiselect>
                                        <!--                                        <b-input v-model="courseName" placeholder="Course Name"></b-input>-->
                                    </div>
                                    <div class="col-md-12 mt-1">
                                        <hr>
                                        <h4>Price</h4>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row" v-for="(data,i) in prices" :key="i">
                                            <div class="col-xl-5 col-md-7 col-sm-5 col-xs-7">
                                                <label class="col-form-label">Price:</label>
                                                <b-form-input v-model="data.price" type="text"
                                                              placeholder="Price"></b-form-input>
                                            </div>
                                            <div class="col-xl-5 col-md-7 col-sm-5 col-xs-7">
                                                <div class="form-group mt-2">
                                                    <label>Curreny:</label>
                                                    <b-form-select v-model="data.currency" placeholder="Select Currency"
                                                                   :options="priceTypes"></b-form-select>
                                                </div>
                                            </div>
                                            <div class="col-xl-2 col-md-3 col-sm-2 col-xs-3">
                                                <b-button style="margin-top: 35px !important;" v-if="i > 0"
                                                          @click.stop="removePriceRow(i)"
                                                          variant="outline-danger"
                                                          size="sm"
                                                          class="btn-air-danger addSocialButton btn-outline-danger"><i
                                                        class="fa fa-minus pcolor edit-pencil"></i></b-button>
                                                <b-button style="margin-top: 35px !important;" v-else
                                                          @click.stop="addPriceRow"
                                                          variant="outline-primary" size="sm"
                                                          class="btn-air-primary addSocialButton btn-outline-primary"><i
                                                        class="fa fa-plus pcolor edit-pencil"></i></b-button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <hr>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h4>Duration</h4>
                                            </div>
                                            <!--                                            <div class="col-md-1">-->
                                            <!--                                                <div class="media-body text-right icon-state switch-outline">-->
                                            <!--                                                    <label class="switch">-->
                                            <!--                                                        <input type="checkbox" v-model="durationEnable"><span-->
                                            <!--                                                            class="switch-state bg-primary"></span>-->
                                            <!--                                                    </label>-->
                                            <!--                                                </div>-->
                                            <!--                                            </div>-->
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row" v-for="(data,i) in duration" :key="i">
                                            <div class="col-xl-4 col-md-5 col-sm-3 col-xs-5">
                                                <label class="col-form-label">Time:</label>
                                                <b-form-input v-model="data.count" type="text"
                                                              placeholder="Time"></b-form-input>
                                            </div>
                                            <div class="col-xl-3 col-md-4 col-sm-4 col-xs-4">
                                                <div class="form-group mt-2">
                                                    <label>Type:</label>
                                                    <b-form-select v-model="data.type"
                                                                   :options="durationTypes"></b-form-select>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-4 col-sm-3 col-xs-4">
                                                <label class="col-form-label">Estimated Time:</label>
                                                <b-form-input v-model="data.estimated" type="text"
                                                              placeholder="Estimated Time"></b-form-input>
                                            </div>
                                            <!--                                            <div class="col-xl-2 col-md-3 col-sm-2 col-xs-3">-->
                                            <!--                                                <b-button style="margin-top: 35px !important;" v-if="i > 0"-->
                                            <!--                                                          @click.stop="removeDurationRow(i)" variant="outline-danger"-->
                                            <!--                                                          size="sm"-->
                                            <!--                                                          class="btn-air-danger addSocialButton btn-outline-danger"><i-->
                                            <!--                                                        class="fa fa-minus pcolor edit-pencil"></i></b-button>-->
                                            <!--                                                <b-button style="margin-top: 35px !important;" v-else-->
                                            <!--                                                          @click.stop="addDurationRow"-->
                                            <!--                                                          variant="outline-primary" size="sm"-->
                                            <!--                                                          class="btn-air-primary addSocialButton btn-outline-primary"><i-->
                                            <!--                                                        class="fa fa-plus pcolor edit-pencil"></i></b-button>-->
                                            <!--                                            </div>-->
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <hr>
                                        <h4>Content</h4>

                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <ckeditor :editor="editor" v-model="courseDescription"></ckeditor>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-4">
                        <div class="row">
                            <div class="col-sm-12">
                                <label>Upload Thumbnail</label>
                                <img :src="selectedcertImage" style="width: 100%;">
                                <b-form-file v-model="certImage"
                                             :state="Boolean(certImage)"
                                             placeholder="Choose Thumbnail"
                                             class="mt-2"
                                             @change="selectCertImage"
                                             drop-placeholder="Drop Your Thumbnail Here"></b-form-file>
                            </div>
                        </div>
                    </div>
                    <div class="card p-4">
                        <b-button variant="success" @click="addCourse">Submit</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import axios from 'axios'
    import config from '../../../config.json'
    import apiUrls from "../../../_helpers/apiUrls";
    import CKEditor from "@ckeditor/ckeditor5-vue";
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

    export default {
        name: "CourseUpdate",
        data() {
            return {
                courseName: [],
                courseCategory: [],
                selectedcertImage: "",
                selectedFeaturedImage: "",
                options: [],
                courseDescription: "",
                durationEnable: false,
                addNew: false,
                editor: ClassicEditor,
                certImage: null,
                featuredImage: null,
                duration: [{
                    count: '',
                    type: '',
                    estimated: '',
                }],
                priceTypes: [
                    {
                        value: '$',
                        text: '$ Dollar'
                    },
                    {
                        value: '₹',
                        text: '₹ Rupee'
                    },
                    {
                        value: '€',
                        text: '€ Euro'
                    },
                ],
                prices: [
                    {
                        price: '',
                        currency: '$',
                    }
                ],
                durationTypes: [
                    {
                        text: 'Days',
                        value: 'day'
                    },
                    {
                        text: 'Weeks',
                        value: 'week'
                    },
                    {
                        text: 'Months',
                        value: 'month'
                    },
                    {
                        text: 'Years',
                        value: 'year'
                    }
                ],
                Courses: [],
                tempCourseName: [],
                courseOptions: [],
                enableCourseName: false
            }
        },
        watch: {
            courseCategory: function (val) {
                if (val != null) {
                    if(val.length != 0) {
                        this.courseName = []
                        this.courseOption(val[0].id)
                    }else{
                        this.courseName = []
                        this.courseOption(val.id)
                    }
                } else {
                    this.enableCourseName = false
                    this.courseOptions = []
                }
            },
            courseOptions: function (val) {
                if (val.length != 0) {
                    this.enableCourseName = true
                }
            },
            courseName: function (val) {
                if (val != null) {
                    if(Array.isArray(val)){
                        // this.prices = JSON.parse(val[0].price)
                        // this.duration = JSON.parse(val[0].duration)
                        // this.courseDescription = val[0].description
                        // this.selectedcertImage = this.getCoursePath(val[0].image, val[0].id)
                    }else {
                        this.prices = JSON.parse(val.price)
                        this.duration = JSON.parse(val.duration)
                        this.courseDescription = val.description
                        this.selectedcertImage = this.getCoursePath(val.image, val.id)
                    }
                } else {
                    this.prices = [{
                        price: '',
                        currency: '$',
                    }]
                    this.duration = [{
                        count: '',
                        type: '',
                        estimated: '',
                    }]
                }
            }
        },
        methods: {
            addCourse() {
                this.$store.commit('setLoading', true)
                let formData = new FormData()
                formData.append('id', this.$route.params.courseId)
                if(Array.isArray(this.courseName)) {
                    formData.append('temp_course_id', this.courseName[0].id)
                }else{
                    formData.append('temp_course_id', this.courseName.id)
                }
                formData.append('description', this.courseDescription)
                formData.append('price', JSON.stringify(this.prices))
                formData.append('duration', JSON.stringify(this.duration))
                if (this.certImage != null) {
                    formData.append('logo', this.certImage)
                }
                axios.post(apiUrls.updateCourse, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }).then((res) => {
                        if (res.data.status == 1) {
                            this.alert('Course Updated Successfully', 'success', 'success', 'top-center')
                            this.courseName = ""
                            this.courseCategory = []
                            this.courseDescription = ""
                            this.certImage = null
                            this.featuredImage = null
                            this.selectedFeaturedImage = ""
                            this.selectedcertImage = ""
                            this.duration = [{
                                count: '',
                                type: '',
                                estimated: '',
                            }]
                            this.prices = [{
                                price: '',
                                currency: '$',
                            }]
                            this.$router.go(-1)
                            this.getCourse()
                        }
                        this.$store.commit('setLoading', false)
                        console.log(res)
                    }).catch((res) => {
                    this.$store.commit('setLoading', false)
                    console.log(res)
                })
            },
            getCourse() {
                axios.get(apiUrls.getCourseDetail + this.$route.params.courseId + '/detail')
                    .then((res) => {
                        console.log(res)
                        this.$store.commit('setLoading', false)
                        this.courseCategory.push({
                            id: res.data.temporary.category,
                            name: res.data.temporary.categories.name
                        })
                        this.prices = res.data.price != null ? JSON.parse(res.data.price) : JSON.parse(res.data.temporary.price)
                        this.duration = res.data.duration != null ? JSON.parse(res.data.duration) : JSON.parse(res.data.temporary.duration)
                        this.courseDescription = res.data.description != null ? res.data.description : res.data.temporary.description
                        this.tempCourseName.push(res.data.temporary)
                        this.selectedcertImage = this.getCoursePath(res.data.image != null ? res.data.image:res.data.temporary.image, res.data.id)
                    }).catch((err) => {
                    this.$store.commit('setLoading', false)
                    console.log(err)
                })
            },
            courseOption(val) {
                axios.post(apiUrls.getCourseByCategory, {
                    id: val
                }).then((res) => {
                    console.log(res)
                    if (res.data.length != 0) {
                        this.courseOptions = res.data
                    } else {
                        this.addNew = true
                    }
                    if(this.tempCourseName.length != 0){
                        this.courseName = this.tempCourseName
                    }
                }).catch((err) => {
                    console.log(err)
                })
            },
            addDurationRow() {
                this.duration.push({
                    count: '',
                    type: '',
                    estimated: '',
                })
            },
            addPriceRow() {
                this.prices.push({
                    price: '',
                    currency: '',
                })
            },
            removeDurationRow(val) {
                this.duration.splice(val, 1)
            },
            removePriceRow(val) {
                this.prices.splice(val, 1)
            },
            selectCertImage(e) {
                this.selectedcertImage = URL.createObjectURL(e.target.files[0])
                this.certImage = e.target.files[0]
            },
            selectFeaturedImage(e) {
                this.selectedFeaturedImage = URL.createObjectURL(e.target.files[0])
                this.featuredImage = e.target.files[0]
            },
            getCategory() {
                axios.post(apiUrls.coursesCategory)
                    .then((res) => {
                        this.options = res.data
                        console.log(res)
                    }).catch(() => {

                })
            },
            alert(message, color, icon, position) {
                this.$toasted.show(message, {
                    theme: 'outline',
                    position: position,
                    type: color,
                    icon: 'success',
                    duration: 2000
                });
            },
            getCoursePath(data, id) {
                return config.apiUrl.courseImage + id + '/logo/' + data + '-sm.webp'
            },
            getCoursePropertyPath(data) {
                return config.apiUrl.propertyImage + this.$store.getters.getProperty[0].id + '/course/' + data + '-sm.webp'
            }
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
            this.getCategory()
            this.getCourse()
        },
        components: {
            Multiselect,
            ckeditor: CKEditor.component
        }
    }
</script>