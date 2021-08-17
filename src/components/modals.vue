<template>
    <div>
        <b-modal id="add_property"
                 style="max-width: 70%!important;"
                 centered
                 title="Add Property"
                 ok-title="Submit"
                 @close="resetForm"
                 @cancel="resetForm"
                 @ok="addProperty"
                 class="theme-modal">
            <div class="row">
                <div class="col-md-12">
                    <p>Basic Details</p>
                </div>
                <div class="col-md-12">
                    <b-input v-model="propName" placeholder="Property Name"></b-input>
                        <div class="row">
                            <div class="col-md-6 mt-3">
                                <b-input v-model="propEmail" placeholder="Property Email"></b-input>
                                <p class="text-danger d-inline-block m-0" v-text="propEmailError"></p>
                            </div>
                            <div class="col-md-6 mt-3">
                                <b-input v-model="propContact" placeholder="Contact Number"></b-input>
                            </div>
                            <div class="col-md-12">
                                <b-input v-model="propWebsite" placeholder="Website"></b-input>
                            </div>
                            <div class="col-md-12 mt-3">
                                <p>Location Details</p>
                            </div>
                            <div class="col-md-6">
                                <multiselect v-model="selectedCountry" placeholder="Select Country"
                                             label="name" track-by="code" :options="countries" :multiple="false"
                                             :taggable="false"></multiselect>
                            </div>
                            <div class="col-md-6">
                                <multiselect v-if="selectedCountry" v-model="selectedState" placeholder="Select State"
                                             label="name" track-by="code" :options="states" :multiple="false"
                                             :taggable="false"></multiselect>
                            </div>
                            <div class="col-md-12 mt-3">
                                <multiselect v-if="selectedState" v-model="selectedCity" placeholder="Select City"
                                             label="name" track-by="code" :options="cities" :multiple="false"
                                             :taggable="false"></multiselect>
                            </div>
                        </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import api from '../_helpers/apiUrls'
    //
    // import config from '../../../config.json'
    import Multiselect from 'vue-multiselect'

    export default {
        name: "modals",
        data() {
            return {
                propName: "",
                propEmail: "",
                propContact: "",
                countries: [],
                states: [],
                cities: [],
                selectedCity: "",
                selectedState: "",
                selectedCountry: "",
                propWebsite:"",
                propEmailError: "",
                options: [
                    {code: 1, name: 'Alabama'},
                    {code: 2, name: 'Wyoming'},
                    {code: 3, name: 'Coming'},
                    {code: 4, name: 'Hanry Die'},
                    {code: 5, name: 'John Doe'}
                ],
            }
        },
        watch:{
            selectedCountry: function () {
                this.selectedState = ""
                this.selectedCity = ""
                if(this.selectedCountry.length != 0) {
                    this.stateList()
                }
            },
            selectedState: function () {
                this.selectedCity = ""
                if(this.selectedState.length != 0) {
                    this.cityList()
                }
            }
        },
        methods: {
            addProperty(){
                axios.post(api.addProperty,{
                 token: this.$store.getters.getToken,
                 name: this.propName,
                 email: this.propEmail,
                 contact: this.propContact,
                 country: this.selectedCountry.code,
                 state: this.selectedState.code,
                 city: this.selectedCity.code,
                 website: this.propWebsite,
                }).then((res)=>{
                    if(res.data.status == 1){
                        this.$root.$emit('property')
                    }
                    console.log(res)
                }).catch((err)=>{
                   console.log(err)
                })
            },
            countryList(){
              axios.get(api.countryList)
                  .then((res)=>{
                      for (var i=0; i < res.data.length; i++) {
                          this.countries.push({name:res.data[i].name,code:res.data[i].id})
                      }
              }).catch((err)=>{
                  console.log(err)
              })
            },
            stateList(){
                this.states = []
                axios.get(api.stateList + '?id='+this.selectedCountry.code)
                    .then((res)=>{
                        for (var i=0; i < res.data.length; i++) {
                            this.states.push({name:res.data[i].name,code:res.data[i].id})
                        }
                    }).catch((err)=>{
                    console.log(err)
                })
            },
            cityList(){
                this.cities = []
                axios.get(api.cityList + '?id='+this.selectedState.code)
                    .then((res)=>{
                        for (var i=0; i < res.data.length; i++) {
                            this.cities.push({name:res.data[i].name,code:res.data[i].id})
                        }
                    }).catch((err)=>{
                    console.log(err)
                })
            },
            resetForm() {
                this.propName = ""
                this.selectedCountry = ""
                this.selectedState = ""
                this.selectedCity = ""
            }
        },
        beforeMount() {
            this.countryList()
        },
        components: {
            Multiselect
        }
    }
</script>

<style scoped>

</style>