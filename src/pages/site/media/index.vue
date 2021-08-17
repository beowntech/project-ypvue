<template>
    <div>
        <Breadcrumbs main="Gallery" title="Grid Gallery"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-3">
                            <div class="card" style="align-items: center;">
                                <a v-b-modal.upload_logo>
                                    <img :src="logoImageShow != null ? getpropertyLogo(logoImageShow) : getLogoPlaceholder('upload-image.jpg')"
                                         class="img-thumbnail" style="object-fit: cover;" alt="Image description"/>
                                </a>
                                <div class="imagesBadge"><p>Logo</p></div>
                            </div>
                        </div>
                        <div class="col-md-auto offset-3"></div>
                        <div class="col-5">
                            <div class="card" style="align-items: center;">
                                <a @click="$refs.featuredRefer.click()">
                                    <input type="file" class="hidden" @change="uploadFeatured" ref="featuredRefer">
                                    <img :src="featuredImageShow != null ? getpropertyFeatured(featuredImageShow) : getFeaturedPlaceholder('upload-image.png')"
                                         class="img-thumbnail" style="object-fit: cover;" alt="Image description"/>
                                </a>
                                <div class="imagesBadge"><p>Featured</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h5>IMAGE GALLERY</h5>
                        </div>
                        <div class="card-body my-gallery gallery">
                            <div class="row" itemscope itemprop="thumbnail">
                                <figure
                                        v-for="(n,index) in lightgallery"
                                        :key="index"
                                        class="col-xl-2 col-sm-3 m-0">
                                    <a @click="gindex = index">
                                        <img :src="getpropertyPath(n.image)" class="img-thumbnail"
                                             alt="Image description"/>
                                    </a>
                                    <i class="fa fa-close" @click="deletableSelectedName = n.name" v-b-modal.delete_image style="    position: absolute;
    text-align-last: center;
    padding: 4px;
    cursor: pointer;
    right: 0;
    width: 15%;
    background: whitesmoke;"></i>
                                </figure>
                                <VueGallery
                                        :images="biglightgallery"
                                        :index="gindex"
                                        @close="gindex = null"
                                        :options="galleryoptions"
                                ></VueGallery>
                                <input type="file" class="hidden" name="gallery" multiple @change="selectFiles"
                                       accept="image/*" ref="uploadImgInput">
                                <figure id="uploadDiv" class="col-xl-2 col-sm-3 m-0"
                                        v-for="(nd,index) in uploads"
                                        :key="'image_'+index"
                                        @click="$refs.uploadImgInput.click()"
                                >
                                    <a>
                                        <img :src="getpath(nd.image)"
                                             class="img-thumbnail" style="object-fit: cover;"
                                             alt="Image description"/>
                                    </a>
                                    <b-progress v-if="nd.progress > 0" class="sm-progress-bar"
                                                :value.prop="nd.progress"
                                                :max="100"
                                                variant="primary"></b-progress>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Vertically centered Modal Component -->
        <b-modal id="upload_logo" size="lg" style="max-width: 100% !important;" centered title="Upload Logo"
                 @ok="uploadLogo" @cancel="removeLogoImage" @close="removeLogoImage" ok-title="Set Logo"
                 class="theme-modal">
            <div class="row">
                <div class="col-12" v-if="logoCropped">
                    <div class="row">
                        <div class="col-8">
                            <img :src="cropImg" style="max-width: 60%!important;">
                        </div>
                        <div class="col-4">
                            <b-button style="float: right" color="success" @click="setLogoCropped(false)">Edit
                            </b-button>
                        </div>
                    </div>
                </div>
                <div class="col-12" v-else-if="logoImage">
                    <div class="img-container">
                        <div class="row">
                            <div class="col-8">
                                <vue-cropper
                                        ref='cropper'
                                        :guides="true"
                                        :view-mode=viewmodeselected
                                        drag-mode="crop"
                                        :aspectRatio=aspectRatioselected
                                        :auto-crop-area="0.5"
                                        :min-container-width="200"
                                        :min-container-height="200"
                                        :background="true"
                                        :rotatable="true"
                                        :movable="true"
                                        :src="croppableLogoImage"
                                        alt="Source Image"
                                        :ready="ready"
                                        :crop="cropImage"
                                        :img-style="{ 'width': '400px', 'height': '500px' }">
                                </vue-cropper>
                            </div>
                            <div class="col-4">
                                <b-button style="float:right;" color="success" @click="setLogoCropped(true)">Save
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6" v-else>
                    <div>
                        Upload Logo
                        <input type="file" name="logoImage" @change="setLogoImage">
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal id="delete_image" centered title="Delete Image"
                 @ok="deleteGallery"
                 ok-title="Delete"
                 class="theme-modal">
            <p>Are you Sure you Want to Delete this Image?</p>
        </b-modal>

    </div>
