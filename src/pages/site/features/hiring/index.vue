<template>
    <div>
        <Breadcrumbs title="Hiring"
                     :button-enable="true"
                     button-title="Add Hiring"
                     :close-button="addNew"
                     @action="addNew=!addNew"
                     close-title="Close"
        />
        <!-- Container-fluid starts-->
        <div v-if="addNew">
            <div class="row">
                <div class="col-md-12">
                    <div class="card p-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row px-3">
                                    <div class="col-md-12">
                                        <h4>Post Name</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <b-input v-model="postName" placeholder="Ex: Staff,Teacher, etc.."></b-input>
                                    </div>
<!--                                    <div class="col-md-6">-->
<!--                                        <multiselect v-model="courseCategory" tag-placeholder="Add this as new tag"-->
<!--                                                     placeholder="Select Category"-->
<!--                                                     label="name" :max="1" track-by="code" :options="options"-->
<!--                                                     :multiple="false" :taggable="false"></multiselect>-->
                                    </div>
                                    <div class="col-md-12 mt-1">
                                        <hr>
                                        <h4>Location</h4>
                                    </div>
                                    <div class="col-md-12 mt-1">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <multiselect v-model="stateSelected" placeholder="Select State"
                                                             label="name" :max="1" track-by="id" :options="stateOptions"
                                                             :multiple="false" :taggable="false"></multiselect>
                                            </div>
                                            <div class="col-md-6">
                                                <multiselect v-if="showCity" v-model="citySelected" placeholder="Select City"
                                                             label="name" :max="1" track-by="id" :options="cityOptions"
                                                             :multiple="false" :taggable="false"></multiselect>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-1">
                                        <hr>
                                        <h4>Other Details</h4>
                                    </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Minimum Experience</label>
                                            <b-select v-model="selectedMimimumExp" :options="['Fresher','1-2+ Years','2-3+ Years','3-5+ Years','5-8+ Years','8-10+ Years','11+ Years']"></b-select>
