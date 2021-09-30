<template>
    <div>
        <Breadcrumbs main="Home" title="Search"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 xl-40">
                    <div class="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
                        <div class="row">
                            <div class="col-xl-12">
                                <b-card no-body>
                                    <b-card-header header-tag="div" role="tab">
                                        <h5 class="mb-0">
                                            <b-button class="btn btn-link pl-0" block v-b-toggle.collapseicon>
                                                Cities
                                            </b-button>
                                        </h5>
                                    </b-card-header>
                                    <b-collapse id="collapseicon" visible role="tabpanel">
                                        <b-card-body class="filter-cards-view animate-chk">
                                            <div class="checkbox-animated" v-for="(data,i) in cities.data" :key="i">
                                                <label class="d-block" :for="'cities-'+data.id">
                                                    <input class="checkbox_animated" :id="'cities-'+data.id" v-model="selectedCities" :value="data.id" type="checkbox">
                                                    {{data.name}}
                                                </label>
                                            </div>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </div>
                    </div>
                    <div class="default-according style-1 faq-accordion job-accordion" id="accordionoc2">
                        <div class="row">
                            <div class="col-xl-12">
                                <b-card no-body>
                                    <b-card-header header-tag="div" role="tab">
                                        <h5 class="mb-0">
                                            <b-button class="btn btn-link pl-0" block v-b-toggle.collapseicon>
                                                Course
                                            </b-button>
                                        </h5>
                                    </b-card-header>
                                    <b-collapse id="collapseicon" visible role="tabpanel">
                                        <b-card-body class="filter-cards-view animate-chk">
                                            <div class="checkbox-animated" v-for="(data,i) in courses" :key="i">
                                                <label class="d-block" :for="'courses-'+data.id">
                                                    <input class="checkbox_animated" :id="'courses-'+data.id" v-model="selectedCourse" :value="data.id" type="checkbox">
                                                    {{data.temporary.name}}
                                                </label>
                                            </div>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-xl-9 xl-60">
                    <div class="row mb-3">
                        <div class="col-xl-6">
                            <p>Showing {{searchList.data.length}} out of {{totalRows}} - Page: {{currentPage}}</p>
                        </div>
                        <div class="col-xl-6">
                            <b-button class="float-right" color="success" @click="sortReview">{{"Review "+reviewSort.toUpperCase()}}</b-button>
                        </div>
                    </div>
                    <div class="card" v-for="(data,index) in searchList.data" :key="index"
                         :class="{'ribbon-vertical-left-wrapper': data.verified == 1 }">
                        <div v-if="data.verified == 1"
                             class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i
                                class="icofont icofont-love"></i></div>
                        <div class="job-search">
                            <div class="card-body">
                                <div class="media"><img class="img-40 img-fluid m-r-20" v-if="data.gallery != null"
                                                        :src="getPath(data.gallery.logo,data.id)" alt="">
                                    <div class="media-body">
                                        <h6 class="f-w-600">
                                            <router-link
                                                    :to="{ name: 'propertyDetail', params: { slug: data.seo != null ? data.seo[0].permalink:'',city: data.city.name.toLowerCase() }}">
                                                {{ data.name }}
                                            </router-link>
                                            <span class="pull-right" v-if="data.created_at"
                                                  v-text="data.created_at"></span>
                                            <span class="badge badge-primary pull-right" v-else>New</span>
                                        </h6>
                                        <p>{{ data.website }}
                                            <span>{{ data.city.name }}, {{ data.state.name }} </span>
                                            <star-rating v-model="data.reviews_avg_star" :star-size="15" :max-rating="5" :show-rating="false" :read-only="true"></star-rating>