</template>

<script>
    import VueGallery from "vue-gallery";
    import config from '../../../config.json';
    import axios from 'axios'
    import apiUrls from "../../../_helpers/apiUrls";

    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';

    export default {
        data() {
            return {
                gindex: null,
                lightgallery: [],
                viewmodeselected: 0,
                propId: this.$store.getters.getProperty[0].id,
                selectedFiles: undefined,
                logoImage: null,
                croppableLogoImage: '',
                dragAndDropCapable: false,
                progressInfos: [],
                logoCropped: false,
                logoImageShow: this.$store.getters.getProperty[0].logo != null ? this.$store.getters.getProperty[0].logo + '-xl.webp' : null,
                featuredImageShow: null,
                cropImg: '',
                featured: null,
                deletableSelectedName: null,
                viewmodeOptions: [
                    {text: 'VM0', value: 0},
                    {text: 'VM1', value: 1},
                    {text: 'VM2', value: 2},
                    {text: 'VM3', value: 3},
                ],
                aspectRatioselected: 1,
                aspectRatioOptions: [
                    {text: '16:9', value: 1.7777777777777777},
                    {text: '4:3', value: 1.3333333333333333},
                    {text: '1:1', value: 1},
                    {text: '2:3', value: 0.6666666666666666},
                    {text: 'Free', value: NaN}
                ],
                message: "",
                uploads: [{
                    image: 'upload-image.png',
                    mainImage: null,
                    progress: 0
                }],
                fileInfos: [],
                image: [],
                biglightgallery: [],
                galleryoptions: {
                    prevClass: "prev",
                    nextClass: "next"
                }
            };
        },
        components: {
            VueGallery,
            VueCropper,
        },
        methods: {
            getImages() {
                this.logoImageShow = this.$store.getters.getImage[0].logo != null ? this.$store.getters.getImage[0].logo + '-md.webp' : null
                this.featuredImageShow = this.$store.getters.getImage[0].featured != null ? this.$store.getters.getImage[0].featured + '-md.webp' : null

            },
            setLogoImage(e) {
                this.croppableLogoImage = URL.createObjectURL(e.target.files[0])
                this.logoImage = e.target.files[0]
            },
            removeLogoImage() {
                this.croppableLogoImage = ''
                this.logoImage = null
                this.logoCropped = false
            },
            setLogoCropped(val) {
                this.logoCropped = val
            },
            ready() {
                this.containerData = this.$refs.cropper.getContainerData();
            },
            getImgUrl() {
                return this.getpath('upload-image.png')
            },
            cropImage() {
                this.imageData = this.$refs.cropper.getData();
                // console.log('imageData', this.imageData);
                // console.log('imageData', this.$refs.cropper.getCroppedCanvas().toDataURL('image/png'));

                this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL('image/png');
            },
            uploadLogo() {
                let formData = new FormData()

                formData.append('logo', this.cropImg)
                formData.append('id', this.propId)

                axios.post(apiUrls.uploadGallery,
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                    }).then((res) => {
                    if (res.data.status == 1) {
                        this.$store.commit('setLogo', res.data.image)
                        this.getGallery()
                    }
                }).catch((err) => {
                    console.log(err)
                });
            },
            uploadFile() {
                if (this.uploads.length !== 0) {
                    for (var i = 0; i < this.uploads.length; i++) {
                        console.log(this.uploads)
                        let formData = new FormData()

                        formData.append('gallery', this.uploads[i].mainImage)
                        formData.append('id', this.propId)

                        axios.post(apiUrls.uploadGallery,
                            formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                            }).then((res) => {
                            if (res.data.status != 1) {
                                this.getGallery()
                            }
                        }).catch((err) => {
                            console.log(err)
                        });
                        if (i == (this.uploads.length - 1)) {
                            this.alert('Images Uploaded Successfully', 'success', 'success', 'top-center')
                            this.uploads = [{
                                image: 'upload-image.png',
                                mainImage: null,
                                progress: 0
                            }]
                        }
                    }
                }
            },
            uploadFeatured(e) {
                if (e.target.files[0] != null) {
                    let formData = new FormData()
                    formData.append('featured', e.target.files[0])
                    formData.append('id', this.propId)

                    axios.post(apiUrls.uploadGallery,
                        formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                        }).then((res) => {
                        if (res.data.status == 1) {
                            this.$store.commit('setFeatured', res.data.image)
                            this.getGallery()
                        }
                    }).catch((err) => {
                        console.log(err)
                    });
                }
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
            selectFiles(e) {
                var selectedFiles = e.target.files;
                this.uploads = []
                for (let i = 0; i < selectedFiles.length; i++) {
                    // console.log(selectedFiles[i])
                    this.uploads.push({
                        mainImage: selectedFiles[i],
                        image: URL.createObjectURL(selectedFiles[i]),
                        progress: 10
                    });
                }
                this.uploadFile()
            },
            setimagesparth() {
                for (var i = 0; i < this.biglightgallery.length; i++) {
                    this.biglightgallery[i] = this.getbigimgpath(this.biglightgallery[i]);
                }
            },
            getpath(filename) {
                return config.apiUrl.images + filename;
            },
            getpropertyPath(filename) {
                return config.apiUrl.propertyImage + this.propId + '/gallery/' + filename;
            },
            getpropertyLogo(filename) {
                return config.apiUrl.propertyImage + this.propId + '/logo/' + filename;
            },
            getpropertyFeatured(filename) {
                return config.apiUrl.propertyImage + this.propId + '/featured/' + filename;
            },
            getbigimgpath(filename) {
                return config.apiUrl.propertyImage + this.propId + '/gallery/' + filename;
            },
            getLogoPlaceholder(val) {
                return config.apiUrl.images + val
            },
            getFeaturedPlaceholder(val) {
                return config.apiUrl.images + val
            },
            deleteGallery(){
                console.log(this.deletableSelectedName)
                axios.post(apiUrls.deleteGallery,{
                    id: this.propId,
                    name: this.deletableSelectedName
                })
                .then((res)=>{
                    this.getGallery()
                    this.alert('Image Deleted Successfully','success','success','top-center')
                    console.log(res)
                })
                .catch(()=>{

                })
            },
            getGallery() {
                this.lightgallery = []
                this.biglightgallery = []
                this.featuredImageShow = this.$store.getters.getProperty[0].featured != null ? this.$store.getters.getProperty[0].featured + '-md.webp' : null
                axios.get(apiUrls.getGallery + '/' + this.propId + '/all')
                    .then((res) => {
                        console.log(res)
                        this.$store.commit('setLoading', false)
                        if (res.data.status != 0) {
                            this.$store.commit('setLogo', res.data.status[0].logo)
                            this.$store.commit('setFeatured', res.data.status[0].featured_image)
                            this.logoImageShow = res.data.status[0].logo != null ? res.data.status[0].logo + '-md.webp': null
                            this.featuredImageShow = res.data.status[0].featured_image != null ? res.data.status[0].featured_image + '-md.webp': null
                            if (res.data.status[0].gallery_image != null) {
                                if (res.data.status[0].gallery_image.length != 0) {
                                    for (var i = 0; i < res.data.status[0].gallery_image.length; i++) {
                                        this.lightgallery.push({image: res.data.status[0].gallery_image[i] + '-sm-350x200.webp',name:res.data.status[0].gallery_image[i]})
                                        this.biglightgallery.push(this.getbigimgpath(res.data.status[0].gallery_image[i] + '-xl.webp'))
                                    }
                                }
                            }
                        }
                    }).catch((err) => {
                    console.log(err)
                });
            }
        },
        mounted() {
            this.setimagesparth()
            this.getGallery()
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
        }
    };
</script>
<style>
    .imagesBadge {
        position: absolute;
        z-index: 999;
        left: 0;
        padding: 13px 12px;
    }

    .imagesBadge p {
        background: rgb(0, 0, 0, .7);
        color: white;
        font-size: 20px;
        border-radius: 7px;
        padding: 0px 15px;
    }
</style>