<!--                                            <b-input v-model="postName" placeholder="Minimum Experience"></b-input>-->
                                        </div>
                                        <div class="col-md-6">
                                            <label>Eligibility</label>
                                            <b-input v-model="eligibility" placeholder="EX: 10th+ Needed"></b-input>
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            <label>Package Expected</label>
<!--                                            <b-input-group>-->
<!--                                                <b-input-group-prepend style="width: 42%;">-->
<!--                                                    <b-input v-model="package.first_amount" placeholder="Ex: 100000"></b-input>-->
<!--                                                </b-input-group-prepend>-->
<!--                                                <b-input-group-prepend style="width: 40%;">-->
<!--                                                    <b-input v-model="package.second_amount" placeholder="Ex: 500000"></b-input>-->
<!--                                                </b-input-group-prepend >-->
<!--                                                <b-select style="width: 14%;" v-model="package.selected" :options="packageSelectOptions" placeholder="LAKH"></b-select>-->
<!--                                            </b-input-group>-->
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            <label>Hiring End Date</label>
                                            <b-form-input type="date" v-model="hiringEnd" :value="`${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`" ></b-form-input>
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            <label>Max Vacancy Allowed</label>
                                            <b-input v-model="vacancyAllowed" placeholder="EX: 4 or 10"></b-input>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-1">
                                    <hr>
                                    <h4>Content</h4>
                                </div>
                                    <div class="col-md-12 mt-3">
                                        <ckeditor :editor="editor" v-model="hiringDescription"></ckeditor>
                                    </div>
                                </div>
                            <div class="col-md-12 mt-3">
                                <b-button variant="success" class="float-right" @click="addHiring">SUBMIT</b-button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div v-else class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-xl-3" v-for="(data,i) in tempCourses" :key="i">
                    <div class="card">
                        <div class="product-details p-2">
                            <a href="/ecommerce/details/1" class="">
                                <h4>{{data.post_name}} <i class="fa fa-pencil edit-pencil"></i></h4>
                                <p>Vacancy Number: {{data.vacancy_number}}</p>
                                <p>Experience Needed: {{data.applicant_experience}}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
        <b-modal id="add_temp_course" centered
                 size="lg"
                 style="max-width: 100% !important;"
                 title="Add Temp Course"
                 ok-title="Submit"
                 class="theme-modal">

        </b-modal>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import axios from 'axios'
    import config from '../../../../config.json'
    import apiUrls from "../../../../_helpers/apiUrls";
    import CKEditor from "@ckeditor/ckeditor5-vue";
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

    export default {
        name: "Hiring",
        data() {
            return {
                postName: "",
                courseCategory: [],
                selectedcertImage: "",
                eligibility: "",
                selectedFeaturedImage: "",
                options: [],
                hiringDescription: "",
                durationEnable: false,
                stateSelected: [],
                hiringEnd: "",
                citySelected: [],
                stateOptions: [],
                cityOptions: [],
                addNew: false,
                package: {first_amount:0,second_amount:0,selected:''},
                packageSelectOptions:['Lakh','Crore'],
                editor: ClassicEditor,
                certImage: null,
                vacancyAllowed: "",
                featuredImage: null,
                selectedMimimumExp: "1-2+ Years",
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
                ],
                prices: [
                    {
                        price: '',
                        currency: '$',
                    }
                ],
                durationTypes: [
                    {
                        text: 'Hours',
                        value: 'hours'
                    },
                    {
                        text: 'Days',
                        value: 'days'
                    },
                    {
                        text: 'Weeks',
                        value: 'weeks'
                    }
                ],
                tempCourses: [],
                showCity: false
            }
        },
        watch:{
            stateSelected: function(val){
                if(val.length != 0){
                    this.showCity = true
                    this.getCity()
                }else{
                    this.showCity = false
                }
            },
            addNew:function(val){
                if(!val){
                    this.resetForm()
                }
            }
        },
        methods: {
            addHiring() {
                this.$store.commit('setLoading', true)
                let formData = new FormData()
                formData.append('property_id', this.$store.getters.getProperty[0].id)
                formData.append('post_name', this.postName)
                formData.append('location', JSON.stringify([{state: this.stateSelected.id,city:this.citySelected.id}]))
                formData.append('package_expected', JSON.stringify(this.package))
                formData.append('eligibility', this.eligibility)
                formData.append('vacancy_number', this.vacancyAllowed)
                formData.append('applicant_experience', this.selectedMimimumExp)
                formData.append('end_date', this.hiringEnd)
                formData.append('content', this.hiringDescription)
                formData.append('status', 1)
                axios.post(apiUrls.addHiring, formData,{
                    headers:{
                        'Content-type': 'application/json'
                    }
                })
                    .then((res) => {
                        if (res.data.status == 1) {
                           this.resetForm()
                        }
                        this.$store.commit('setLoading', false)
                        console.log(res)
                    }).catch((res) => {
                    this.$store.commit('setLoading', false)
                    console.log(res)
                })
            },
            resetForm(){
                this.postName = ""
                this.hiringDescription = ""
                this.stateSelected = []
                this.citySelected = []
                this.eligibility = ""
                this.hiringEnd = ""
                this.package = {first_amount:0,second_amount:0,selected:''}
                this.showCity = false
                this.vacancyAllowed = ""
                this.selectedMimimumExp = "1-2+ Years"
            },
            getHiring() {
                axios.post(apiUrls.getHirings,{
                    id: this.$store.getters.getProperty[0].id
                }).then((res) => {
                        console.log(res)
                        this.$store.commit('setLoading', false)
                        if(res.data.length != 0) {
                            this.tempCourses = res.data
                        }else{
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
                        for (var i = 0; i < res.data.length; i++) {
                            this.options.push({name: res.data[i].name, code: res.data[i].id})
                        }
                        console.log(res)
                    }).catch(() => {

                })
            },
            getState(){
                axios.get(apiUrls.stateList+'?id='+this.$store.getters.getProperty[0].location.countries.id).then((res)=>{
                    this.stateOptions = res.data
                    this.$store.commit('setLoading', false)
                }).catch((err)=>{
                    this.$store.commit('setLoading', false)
                    console.log(err)
                })
            },
            getCity(){
                this.cityOptions = []
                axios.get(apiUrls.cityList+'?id='+this.stateSelected.id)
                    .then((res)=>{
                    this.cityOptions = res.data
                    this.$store.commit('setLoading', false)
                }).catch((err)=>{
                    this.$store.commit('setLoading', false)
                    console.log(err)
                })
            },
            getCoursePath(data,id){
                return config.apiUrl.courseImage + id + '/logo/' +data + '-sm.webp'
            }
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
            // this.getCategory()
            this.getState()
            this.getHiring()
            // this.getTempCourse()
        },
        components: {
            Multiselect,
            ckeditor: CKEditor.component
        }
    }
</script>