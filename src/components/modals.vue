<template>
    <div>
        <b-modal id="add_property"
                 style="max-width: 70%!important;"
                 centered
                 size="lg"
                 :title="propertyType ? 'Select Property type':'Add Property'"
                 ok-title="Submit"
                 @close="resetForm"
                 @cancel="resetForm"
                 @ok="addProperty"
                 :hide-footer="true"
                 class="theme-modal">
            <div class="row">
                <b-form class="needs-validation" @submit="addProperty">
                <div class="col-md-12" v-if="propertyType">
                    <div class="row">
                        <div :class="{
                             'col-md-12': propertyTypes.length == 1,
                             'col-md-6': propertyTypes.length == 2,
                             'col-md-4': propertyTypes.length <= 3,
                            'col-md-3': propertyTypes.length > 3,
                        }" v-for="(data,i) in propertyTypes" :key="i">
                            <div class="ecommerce-widget" @click="selectedType=data" style="cursor: pointer">
                                <div class="card-body support-ticket-font text-center">
                                    <h4>{{data.name}}</h4>
                                    <p>{{data.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" v-else>
                    <p class="float-right">Selected Type: <strong>{{selectedType.name}}</strong> || <a @click="selectedType=null,propertyType=true" style="color: blue;cursor: pointer">change</a></p>
                    <p>Basic Details</p>
                    <b-input v-model="propName" required :placeholder="getPlaceholder('name')"></b-input>
                        <div class="row">
                            <div class="col-md-6 mt-3">
                                <b-input v-model="propEmail"  :placeholder="getPlaceholder('email')" type="email" required></b-input>
                                <p class="text-danger d-inline-block m-0" v-text="propEmailError"></p>
                            </div>
                            <div class="col-md-6 mt-3">
                                <b-input type="text" required v-model="propContact" :placeholder="getPlaceholder('contact')"></b-input>
                            </div>
                            <div class="col-md-12">
                                <b-input v-model="propWebsite" :placeholder="getPlaceholder('website')"></b-input>
                            </div>
                            <div class="col-md-12 mt-3">
                                <p>Location Details</p>
                            </div>
                            <div class="col-md-6">
                                <multiselect v-model="selectedCountry" required placeholder="Select Country"
                                             label="name" track-by="code" :options="countries" :multiple="false"
                                             :taggable="false"></multiselect>
                            </div>
                            <div class="col-md-6">
                                <multiselect v-if="selectedCountry" required v-model="selectedState" placeholder="Select State"
                                             label="name" track-by="code" :options="states" :multiple="false"
                                             :taggable="false"></multiselect>
                            </div>
                            <div class="col-md-12 mt-3">
                                <multiselect v-if="selectedState" required v-model="selectedCity" placeholder="Select City"
                                             label="name" track-by="code" :options="cities" :multiple="false"
                                             :taggable="false"></multiselect>
                            </div>
                        </div>
                </div>
                <div class="col-md-12" v-if="!propertyType">
                    <b-button type="submit" class="float-right" variant="primary">Submit</b-button>
                </div>
                </b-form>
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
                propertyType: true,
                propertyTypes: [],
                selectedType: null,
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
            selectedType: function(val){
                console.log(val)
                this.propertyType = val == null;
            },
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
            addProperty(e){
                e.preventDefault()
                axios.post(api.addProperty,{
                 token: this.$store.getters.getToken,
                 name: this.propName,
                 email: this.propEmail,
                 contact: this.propContact,
                 country: this.selectedCountry.code,
                 state: this.selectedState.code,
                 city: this.selectedCity.code,
                 website: this.propWebsite,
                 property_type: this.selectedType.id,
                }).then((res)=>{
                    if(res.data.status == 1){
                        this.$bvModal.hide('add_property')
                        this.$root.$emit('property')
                    }
                    console.log(res)
                }).catch((err)=>{
                   console.log(err)
                })
            },
            getType(){
                axios.get(api.typeList)
                    .then((res)=>{
                       this.propertyTypes = res.data
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
            getPlaceholder(val){
                if(val == 'name'){
                     return this.selectedType.name+" Name";
                }
                if(val == 'email'){
                        return this.selectedType.name+" Email";
                }
                if(val == 'contact'){
                        return "Contact Number";
                }
                if(val == 'website'){
                        return this.selectedType.name+" Website";
                }
            },
            resetForm() {
                this.propName = ""
                this.selectedCountry = ""
                this.selectedState = ""
                this.selectedCity = ""
            }
        },
        beforeMount() {
            this.getType()
            this.countryList()
        },
        components: {
            Multiselect
        }
    }
</script>

<style scoped>

</style>