<!--                                            <span-->
<!--                                                    v-html="stars(data.reviews_avg_star)"></span>-->
</p>
                                    </div>
                                </div>
                                <p>{{data.bio|stripHTML|truncatesmall}}</p>
                            </div>
                        </div>
                    </div>
                    <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="3"
                            aria-controls="my-table"
                            class="pagination-info"
                            align="right"
                    ></b-pagination>
                    <!--                    <div class="job-pagination">-->
                    <!--                        <nav aria-label="Page navigation example">-->
                    <!--                            <ul class="pagination pagination-primary">-->
                    <!--                                <li class="page-item" :class="{-->
                    <!--                                    'disable': !data.active,-->
                    <!--                                    'active':data.active-->
                    <!--                                }" v-for="(data,index) in searchList.links" :key="index">-->
                    <!--                                    <a class="page-link" href="#">{{data.label | stripHTML}}</a>-->
                    <!--                                </li>-->
                    <!--&lt;!&ndash;                                <li class="page-item active"><a class="page-link" href="#">1</a></li>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <li class="page-item"><a class="page-link" href="#">2</a></li>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <li class="page-item"><a class="page-link" href="#">3</a></li>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <li class="page-item"><a class="page-link" href="#">Next</a></li>&ndash;&gt;-->
                    <!--                            </ul>-->
                    <!--                        </nav>-->
                    <!--                    </div>-->
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>
<script>
    import {mapState} from "vuex";
    import config from '../config.json'
    import StarRating from 'vue-star-rating';

    export default {
        name: 'Search',
        data() {
            return {
                city: this.$route.query.city != undefined ? this.$route.query.city : null,
                course: this.$route.query.course != undefined ? this.$route.query.course : null,
                searchText: "",
                locationText: "",
                currentPage: 1,
                totalRows: 1,
                selectedCities: [],
                selectedCourse: [],
                reviewSort: "desc"
            }
        },
        computed: {
            ...mapState({
                searchList: state => state.search.searchList,
                cities: state => state.location.cities,
                courses: state => state.course.courses,
            })
        },
        components:{
            StarRating,
        },
        watch: {
            selectedCities:function (val) {
                this.city = val
                if(val.length > 0) {
                    const query = {...this.$route.query, city: val.toString().replace('[', '').replace(']', '')};
                    this.$router.replace({query}).catch(() => {
                    })
                }else{
                    const query = Object.assign({}, this.$route.query);
                    delete query.city;
                    this.$router.replace({ query });
                }
                this.searchData()
            },
            selectedCourse: function (val) {
                this.course = val
                if(val.length > 0) {
                    const query = {...this.$route.query, course: val.toString().replace('[', '').replace(']', '')};
                    this.$router.replace({query}).catch(() => {
                    })
                }else{
                    const query = Object.assign({}, this.$route.query);
                    delete query.course;
                    this.$router.replace({ query });
                }
                this.searchData()
            },
            currentPage: function () {
              this.searchData()
            },
            searchText: function (val) {
                let data = [{'text': val, 'location': val, 'page': this.currentPage}]
                this.$store.dispatch('search/fetchSearch', data)
                    .then((res) => {
                        console.log(res)
                        this.currentPage = res.data.current_page
                        this.totalRows = res.data.total
                    }).catch(err => {
                    console.error(err)
                })
            },
            locationText: function (val) {
                if (val != "") {
                    let data = [{'location': val, 'text': this.searchText, 'page': this.currentPage}]
                    this.$store.dispatch('search/fetchSearch', data)
                        .then((res) => {
                            console.log(res)
                            this.currentPage = res.data.current_page
                            this.totalRows = res.data.total
                        }).catch(err => {
                        console.error(err)
                    })
                }
            }
        },
        methods: {
            getImgUrl(filename) {
                var images = require.context('../assets/images/job-search/', false, /\.jpg$/)
                return images('./' + filename)
            },
            stars(count) {
                var stars = ""

                for (var i = 0; i < 5; i++) {
                    if (count > i) {
                        stars = stars + '<i class="fa fa-star font-warning"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star font-warning-o"></i>';
                    }
                }

                return stars;
            },
            getPath(image, id) {
                return config.apiUrl.propertyImage + id + '/logo/' + image + '-lg.webp'
            },
            searchData(){
                let data = [];
                if (this.city != null) {
                    data = {city: this.$route.params.location, cities: this.city, page: this.currentPage,review: this.reviewDesc}
                }else{
                    data = {city: this.$route.params.location, page: this.currentPage,review: this.reviewDesc}
                }
                console.log(data)
                this.$store.dispatch('search/fetchSearch', data)
                    .then((res) => {
                        console.log(res)
                        this.currentPage = res.data.current_page
                        this.totalRows = res.data.total
                    }).catch(err => {
                    console.error(err)
                })
            },
            sortReview(){
                if(this.reviewDesc == "asc") {
                    this.reviewDesc = 'desc'
                }else{
                    this.reviewDesc = 'asc'
                }
                this.searchData()
            }
        },
        created() {
            if(this.city != null){
                this.selectedCities = JSON.parse('['+this.city+']')
            }
            if(this.course != null){
                this.selectedCourse = JSON.parse('['+this.course+']')
            }
            this.$store.dispatch('location/fetchCity')
            this.$store.dispatch('course/fetchCourses')
            this.searchData()
            // this.$store.commit('search/REMOVE_LIST')
        }
    }
</script>
