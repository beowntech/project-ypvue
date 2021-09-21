<template>
    <div>
        <Breadcrumbs :title="$store.getters.getProperty[0].name" main="SEO"/>
        <!-- Container-fluid starts-->
        <!--        <div class="row mb-3">-->
        <!--            <div class="col-sm-12 col-xl-12">-->
        <!--                <b-button :variant="addNew ? 'danger':'primary'" @click="addNew = !addNew" class="float-right">-->
        <!--                    {{addNew-->
        <!--                    ? 'Close': 'Add Course'}}-->
        <!--                </b-button>-->
        <!--            </div>-->
        <!--        </div>-->
        <div>
            <div class="row">
                <div class="col-md-12">
                    <div class="float-right card mb-0 mr-2 seo-progress" style="border-radius: 0;">
                        <div class="p-2">
                            <b-progress height="8px" :value="progress" :max="100"
                                        :variant="progressColor(progress)"></b-progress>
                            <label>{{progress}}/100</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card p-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4>Basic</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <label>SEO Title</label>
                                        <b-input placeholder="Seo Title" v-model="seoTitle"></b-input>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Canonical Link</label>
                                        <b-input placeholder="Canonical Link" v-model="seoCanonicalLink"></b-input>
                                        <!--                                        <b-input v-model="courseName" placeholder="Course Name"></b-input>-->
                                    </div>
                                    <div class="col-md-6 mt-2">
                                        <label>Permalink</label>
                                        <b-input placeholder="Permalink" v-model="seoPermaLink"></b-input>
                                    </div>
                                    <div class="col-md-6 mt-2">
                                        <label>Author Name</label>
                                        <b-input placeholder="Author Name" v-model="seoAuthorName"></b-input>
                                        <!--                                        <b-input v-model="courseName" placeholder="Course Name"></b-input>-->
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <h4>Other Details</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Primary Focus Keyword</label>
                                        <b-input v-model="seoPrimaryFocusKeyword"
                                                 placeholder="Primary Focus Keyword"></b-input>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Language</label>
                                        <b-input v-model="seoLanguage" placeholder="Language"></b-input>
                                        <!--                                        <b-input v-model="courseName" placeholder="Course Name"></b-input>-->
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <hr>
                                        <h4>Description</h4>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label>Description</label>
                                        <b-textarea v-model="seoDescription" rows="5"></b-textarea>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <hr>
                                        <h4>Schema</h4>
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <label>Schema</label>
                                        <b-textarea placeholder="Add Scheme in JSON for Ex:
{
json
}" v-model="seoSchema" rows="7"></b-textarea>
                                    </div>
                                    <div class="col-md-12 mt-2">
                                        <b-button variant="success" class="float-right" @click="updateSeo">UPDATE
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import apiUrls from "../../../_helpers/apiUrls";

    export default {
        name: "TempCourse",
        data() {
            return {
                seoId: 0,
                seoTitle: "",
                seoDescription: "",
                seoCanonicalLink: "",
                seoPermaLink: "",
                seoAuthorName: "",
                seoPrimaryFocusKeyword: "",
                seoLanguage: "",
                seoSchema: "",
                progress: 70
            }
        },
        methods: {
            updateSeo() {
                this.$store.commit('setLoading', true)
                let formData = new FormData()
                formData.append('title', this.seoTitle)
                formData.append('description', this.seoDescription)
                formData.append('author', this.seoAuthorName)
                formData.append('canonical', this.seoCanonicalLink)
                formData.append('permalink', this.seoPermaLink)
                formData.append('primary_keyword', this.seoPrimaryFocusKeyword)
                formData.append('language', this.seoLanguage)
                formData.append('schema', this.seoSchema)

                axios.post(apiUrls.updateSEO + '/' + this.seoId, formData)
                    .then((res) => {
                        if (res.data.status == 1) {
                            this.alert('Seo Updated Successfully', 'success', 'success', 'top-center')
                            this.seoTitle = ""
                            this.seoSchema = ""
                            this.seoLanguage = ""
                            this.seoPermaLink = ""
                            this.seoAuthorName = ""
                            this.seoPrimaryFocusKeyword = ""
                            this.seoCanonicalLink = ""
                            this.seoDescription = ""
                            this.seoId = 0
                            this.getSeo()
                        }
                        this.$store.commit('setLoading', false)
                        console.log(res)
                    }).catch((res) => {
                    this.$store.commit('setLoading', false)
                    this.alert('Please Fill all Input Fields', 'danger', 'danger', 'top-center')
                    console.log(res)
                })
            },
            getSeo() {
                axios.post(apiUrls.getSEO, {
                    type: 1,
                    id: this.$store.getters.getProperty[0].id
                }).then((res) => {
                    console.log(res.data[0].seo[0].permalink);
                    this.seoId = res.data[0].seo[0].id
                    this.seoTitle = res.data[0].seo[0].title != null ? res.data[0].seo[0].title : ""
                    this.seoDescription = res.data[0].seo[0].description != null ? res.data[0].seo[0].description : ""
                    this.seoCanonicalLink = res.data[0].seo[0].canonical_link != null ? res.data[0].seo[0].canonical_link : ""
                    this.seoAuthorName = res.data[0].seo[0].author_name != null ? res.data[0].seo[0].author_name : ""
                    this.seoPermaLink = res.data[0].seo[0].permalink != null ? res.data[0].seo[0].permalink : ""
                    this.seoPrimaryFocusKeyword = res.data[0].seo[0].primary_focus_keyword != null ? res.data[0].seo[0].primary_focus_keyword : ""
                    this.seoLanguage = res.data[0].seo[0].language != null ? res.data[0].seo[0].language : ""
                    this.seoSchema = res.data[0].seo[0].schema != null ? JSON.parse(res.data[0].seo[0].schema) : ""
                    this.$store.commit('setLoading', false)
                }).catch((err) => {
                    this.$store.commit('setLoading', false)
                    console.log(err)
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
            progressColor(progress) {
                if (progress <= 20) {
                    return 'danger'
                } else if (progress >= 20 && progress <= 50) {
                    return 'warning'
                } else if (progress >= 50 && progress <= 100) {
                    return 'success'
                }
            }
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
            this.getSeo()
        },
        components: {}
    }
</script>
<style>
    .seo-progress {
        width: 180px;
        height: 40px;
    }
</style>