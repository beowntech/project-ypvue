<template>
    <div class="main-cont" id="main-temp">
        <section class="vh-80 bg-search-img"
                 v-bind:style="{ backgroundImage: 'url(' + getImage + ')' }"
                 style="background-size:cover;background-position: center;box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.4);">
            <div class="container align-middle py-5">
                <div class="row ">
                    <div class="col-md-6 offset-md-3 text-center">
                        <h1 class="gradient-heading text-white text-shadow">Search</h1>
                        <h4 class="text-white text-shadow">Yoga Institute, Yoga Courses</h4>

                        <div class="search-bar px-3 mt-3">
                            <input class="form-control rounded-pill" id="exampleDataList" v-b-modal.front-search-modal
                                   placeholder="Type to search..." data-toggle="modal" data-target="#searchModal">
                        </div>
                    </div>

                </div>
                <div class="row mt-5 sm-sc mx-0">

                    <div class="col-md-3 col-6 text-center">
                        <a href="#">
                            <div class="service-card-1">
                                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                <h1>Yoga Institute</h1>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <a href="#">
                            <div class="service-card-1">
                                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                <h1>Yoga Courses</h1>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <a href="#">
                            <div class="service-card-1">
                                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                <h1>Yoga Trainer</h1>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <a href="#">
                            <div class="service-card-1">
                                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                <h1>Online Yoga</h1>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </section>


        <section class="py-5 bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="site-heading mb-3">Yogprerna is the best way to find your Yoga Places</h1>
                        <p class="site-subheading mb-3">If success is a process with a number of defined steps, then it
                            is just like any other process.</p>
                        <p>Making a decision to do something – this is the first step. We all know that nothing moves
                            until someone makes a decision. The first action is always in making the decision to
                            proceed. This is a fundamental step, which most people overlook.</p>
                        <ul class="highlight-points-1">
                            <li>Projects & residentials completed in 2020 workers with us</li>
                            <li>Building Relationships With Clients All Over The World!</li>
                            <li>Offering high quality construction solutions Build Your.</li>
                            <li>Building Relationships With Clients All Over The World!</li>
                            <li>Offering high quality construction solutions Build Your.</li>
                        </ul>
                        <a href="#" class="btn site-btn-2 my-3"> Join Us </a>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-img-1">
                            <img src="../assets-front/images/site/yoga.jpg" alt="Yoga images">
                            <div class="feature-text">
                                <h2>2K</h2>
                                <p>Above 200 Yoga Institute</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="md-title mb-3">Find Yoga institute by Courses</h1>
                        <p class="site-subheading mb-3">If success is a process with a number of defined steps, then it
                            is just like any other process.</p>
                    </div>
                </div>
                <div class="row mt-4 sm-sc mx-0">
                    <div class="col-md-3 col-6 text-center" v-for="(data,i) in courses" :key="i">
                        <template v-if="i <= 11">
                            <a href="#">
                                <div class="service-card-1">
                                    <!-- <i class="fa fa-graduation-cap" aria-hidden="true"></i>                 -->
                                    <h1>{{data.name}}</h1>
                                </div>
                            </a>
                        </template>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <a href="#">
                            <div class="service-card-1">
                                <!-- <i class="fa fa-plus" aria-hidden="true"></i> -->
                                <h1>View All</h1>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </section>

        <section class="bgp">
            <div class="container text-white">
                <div class="row">
                    <div class="col-md-6 py-5">
                        <h1><i class="fa fa-map-marked-alt"></i> Find What you want</h1>
                        <p>Give yourself the power of responsibility. Remind yourself the only thing stopping you is
                            yourself.</p>
                        <a href="#" class="btn site-btn-transparent-2 mt-4 border-white">Browse Yoga Institute</a>
                    </div>
                    <div class="col-md-6 py-5 bgt">
                        <h1><i class="fa fa-hand-holding-usd"></i> Compare & Save Money</h1>
                        <p>Give yourself the power of responsibility. Remind yourself the only thing stopping you is
                            yourself.</p>
                        <a href="#" class="btn site-btn-transparent-2 mt-4 border-white">compare Yoga Institute</a>
                    </div>
                </div>
            </div>
        </section>


        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="md-title mb-3">Find Yoga institute by Location</h1>
                        <p class="site-subheading mb-3">If success is a process with a number of defined steps, then it
                            is just like any other process.</p>
                    </div>
                </div>
                <div class="row mt-4 sm-sc mx-0">
                    <div class="col-md-3 col-6 text-center" v-for="(data,j) in cities" :key="j">
                        <template v-if="j <= 11">
                            <a href="#">
                                <div class="service-card-1">
                                    <!-- <i class="fa fa-graduation-cap" aria-hidden="true"></i>                 -->
                                    <h1>{{data.name}}</h1>
                                </div>
                            </a>
                        </template>
                    </div>
                    <div class="col-md-3 col-6 text-center">
                        <a href="#">
                            <div class="service-card-1">
                                <!-- <i class="fa fa-plus" aria-hidden="true"></i> -->
                                <h1>View All</h1>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // import '/ass';
    // import "@/assets/css/bootstrap.min.css";
    import axios from 'axios'
    import apiUrls from "../_helpers/apiUrls";
    import config from '../config.json'

    export default {
        name: "landing",
        data() {
            return {
                courses: [],
                cities: [],
            }
        },
        methods: {
            getCourses() {
                axios.post(apiUrls.getTempCourse)
                    .then((res) => {
                        this.courses = res.data
                    }).catch((err) => {
                    console.log(err)
                })
            },
            getCities() {
                axios.get(apiUrls.cities)
                    .then((res) => {
                        this.cities = res.data
                    }).catch((err) => {
                    console.log(err)
                })
            },
            getImage(){
                return config.apiUrl.images + 'bg-main.jpg'
            }
        },
        created() {
            this.getCourses()
            this.getCities()
        }
    }
</script>

<style scoped>
    a {
        color: black !important;
    }

    .btn {
        background: yellow !important;
    }

    /*.main-cont  /deep/ {*/
    /*@*/
    /*}*/

    * a{
          color: initial;
    }

</style>