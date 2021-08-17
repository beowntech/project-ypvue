<template>
    <div>
        <Breadcrumbs title="Certificates"
                     :button-title="'Add Certificate'"
                     :button-enable="true"
                     :close-title="'Close'"
                     :close-button="addCert"
                     @action="addCert=!addCert"
        />
        <!-- Container-fluid starts-->
        <div class="container-fluid" v-if="!addCert">
            <div class="row">
                <div class="col-sm-3 col-xl-3" v-for="(data,i) in certificates" :key="i">
                    <div class="card">
                        <div class="guru-img">
                            <img :src="'http://localhost:8000/certificate/'+data.images+'-md.webp'" alt=""
                                 class="img-fluid p-3"
                                 style="width: 100%;">
                        </div>
                        <div class="product-details p-2"><a href="/ecommerce/details/1" class="">
                            <h6>{{data.name}} <i class="fa fa-pencil edit-pencil"></i></h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-md-12">
                    <div class="card p-6">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 mt-3">
                                    <div v-if="certImage != null" class="mb-3 text-center">
                                        <img :src="certImageShow" style="width: 100%;">
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Upload File</label>
                                        <div class="col-sm-9">
                                            <b-form-file v-model="certImage"
                                                         :state="Boolean(certImage)"
                                                         placeholder="Choose a file or drop it here..."
                                                         drop-placeholder="Select Image here..."></b-form-file>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-3">
                                    <b-input v-model="certificateName" placeholder="Certificate Name"></b-input>
                                </div>
                                <div class="col-md-12 mt-3">
                                    <ckeditor :editor="editor"  v-model="certificateDescription"></ckeditor>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <b-button variant="success" @click="addCertificate" class="float-right">Submit</b-button>
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
    // import vue2Dropzone from 'vue2-dropzone'
    import axios from 'axios'
    import apiUrls from "../../../_helpers/apiUrls";
    import CKEditor from '@ckeditor/ckeditor5-vue';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: "certificateIndex",
        data() {
            return {
                editor: ClassicEditor,
                addCert: false,
                certificateName: "",
                certificateDescription: "",
                certImage: null,
                certImageShow: "",
                certificates: [],
                certImageUploaded: false,
                validationdropzoneOptions: {
                    url: apiUrls.addCertificate,
                    thumbnailWidth: 200,
                    maxFiles: 1,
                    acceptedFiles: ['image/jpeg', 'image/png'],
                    maxFilesize: 6,
                    addRemoveLinks: true,
                    dictDefaultMessage: "<i class='icon-cloud-up'></i><h6>Drop Certificate Image Here</h6><span>Only JPEG, JPG and PNG files are supported</span>"
                }
            }
        },
        watch: {
            certImage: function () {
                this.certImageUploaded = true
                this.certImageShow = URL.createObjectURL(this.certImage)
            }
        },
        methods: {
            openAddModal() {
                this.$bvModal.show('add-certificate')
            },
            getCertificates() {
                axios.post(apiUrls.getCertificate)
                    .then((res) => {
                        this.certificates = res.data
                        this.$store.commit('setLoading', false)
                    }).catch((err) => {
                    console.log(err)
                })
            },
            addCertificate() {
                let formData = new FormData()
                formData.append('image', this.certImage)
                formData.append('name', this.certificateName)
                axios.post(apiUrls.addCertificate, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })
                    .then((res) => {
                        this.getCertificates()
                        this.certificateName = ""
                        this.certImage = null

                    }).catch((err) => {
                    console.log(err)
                })
            },
        },
        mounted() {
            this.getCertificates()
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
        },
        components: {
            ckeditor: CKEditor.component
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }
</style>