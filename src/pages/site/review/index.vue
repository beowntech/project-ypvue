<template>
    <div>
        <Breadcrumbs main="Review" title="user reviews"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body parab-0" v-if="propertyReviews != null && propertyReviews.length != 0">
                            <div class="row" v-for="(data,i) in propertyReviews" :key="i">
                                <div class="ribbon ribbon-clip-right ribbon-right" :class="{
                                    'ribbon-primary': data.flagged == 2,
                                    'ribbon-danger': data.flagged == 1,
                                }" v-if="data.flagged != null">{{ getFlaggedTitle(data.flagged)}}</div>
                                <div class="col-1 px-1  text-center">
                                    <img src="/img/1.4a00e803.jpg" alt="#" class="img-60 rounded-circle">
                                </div>
                                <div class="col-10 px-2">
                                    <p class="font-weight-bold">{{data.user.name}} -
                                        <span class="rating">
                                           <star-rating style="display: inline-block!important;" :read-only="true" :star-size="17" :increment="0.5" :rating="data.star"  :animate="true" ></star-rating>
                                        </span>
                                    </p>
                                    <p>{{data.review}}</p>
                                    <div class="review-media mt-2" v-if="data.pictures != null">
                                        <img src="/img/1.4a00e803.jpg" alt="#" class="img-60 mr-2">
                                        <img src="/img/1.4a00e803.jpg" alt="#" class="img-60 mr-2">
                                        <img src="/img/1.4a00e803.jpg" alt="#" class="img-60 mr-2">
                                        <img src="/img/1.4a00e803.jpg" alt="#" class="img-60 mr-2">
                                    </div>
                                    <hr>
                                    <p>Reply: {{data.replies[0].review}}</p>
                                    <textarea id="exampleFormControlTextarea4" v-model="reply" v-if="selectedId === data.id"  rows="3" class="form-control"></textarea>
                                    <button id="default-outline-info-sm" type="button"
                                            @click="showReply(data.id)"
                                            class="btn btn-square btn-outline-info btn-outline-info btn-sm mt-2 ml-2"><i
                                            class="fa fa-mail-reply"></i> {{selectedId == data.id ? 'Cancel': 'Reply'}}</button>
                                    <button id="default-outline-danger-sm" type="button"
                                            @click="addReply"
                                            v-if="selectedId == data.id"
                                            class="btn btn-square btn-outline-success btn-sm mt-2 ml-2">Submit <i
                                            class="fa fa-arrow-right"></i></button>
                                </div>
                                <div class="col-1 px-1"><i class="fa fa-flag edit-pencil" style="cursor: pointer" @click="selectedFlagId = data.id" v-b-modal.flag_review></i></div>
                            </div>
                            <hr v-if="propertyReviews.length > 1">
                        </div>
                        <div class="card-body parab-0" v-else>
                            No Reviews
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <b-modal id="flag_review" centered
                 title="Are You Sure?"
                 cancel-title="No Close"
                 @ok="flagReview"
                 ok-title="Flag Review"
                 class="theme-modal">
            <p>Are you sure you want to flag this Review as Inappropriate?</p>
        </b-modal>
    </div>
</template>
<script>
    import axios from 'axios'
    import apiUrls from '../../../_helpers/apiUrls'
    import StarRating from 'vue-star-rating'

    export default {
        name: "TempCourse",
        data() {
            return {
                propertyReviews: [],
                reply: "",
                selectedFlagId: 0,
                selectedId: 0,
            }
        },
        components:{
            StarRating
        },
        methods: {
            flagReview(){
                axios.post(apiUrls.flagReview, {
                    id: this.selectedFlagId
                }).then((res) => {
                    if(res.data.status == 1) {
                        this.getReviews()
                    }
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            },
            addReply(){
                axios.post(apiUrls.addReply, {
                    id: this.selectedId,
                    reply: this.reply
                }).then((res) => {
                    if(res.data.status == 1) {
                        this.selectedId = 0
                        this.reply = ""
                        this.getReviews()
                    }
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            },
            getReviews() {
                axios.post(apiUrls.getReviews, {
                    id: this.$store.getters.getProperty[0].id
                }).then((res) => {
                    this.propertyReviews = res.data
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            },
            starRating(star) {
                if (star > 0) {
                    if (star > 0.5) {
                        return 'fa fa-star';
                    } else {
                        return 'fa fa-star-0';
                    }
                } else {
                    return 'fa fa-star-0';
                }
            },
            showReply(data){
                if(data == this.selectedId){
                 this.selectedId = 0
                }else {
                    this.selectedId = data
                }
            },
            getFlaggedTitle(data){
                if(data == 1){
                    return 'Review Flagged'
                }else if(data == 2){
                    return 'Flag Sent to Admin'
                }
            }
        },
        beforeMount() {
            this.getReviews()
        }
    }
</script>