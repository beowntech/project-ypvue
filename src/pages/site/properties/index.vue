<template>
    <div>
        <Breadcrumbs main="Properties" :button-enable="true" @action="openAddProperty" :button-title="'Add New Property'" title="properties"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body parab-0" v-if="properties.length != 0">
                            <div v-for="(data,index) in properties" :key="index">
                                <div class="row">
                                    <div class="col-1 px-1  text-center">
                                        <img :src="data.gallery != null ? data.gallery.logo ?  getPropertyLogo(data.id,data.gallery.logo) : 'http://localhost:8000/watermark/watermark.png' : 'http://localhost:8000/watermark/watermark.png'"
                                             alt="#" width="100%"
                                             class="border rounded-circle">
                                    </div>
                                    <div class="col-6 px-2">
                                        <div class="font-weight-bold" style="font-size: 19px;cursor: pointer;"
                                             @click.stop="selectProperty(data)">{{data.name}} <span
                                                v-if="data.verified == '1'" class="text-success">Verified  <i
                                                class="fa fa-check-circle-o"></i></span>
                                        </div>
                                        <p style="font-size: 15px;">{{
                                            data.location != null ?
                                            (data.location.cities != null ?
                                            (data.location.address != null ?data.location.address+',  ':'')+data.location.cities.name+', '+data.location.states.name+', '+data.location.countries.name: 'No Address')
                                            : 'No Address' }}</p>
                                    </div>

                                    <div class="col-2 px-2">

                                    </div>
                                    <div>
                                        <Doughnut :completed="data.progress" :not-completed="100 - data.progress"
                                                  style="height: 70px !important;width: 70px!important;"/>
                                    </div>
                                    <div class="col-1 px-1 text-center align-self-center">
                                        <i class="fa fa-eye" style="font-size: 18px"></i>
                                    </div>
                                    <div class="col-1 px-1 text-center align-self-center"
                                         @click.stop="editProperty(data)"><i
                                            class="fa fa-pencil-square-o" style="font-size: 18px;cursor: pointer"></i>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div>
                                <b-pagination
                                        v-model="currentPage"
                                        :total-rows="totalRows"
                                        :per-page="10"
                                        aria-controls="my-table"
                                        class="pagination-info"
                                        align="right"
                                ></b-pagination>
                            </div>
                        </div>
                        <div v-else-if="propertiesLoading">
                            <div class="loader-box">
                                <div class="loader-30"></div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="page-wrapper">
                                <!-- error-400 start-->
                                <div class="error-wrapper" style="min-height: 50vh!important;">
                                    <div class="container"><img class="img-100"
                                                                src="../../../assets/images/other-images/sad.png"
                                                                alt="">
                                        <div class="col-md-8 offset-md-2">
                                            <h5 class="sub-content font-info f-24">No Property Found</h5>
                                        </div>
                                    </div>
                                </div>
                                <!-- error-400 end-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <modals></modals>
    </div>
</template>
<script>
    import axios from 'axios';
    import api from '../../../_helpers/apiUrls'
    import Doughnut from "./chart/Doughnut";

    import config from '../../../config.json'
    import modals from "../../../components/modals";

    export default {
        name: "property",
        data() {
            return {
                userName: "",
                address: null,
                properties: [],
                propertiesLoading: false,
                currentPage: 1,
                totalRows: 1
            }
        },
        mounted() {
            this.$root.$on('property', () => {
                this.getProperties()
            })
        },
        watch: {
            currentPage: function () {
                this.getProperties()
            }
        },
        methods: {
            openAddProperty(){
              this.$bvModal.show('add_property')
            },
            getProperties() {
                this.properties = []
                this.propertiesLoading = true
                axios.get(api.getProperties + '?token=' + this.$store.getters.getToken + '&page=' + this.currentPage)
                    .then((res) => {
                        this.properties = res.data.data;
                        this.currentPage = res.data.current_page
                        this.totalRows = res.data.total
                        this.propertiesLoading = false
                    }).catch((err) => {
                    this.$store.commit('logoutUser')
                    this.$router.replace('/auth/login')
                    console.log(err)
                })
            },
            getPropertyLogo(id, logo) {
                return config.apiUrl.propertyImage + id + '/logo/' + logo + '-md.webp'
            },
            selectProperty(data) {
                this.$store.commit('setProperty', data)
                this.$router.push({path:'/admin/dashboard'})
            },
            editProperty(data) {
                this.$store.commit('setProperty', data)
                this.$router.push({path:'/admin/info'})
            }
        },
        beforeMount() {
            this.$store.commit('removeProperty')
            this.getProperties()
        },
        components: {Doughnut,modals}
    }
</script>
