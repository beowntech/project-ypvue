<template>
    <div>
        <Breadcrumbs title="Offers"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <px-card title="Your Offers">
                        <div slot="with-padding">
                            <div class="row pricing-content">
                                <div v-for="(data,i) in offers" :key="i" class="col-xl-4 col-sm-6 xl-30 box-col-6">
                                    <div class="card text-center pricing-simple">
                                        <div class="card-body">
                                            <h3 >{{data.offer_name}}</h3>
                                            <h6>{{data.fixed_price != null ? 'FIXED PRICE:' : 'COUPON CODE:'}}</h6>
                                            <h3 >{{data.coupon_code != null ?
                                                data.coupon_code:'$'+data.fixed_price}}</h3>
                                            <h6 class="mb-0" >{{data.percentage_off != null ?
                                                data.percentage_off+'% Off':data.short_description}}</h6>
                                        </div>
                                        <a class="btn btn-lg btn-primary btn-block" href="#">
                                            <h5 class="mb-0">{{data.button_name}}</h5></a>
                                        <i class="fa fa-edit font-info offerEdit" @click="editData=data" v-b-modal.update_offer></i>
                                        <i class="fa fa-trash font-danger offerDelete"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </px-card>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
        <b-modal id="update_offer"
                 centered
                 :title="'Update '+editData.offer_name"
                 ok-title="Update"
                 ok-variant="info"
                 class="theme-modal">
            <div class="row">
                <div class="col-md-12">
                    <label>Select Offer Type</label>
                    <b-select v-model="selectedOffer" value-field="id" :options="offerOptions"></b-select>
                </div>
                <div class="col-md-12 mt-3">
                    <label>Offer Name</label>
                    <b-input placeholder="Offer Name" :value="editData.offer_name"></b-input>
                </div>
                <div class="col-md-12 mt-3">
                    <label>Offer Button Name</label>
                    <b-input placeholder="Button Name" :value="editData.button_name"></b-input>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import apiUrl from '../../../_helpers/apiUrls'

    export default {
        name: "Offer",
        data() {
            return {
                editData: {},
                offers: [],
                selectedOffer: [],
                offerOptions:[{
                    id: 1,
                    text: 'Fixed Price'
                },{
                    id: 2,
                    text: 'Coupon Code'
                }],
            }
        },
        methods: {
            getOffers() {
                axios.post(apiUrl.getOffers, {
                    id: this.$store.getters.getProperty[0].id
                })
                    .then((res) => {
                        this.offers = res.data
                    }).catch((err) => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.getOffers()
        }
    }
</script>
<style>
    .offerEdit {
        position: absolute;
        border-radius: 5px;
        right: 0;
        background: whitesmoke;
        padding: 8px;
        cursor: pointer;
        top: 0;
        font-size: 20px !important;
    }
    .offerDelete {
        position: absolute;
        border-radius: 5px;
        right: 0;
        background: whitesmoke;
        padding: 7px 10px;
        cursor: pointer;
        top: 40px;
        font-size: 20px !important;
    }
</style>