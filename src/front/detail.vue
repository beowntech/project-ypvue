<template>
    <div>
        <div class="card p-4 mx-2">
            <img v-if="data.gallery != null" :src="getLogo(data.gallery.logo,data.id)" style="width: 10%;">
            <h3>{{data.name}}</h3>
            <div v-html="data.bio" v-if="data.bio"></div>

            <div class="mb-3">Address: {{data.location != null ? data.location.address:""}}, {{data.city.name}},
                {{data.state.name}}, {{data.country.name}}
            </div>

            <p v-if="data.email">Email: {{data.email}}</p>
            <div class="mb-3" v-if="data.contact">Contact:
                <div style="display:inline-block;" v-for="(da,i) in JSON.parse(data.contact)" :key="i">{{da}}</div>
            </div>
            <p v-if="data.website">Website: {{data.website}}</p>
            <p v-if="data.meal">Meal: {{data.meal}}</p>
            <p v-if="data.timing">Timing: {{data.timing}}</p>
            <p v-if="data.daily_schedule">Daily Schedule: {{data.daily_schedule}}</p>
            <div v-if="data.gallery != null">Gallery:
                <div v-for="(image,j) in data.gallery.gallery_image" :key="j">
                    <img :src="getGallery(image,data.id)" style="width: 10%;">
                </div>
            </div>
            <div>Social Link:
                <div v-for="(social,i) in data.social.links" :key="i">
                    <a :href="social.link" target="_blank">{{social.social}}</a>
                </div>
            </div>
            <!--            {{data}}-->
        </div>
        <px-card :actions="false" class="mx-4" v-if="currentRole == 'user'">
            <div slot="headerCustom" v-if="!reviewSubmit">
                <h5>Review</h5>
            </div>
            <div v-if="reviewSubmit">
                <h3>Review Submitted. Thank you for your Review</h3>
            </div>
            <div slot="with-padding" v-else>
                <b-form class="needs-validation" @submit="submitReview">
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="form_image">Image</label>
                            <b-form-file id="form_image" v-model="form.image" @change="setImage"
                                         :state="form_result.image"
                                         placeholder="Choose File"></b-form-file>
                            <b-form-valid-feedback :state="form_result.image">Please select Image
                            </b-form-valid-feedback>
                        </div>
                        <div class="col-md-12 mb-3">
                            <star-rating v-model="form.rating" :star-size="20" :max-rating="5"
                                         :show-rating="false"></star-rating>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                            <label for="form_name">Name</label>
                            <b-form-input type="text" id="form_name" disabled v-model="form.name"
                                          :state="form_result.name"
                                          placeholder="First name"></b-form-input>
                            <b-form-valid-feedback :state="form_result.name">Lock Good</b-form-valid-feedback>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="form_email">Email</label>
                            <b-form-input type="email" id="form_email" disabled v-model="form.email"
                                          :state="form_result.email"
                                          placeholder="Email"></b-form-input>
                            <b-form-valid-feedback :state="form_result.last_name">Lock Good</b-form-valid-feedback>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="form_message">Message</label>
                            <b-form-textarea id="form_message" v-model="form.message" :state="form_result.message"
                                             placeholder="City"></b-form-textarea>
                            <b-form-invalid-feedback :state="form_result.message">Please provide a Message.
                            </b-form-invalid-feedback>
                        </div>
                    </div>
                    <b-button type="submit" variant="primary">Submit Form</b-button>
                </b-form>
            </div>
        </px-card>
    </div>
</template>

<script>
    import axios from 'axios';
    import apiUrls from "../_helpers/apiUrls";
    import config from '../config.json'
    import StarRating from 'vue-star-rating';

    export default {
        name: "propertyDetail",
        metaInfo() {
            return {
                title: this.data.name,
                meta: [
                    {name: 'description', content: this.data.seo != null ? this.data.seo[0].description : ''},
                    {property: 'og:title', content: this.data.name},
                    {property: 'og:site_name', content: 'Yogprerna'},
                    {property: 'og:type', content: 'website'}
                ]
            }
        },
        data() {
            return {
                routeCity: this.$route.params.city,
                routeSlug: this.$route.params.slug,
                data: [],
            }
        },
        methods: {
            getDetail() {
                axios.post(apiUrls.getPropertyDetail, {
                    'slug': this.routeSlug,
                    'city': this.routeCity,
                }).then((res) => {
                    this.data = res.data[0]
                }).catch((err) => {
                    console.log(err)
                })
            },
            getLogo(image, id) {
                return config.apiUrl.propertyImage + id + '/logo/' + image + '-lg.webp'
            },
            getGallery(image, id) {
                return config.apiUrl.propertyImage + id + '/gallery/' + image + '-lg.webp'
            },
            setImage(event) {
                this.image = event.target.files[0]
            }
        },
        components: {
            StarRating,
        },
        beforeMount() {
            this.getDetail()
        }
    }
</script>

<style scoped>

</style>