<template>
    <div>
        <div class="card p-4 mx-2">
            <img v-if="data.gallery != null" :src="getLogo(data.gallery.logo,data.id)" style="width: 10%;">
            <h3>{{data.name}}</h3>
            <div v-html="data.bio" v-if="data.bio"></div>

            <div class="mb-3">Address: {{data.location.address}}, {{data.city.name}},
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
                <div v-for="(social,i) in JSON.parse(data.social.links)" :key="i">
                    <a :href="social.link" target="_blank">{{social.social}}</a>
                </div>
            </div>
            <!--            {{data}}-->
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import apiUrls from "../_helpers/apiUrls";
    import config from '../config.json'

    export default {
        name: "propertyDetail",
        metaInfo() {
            return {
                title: this.data.name,
                meta: [
                    {name: 'description', content: this.data.seo != null ? this.data.seo[0].description:''},
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
                data: []
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
            }
        },
        beforeMount() {
            this.getDetail()
        }
    }
</script>

<style scoped>

</style>