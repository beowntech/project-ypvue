<template>
    <div>
        <Breadcrumbs :button-enable="true"
                     :button-title="'Add State'"
                     @action="openModal" title="States"/>
        <!-- Container-fluid starts-->
        <!--        <div class="row mb-3">-->
        <!--            <div class="col-sm-12 col-xl-12">-->
        <!--                <b-button :variant="addNew ? 'danger':'primary'" @click="addNew = !addNew" class="float-right">{{addNew-->
        <!--                    ? 'Close': 'Add Course'}}-->
        <!--                </b-button>-->
        <!--            </div>-->
        <!--        </div>-->
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">State List</h5>
                </div>
                <div class="row p-4">
                    <div class="table-responsive vue-smart">
                        <v-table :data="states" class="table">
                            <thead slot="head">
                            <v-th sortKey="name">Name</v-th>
                            <v-th sortKey="volume">Icon</v-th>
                            <v-th sortKey="difficulty">Image</v-th>
                            <v-th sortKey="price">Parent State</v-th>
                            <v-th sortKey="traffic">Created On</v-th>
                            <v-th sortKey="action">Actions</v-th>
                            </thead>
                            <tbody slot="body"
                                   slot-scope="{displayData}">
                            <tr v-for="row in displayData" :key="row.id">
                                <td>{{ row.name }}</td>
                                <td>{{ row.icon != null ? row.icon : 'No Icon'}}
                                </td>
                                <td>{{ row.image != null ? row.image : 'No Image'}}</td>
                                <td>{{ row.country.name }}</td>
                                <td>{{ row.created_at }}</td>
                                <td>
<!--                                    <b-button-group>-->
<!--                                        <b-button class="p-0" variant="info" @click="updateId=row.id"><i-->
<!--                                                style="padding: 4px;" class="fa fa-edit"></i></b-button>-->
<!--                                        <b-button class="p-0" variant="danger" @click="deleteId = row.id"><i-->
<!--                                                style="padding: 4px;" class="fa fa-trash"></i></b-button>-->
<!--                                    </b-button-group>-->
                                </td>
                            </tr>
                            </tbody>
                        </v-table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
        <b-modal id="add_state" centered
                 title="Add State"
                 ok-title="Submit"
                 @ok="addState"
                 class="theme-modal">
            <div class="row">
<!--                <div class="col-md-12">-->
<!--                    <div class="form-group row">-->
<!--                        <div class="col-sm-12">-->
<!--                            <img :src="showImage" class="mb-2" style="width: 100%;">-->
<!--                        </div>-->
<!--                        <div class="col-sm-12">-->
<!--                            <b-form-file v-model="image"-->
<!--                                         :state="Boolean(image)"-->
<!--                                         placeholder="Select Featured Image"-->
<!--                                         drop-placeholder="Drop Image here..."></b-form-file>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="col-md-6">
                    <multiselect v-model="parent" placeholder="Select Parent"
                                 label="name" track-by="id" :multiple="false" :options="countries"></multiselect>
                </div>
                <div class="col-md-6">
                    <b-input v-model="name" placeholder="State Name"></b-input>
                </div>
<!--                <div class="col-md-6 mt-3">-->
<!--                    <div class="form-group row">-->
<!--                        <div class="col-sm-12">-->
<!--                            <img :src="selectedcategoryIcon" class="mb-2" style="width: 100%;">-->
<!--                        </div>-->
<!--                        <div class="col-sm-12">-->
<!--                            <b-form-file v-model="categoryIcon"-->
<!--                                         :state="Boolean(categoryIcon)"-->
<!--                                         placeholder="Select Icon Image"-->
<!--                                         drop-placeholder="Drop Icon here..."></b-form-file>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import Multiselect from 'vue-multiselect'

    export default {
        name: "state",
        data() {
            return {
                addNew: false,
                name: null,
                icon: null,
                image: null,
                showImage: "",
                parent: null,
            }
        },
        watch:{
            '$store.state.location.response': function() {
                if(this.$store.state.location.response) {
                    this.alert('State Added Successfully', 'success', 'success', 'top-center')
                    this.$store.commit('location/SET_RESPONSE',false)
                    this.$store.dispatch('location/fetchState')
                }
            },
            image: function (val) {
                this.showImage = URL.createObjectURL(val)
            },
        },
        computed: {
            ...mapState({
                states: (state) => state.location.states.data,
                countries: (state) => state.location.countries,
            })
        },
        mounted() {
            this.$store.dispatch('location/fetchState')
            this.$store.dispatch('location/fetchCountry')
        },
        methods:{
            openModal(){
                this.$bvModal.show('add_state')
            },
            alert(message, color, icon, position) {
                this.$toasted.show(message, {
                    theme: 'outline',
                    position: position,
                    type: color,
                    icon: 'success',
                    duration: 2000
                });
            },
            addState(){
                var data = [{
                    name:this.name,
                    icon:this.icon,
                    image:this.image,
                    parent:this.parent.id,
                }];
                this.$store.dispatch('location/addState',data)
            }
        },
        components:{
            Multiselect,
        }
    }
</script>

<style scoped>

</style>