<template>
    <div>
        <div v-if="progressInfos">
            <div class="row" itemscope itemprop="thumbnail">
                <figure
                        class="col-xl-3 col-sm-6 m-0"
                        v-for="(progressInfo, index) in progressInfos"
                        :key="index"
                        @click="gindex = index"
                >
                    <a>
                        <img :src="getpath(index)" class="img-thumbnail" alt="Image description"/>
                    </a>
                    <b-progress class="sm-progress-bar" :value="progressInfo.percentage" :max="100"
                                variant="primary"></b-progress>
                </figure>
                <VueGallery
                        :images="biglightgallery"
                        :index="gindex"
                        @close="gindex = null"
                        :options="galleryoptions"
                ></VueGallery>
            </div>
        </div>

        <div v-else-if="progressInfos.length == 0">
            <div class="row" itemscope itemprop="thumbnail">
                <figure class="col-xl-3 col-sm-6 m-0">
                    <a>
                        <img :src="getpath('upload-image.png')" class="img-thumbnail" alt="Image description"/>
                    </a>
                </figure>
                <VueGallery
                        :images="biglightgallery"
                        :index="gindex"
                        @close="gindex = null"
                        :options="galleryoptions"
                ></VueGallery>
            </div>
        </div>
    </div>
</template>

<script>
    import UploadService from "../_services/UploadFilesServices";
    import VueGallery from "vue-gallery";
    import config from "../config.json";

    export default {
        name: "upload-images",
        data() {
            return {
                selectedFiles: undefined,
                progressInfos: [],
                message: "",
                lightgallery: [
                    {
                        image: "upload-image.png"
                    },
                ],
                biglightgallery: [
                    "013.jpg",
                    "014.jpg",
                    "015.jpg",
                    "016.jpg",
                    "012.jpg",
                    "01.jpg",
                    "02.jpg",
                    "03.jpg",
                    "04.jpg",
                    "05.jpg",
                    "06.jpg",
                    "07.jpg"
                ],
                galleryoptions: {
                    prevClass: "prev",
                    nextClass: "next"
                },
                gindex: null,
                fileInfos: [],
            };
        },
        components: {
            VueGallery
        },
        methods: {
            selectFile() {
                this.progressInfos = [];
                this.selectedFiles = event.target.files;
            },
            uploadFiles() {
                this.message = "";

                for (let i = 0; i < this.selectedFiles.length; i++) {
                    this.upload(i, this.selectedFiles[i]);
                }
            },
            upload(idx, file) {
                this.progressInfos[idx] = {percentage: 0, fileName: file.name};

                UploadService.upload(file, (event) => {
                    this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
                })
                    .then((response) => {
                        let prevMessage = this.message ? this.message + "\n" : "";
                        this.message = prevMessage + response.data.message;

                        return UploadService.getFiles();
                    })
                    .then((files) => {
                        this.fileInfos = files.data;
                    })
                    .catch(() => {
                        this.progressInfos[idx].percentage = 0;
                        this.message = "Could not upload the file:" + file.name;
                    });
            },
            setimagesparth() {
                for (var i = 0; i < this.biglightgallery.length; i++) {
                    this.biglightgallery[i] = this.getbigimgpath(this.biglightgallery[i]);
                }
            },
            getpath(filename) {
                return config.apiUrl.images + filename;
            },
            getbigimgpath(filename) {
                return require("@/assets/images/big-lightgallry/" + filename);
            }
        },
        mounted() {
            UploadService.getFiles().then((response) => {
                this.fileInfos = response.data;
            });
        }
    };
</script>

<style scoped>

</style>