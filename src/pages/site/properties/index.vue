<template>
    <div>
        <Breadcrumbs main="Properties" :button-enable="true" @action="openAddProperty" :button-title="'Add New Property'" title="properties"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8"></div>
                <div class="col-md-4">
                    <b-input type="text" placeholder="Search Property" v-model="searchQuery"></b-input>
                </div>
                <div class="col-md-12 mt-3">
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
                                                class="fa fa-check-circle-o"></i></span> <b-badge v-if="data.property_type == '2'" variant="primary">Institute</b-badge>
                                        </div>
                                        <p style="font-size: 15px;">{{
                                            data.location != null ?
                                            (data.city != null ?
                                            (data.location.address != null ?data.location.address+',  ':'')+data.city.name+', '+data.state.name: 'No Address')
                                            : 'No Address' }}</p>
                                    </div>

                                    <div class="col-2 px-2">

                                    </div>
                                    <div>
                                        <Doughnut :completed="data.progress" :not-completed="100 - data.progress"
                                                  style="height: 70px !important;width: 70px!important;"/>
                                    </div>
                                    <div class="col-1 px-1 text-center align-self-center">
                                        <router-link class="text-primary" target="_blank" :to="{ name: 'propertyDetail', params: { slug: data.seo != null ? data.seo[0].permalink:'',city: data.city.name.toLowerCase() }}">
                                            <i class="fa fa-eye" style="font-size: 18px"></i>
                                        </router-link>
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
                                        :limit="20"
                                        :pills="true"
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
                totalRows: 1,
                searchQuery:""
            }
        },
        mounted() {
            this.$root.$on('property', () => {
                this.getProperties()
            })
        },
        watch: {
            currentPage: function () {
                if(this.searchQuery == "") {
                    this.getProperties()
                }
            },
            searchQuery: function (val) {
                if(val != ""){
                    console.log(val)
                    this.searchProp()
                }else{
                    this.getProperties()
                }
            }
        },
        methods: {
            openAddProperty(){
              this.$bvModal.show('add_property')
            },
            searchProp(){
                axios.get(api.searchProp + '?token=' + this.$store.getters.getToken + '&data=' + this.searchQuery)
                    .then((res) => {
                        console.log(res)
                        this.properties = res.data.data;
                        this.currentPage = res.data.current_page
                        this.totalRows = res.data.total
                        this.propertiesLoading = false
                    }).catch((err) => {
                    this.$store.commit('logoutUser')
                    this.$router.replace({name: 'Login'})
                    console.log(err)
                })
            },
            getProperties() {
                this.properties = []
                this.propertiesLoading = true
                console.log(this.$store.getters.getToken)
                axios.get(api.getProperties + '?token=' + this.$store.getters.getToken + '&page=' + this.currentPage)
                    .then((res) => {
                        console.log(res)
                        if(res.data.total == 1){
                            this.$store.commit('setProperty', res.data.data[0])
                            this.$router.push({path:'/admin/dashboard'})
                        }
                        this.properties = res.data.data;
                        this.currentPage = res.data.current_page
                        this.totalRows = res.data.total
                        this.propertiesLoading = false
                    }).catch((err) => {
                    this.$store.commit('logoutUser')
                    this.$router.replace({name: 'Login'})
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
                this.$router.push({path:'/admin/property/info'})
            },
            viewProperty(data){
                this.$router.push({path:'/admin/property/info'})
            }
        },
        beforeMount() {
            this.$store.commit('removeProperty')
            this.getProperties()
        },
        components: {Doughnut,modals}
    }
</script>
