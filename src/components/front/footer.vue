<template>
    <div>
        <section class="py-5 bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2 class="sm-title">
                            <i class="fa fa-map-marker-alt pp"></i>
                            Find Us
                        </h2>
                        <p>Dehradun,Uttarakhand</p>
                    </div>
                    <div class="col-md-4">
                        <h2 class="sm-title">
                            <i class="fa fa-phone pp"></i>
                            Contact Us
                        </h2>
                        <p>+91 8745214587</p>
                    </div>
                    <div class="col-md-4">
                        <h2 class="sm-title">
                            <i class="fa fa-envelope pp"></i>
                            Mail
                        </h2>
                        <p>contact@Yogprerna.com</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <img src="../../assets-front/images/logo.png" width="200px" alt="Yogprerna">
                        <p class="py-3">The next generation of the web’s favorite icon library + toolkit is now
                            available as a Beta release! Subscribe to Font Awesome Pro and get instant access to the v6
                            beta. </p>
                        <h4>
                            Follow Us
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-instagram-square"></i></a>

                        </h4>

                    </div>
                    <div class="col-md-2">
                        <h3 class="sm-title">Useful Links</h3>
                        <ul class="highlight-points-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h3 class="sm-title">About Us</h3>
                        <ul class="highlight-points-1">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Details</a></li>
                            <li><a href="#">Expert Team</a></li>
                            <li><a href="#">Latest News</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h3 class="sm-title">Subscribe</h3>
                        <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                        <form action="">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control mb-3" id="exampleInputEmail1"
                                       aria-describedby="emailHelp">
                                <button type="submit" class="btn site-btn-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="small">Copyright &copy; 2021,All Right Reserved</p>
                    </div>
                    <div class="col-md-6">
                        <!-- <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Contact</a></li>
                            </ul> -->
                    </div>
                </div>
            </div>
        </section>


        <!-- Modal -->
        <b-modal id="front-search-modal" :no-close-on-esc="true" size="lg" title="Search Anything...."
                 class="theme-modal">
            <div class="sticky-top bg-light p-0 m-0">
                <input class="form-control pt-2 mb-1" v-model="search" placeholder="Type to search...">
                <p class="mb-0 px-2 text-secondary">Search for: <i class="font-weight-bold">Adiyogi</i></p>
            </div>
            <div class="search-result pr-3" v-if="searchData.length > 0">
                <router-link :to="generateRoute(data)"
                             @click.native="$bvModal.hide('front-search-modal')"
                             v-for="(data,i) in searchData" :key="i">
                    <div>
                        <img v-if="data.gallery != null" :src="getLogo(data.gallery.logo,data.id)" width="20px" alt="">
                        <p class="d-inline-block">{{data.name}}</p>
                        <p class="d-inline-block float-right">{{data.state_id ? 'Yoga Listing':'Institute'}}</p>
                    </div>
                </router-link>
            </div>
            <div class="search-result pr-3" v-else-if="searchData.status == 0">
                <h3>No Property Found</h3>
            </div>
        </b-modal>

        <!--      <footer class="footer noMargin">-->
        <!--          <div class="container-fluid">-->
        <!--            <div class="row">-->
        <!--              <div class="col-md-12 footer-copyright text-center">-->
        <!--                  <p class="mb-0">Copyright 2020 © <a href="/">Yogprerna</a>  </p>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </footer>-->
    </div>
</template>
<script>
    import json from '../../data/menu'
    import config from '../../config.json'

    export default {
        name: 'footerpage',
        data() {
            return {
                customizer: false,
                searchData: [],
                search: '',
                data: "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json)),
            }
        },
        watch: {
            search: function (val) {
                this.searchText(val)
            }
        },
        methods: {
            searchText(val) {
                this.$store.dispatch('search/modalSearch', val)
                    .then((res) => {
                        console.log(res)
                        this.searchData = res.data;
                    }).catch(err => {
                    console.error(err)
                })
            },
            getLogo(image, id) {
                return config.apiUrl.propertyImage + id + '/logo/' + image + '-sm.webp'
            },
            generateRoute(data) {
                if(data.state_id){
                    return {
                        name: 'search',
                        params: {
                            location: data.name.toLowerCase(),
                        }
                    }
                }else {
                    return {
                        name: 'propertyDetail',
                        params: {
                            slug: data.seo != null ? data.seo[0].permalink : '',
                            city: data.city.name.toLowerCase()
                        }
                    }
                }
            }
        }
    }
</script>
<style>
    .noMargin {
        margin: 0 !important;
    }
</style>
