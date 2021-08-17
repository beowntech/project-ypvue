<template>
    <div>
        <Breadcrumbs title="Temporary Course"/>
        <!-- Container-fluid starts-->
        <div class="row mb-3">
            <div class="col-sm-12 col-xl-12">
                <b-button :variant="addNew ? 'danger':'primary'" @click="addNew = !addNew" class="float-right">{{addNew
                    ? 'Close': 'Add Course'}}
                </b-button>
            </div>
        </div>
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
                                        <b-input v-model="courseName" placeholder="Course Name"></b-input>
                                    </div>
                                    <div class="col-md-6">
                                        <multiselect v-model="courseCategory" tag-placeholder="Add this as new tag"
                                                     placeholder="Course Category"
                                                     label="name" :max="1" track-by="id" :options="options"
                                                     :multiple="false" :taggable="false"></multiselect>
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
                                                          @click.stop="removePriceRow(i)" variant="outline-danger"
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
                                             @change="selectCertImage"
                                             drop-placeholder="Drop Your Thumbnail Here"></b-form-file>
                            </div>
                            <div class="col-sm-12 mt-4">
                                <label>Upload Featured</label>
                                <img :src="selectedFeaturedImage" style="width: 100%;">
                                <b-form-file v-model="featuredImage"
                                             :state="Boolean(featuredImage)"
                                             placeholder="Choose Featured"
                                             @change="selectFeaturedImage"
                                             drop-placeholder="Drop Your Featured Here"></b-form-file>
                            </div>
                        </div>
                    </div>
                    <div class="card p-4">
                        <b-button variant="success" @click="addTempCourse">Submit</b-button>
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
        name: "TempCourse",
        data() {
            return {
                courseName: "",
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
                tempCourses: [],
            }
        },
        methods: {
            addTempCourse() {
                this.$store.commit('setLoading', true)
                let formData = new FormData()
                formData.append('id', this.$route.params.courseId)
                formData.append('name', this.courseName)
                formData.append('category', this.courseCategory.id)
                formData.append('description', this.courseDescription)
                formData.append('price', JSON.stringify(this.prices))
                formData.append('duration', JSON.stringify(this.duration))
                if (this.certImage != null) {
                    formData.append('logo', this.certImage)
                }
                if (this.featuredImage != null) {
                    formData.append('featured', this.featuredImage)
                }
                axios.post(apiUrls.updateTempCourse, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })
                    .then((res) => {
                        if (res.data.status == 1) {
                            this.alert('Temporary Course Updated Successfully','success','success','top-center')
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
                            this.addNew = false
                            this.getTempCourse()
                        }
                        this.$store.commit('setLoading', false)
                        console.log(res)
                    }).catch((res) => {
                    this.$store.commit('setLoading', false)
                    console.log(res)
                })
            },
            getTempCourse() {
                axios.post(apiUrls.getTempCourseDetail)
                    .then((res) => {
                        console.log(res)
                        this.$store.commit('setLoading', false)
                        if (res.data.length != 0) {
                            this.tempCourses = res.data
                        } else {
                            this.addNew = true
                        }
                    }).catch((err) => {
                    this.$store.commit('setLoading', false)
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
            }
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
            this.getCategory()
            this.getTempCourse()
        },
        components: {
            Multiselect,
            ckeditor: CKEditor.component
        }
    }
</script>