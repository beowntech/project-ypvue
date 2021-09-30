<template>
    <div>
        {{$route.params.property}}
        {{$route.params.user}}
        <div v-if="tokenExpire">
            <h2>Token Expired</h2>
        </div>
        <div v-else>
            <px-card :actions="false" class="mx-4" v-if="checkReview">
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
    </div>
</template>

<script>
    import axios from "axios";
    import apiUrls from "../../_helpers/apiUrls";

    export default {
        name: "index",
        data() {
            return {
                currentRole: this.$store.getters.getRole,
                form: {
                    name: this.$store.getters.getName,
                    email: this.$store.getters.getEmail,
                    message: '',
                    rating: 0,
                },
                form_result: {
                    name: null,
                    email: null,
                    message: null,
                },
                image: null,
                checkRev: false,
                reviewSubmit: false,
                tokenExpire: false,
            }
        },
        methods: {
            checkToken() {
                if (this.$route.query.token == undefined) {
                    this.tokenExpire = false
                } else {
                    this.tokenExpire = true
                }
            },
            submitReview(evt) {
                evt.preventDefault()
                if (this.form.image != undefined) {
                    this.form_result.image = true
                } else {
                    this.form_result.image = false
                }
                if (this.form.name != '') {
                    this.form_result.name = true
                } else {
                    this.form_result.name = false
                }

                if (this.form.email != '') {
                    this.form_result.email = true
                } else {
                    this.form_result.email = false
                }

                if (this.form.message != '') {
                    this.form_result.message = true
                } else {
                    this.form_result.message = false
                }
                if (this.form_result.message && this.form_result.name && this.form_result.email && this.form_result.image) {
                    this.addReview()
                }

            },
            checkReview() {
                axios.get(apiUrls.checkReview)
                    .then((res) => {
                        if (res.data.status == 1) {
                            this.checkRev = true
                        } else if (res.data.status == 2) {
                            this.checkRev = false
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            addReview() {
                let formData = new FormData()
                formData.append('image', this.image)
                formData.append('name', this.form.name)
                formData.append('email', this.form.email)
                formData.append('message', this.form.message)
                formData.append('token', this.$store.getters.getToken)
                formData.append('property_id', this.data.id)
                formData.append('star', this.form.rating)
                axios.post(apiUrls.addReview, formData)
                    .then((res) => {
                        if (res.data.status) {
                            this.reviewSubmit = true
                        }
                    }).catch((err) => {
                    console.log(err)
                })
            },
        },
        beforeMount() {
            this.checkToken()
            this.checkReview()
        }
    }
</script>

<style scoped>

</style>