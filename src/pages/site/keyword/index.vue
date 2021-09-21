<template>
    <div>
        <Breadcrumbs title="Keywords"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 project-list">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-12 p-0">
                                <b-tabs content-class="mt-3">
                                    <b-tab active>
                                        <template v-slot:title>
                                            <feather type="target"></feather>
                                            All
                                        </template>
                                        <b-card-text>
                                            <div class="col-sm-12 p-0">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="card">
                                                            <div class="card-header">
                                                                <h5 class="card-title">Basic</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="datatable-vue m-0">

                                                                    <div class="row filter-smart">
                                                                        <div class="col-sm-3">
                                                                            <input class="form-control"
                                                                                   placeholder="Name"/>
                                                                        </div>
                                                                        <div class="col-sm-2">
                                                                            <input class="form-control"
                                                                                   placeholder="Volumne"/>
                                                                        </div>
                                                                        <div class="col-sm-2">
                                                                            <input class="form-control"
                                                                                   placeholder="Difficulty"/>
                                                                        </div>
                                                                        <div class="col-sm-2">
                                                                            <input class="form-control"
                                                                                   placeholder="Price"/>
                                                                        </div>
                                                                        <div class="col-sm-2">
                                                                            <input class="form-control"
                                                                                   placeholder="Traffic"/>
                                                                        </div>
                                                                    </div>
                                                                    <div class="table-responsive vue-smart">
                                                                        <v-table
                                                                                :data="keywords" class="table"
                                                                        >
                                                                            <thead slot="head">
                                                                            <v-th sortKey="name">Name</v-th>
                                                                            <v-th sortKey="volume">Volume</v-th>
                                                                            <v-th sortKey="difficulty">Difficulty</v-th>
                                                                            <v-th sortKey="price">Price</v-th>
                                                                            <v-th sortKey="traffic">Traffic/Month</v-th>
                                                                            <v-th sortKey="action">Actions</v-th>
                                                                            </thead>
                                                                            <tbody slot="body"
                                                                                   slot-scope="{displayData}">
                                                                            <tr v-for="row in displayData"
                                                                                :key="row.id">
                                                                                <td>{{ row.name }}</td>
                                                                                <td>{{ row.volume != null ?row.volume:
                                                                                    'No Data Currently' }}
                                                                                </td>
                                                                                <td>
                                                                                    <b-badge
                                                                                            :variant="difficultyClass(row.difficulty)">
                                                                                        {{
                                                                                        difficultyText(row.difficulty)
                                                                                        }}
                                                                                    </b-badge>
                                                                                </td>
                                                                                <td>{{ row.price == null ? 'Free':row.price }}</td>
                                                                                <td>{{ 'No Data Currently' }}</td>
                                                                                <td>
                                                                                    <b-button-group>
                                                                                        <b-button class="p-0" variant="info" @click="updateId=row.id"><i style="padding: 4px;" class="fa fa-edit"></i></b-button>
                                                                                        <b-button class="p-0" variant="danger" @click="deleteId = row.id"><i style="padding: 4px;" class="fa fa-trash"></i></b-button>
                                                                                    </b-button-group>
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </v-table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </div>
                            <div class="col-sm-6 create-project-btn">
                                <div class="text-right">
                                    <div class="form-group mb-0 mr-0"></div>
                                    <a class="btn btn-primary" v-b-modal.add_keyword>
                                        <i data-feather="plus-square"> </i>Create New Keyword</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container-fluid Ends-->
        <b-modal
                id="add_keyword"
                title="Add Keyword"
                cancel-title="Cancel"
                @ok="addKeyword"
                ok-title="Add Keyword"
                centered>
            <div class="row">
                <div class="col-md-12">
                    <label>Keyword Name</label>
                    <b-input placeholder="Eg: 200 Hours Yoga" v-model="keywordName"></b-input>
                </div>
                <div class="col-md-12 mt-3">
                    <label>Keyword Difficulty</label>
                    <b-input placeholder="Number Only, Eg: 67 OR 100" v-model="keywordDifficulty"></b-input>
                </div>
                <div class="col-md-12 mt-3">
                    <label>Keyword Price</label>
                    <b-input placeholder="Number Only" v-model="keywordPrice"></b-input>
                </div>
            </div>
        </b-modal>
        <b-modal
                id="update_keyword"
                title="Update Keyword"
                cancel-title="Cancel"
                @ok="updateKeyword"
                @hidden="updateId=null,updatekeywordName='',updatekeywordDifficulty=0,updatekeywordPrice=0"
                @hide="updateId=null,updatekeywordName='',updatekeywordDifficulty=0,updatekeywordPrice=0"
                @cancel="updateId=null,updatekeywordName='',updatekeywordDifficulty=0,updatekeywordPrice=0"
                @close="updateId=null,updatekeywordName='',updatekeywordDifficulty=0,updatekeywordPrice=0"
                ok-title="Update Keyword"
                centered>
            <div class="row">
                <div class="col-md-12">
                    <label>Keyword Name</label>
                    <b-input placeholder="Eg: 200 Hours Yoga" v-model="updatekeywordName"></b-input>
                </div>
                <div class="col-md-12 mt-3">
                    <label>Keyword Difficulty</label>
                    <b-input placeholder="Number Only, Eg: 67 OR 100" v-model="updatekeywordDifficulty"></b-input>
                </div>
                <div class="col-md-12 mt-3">
                    <label>Keyword Price</label>
                    <b-input placeholder="Number Only" v-model="updatekeywordPrice"></b-input>
                </div>
            </div>
        </b-modal>
        <b-modal
                id="delete_keyword"
                title="Delete Keyword"
                cancel-title="Cancel"
                @ok="deleteKeyword"
                @cancel="deleteId=null"
                @close="deleteId=null"
                @hidden="deleteId=null"
                @hide="deleteId=null"
                ok-title="Delete"
                centered>
           <p>Are you Sure you want to Delete this Keyword?</p>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import apiUrls from "../../../_helpers/apiUrls";
    import Selectize from 'vue2-selectize'

    export default {
        data() {
            return {
                keywords: [],
                keywordName: "",
                updatekeywordName: "",
                keywordDifficulty: 0,
                updatekeywordDifficulty: 0,
                keywordPrice: null,
                updatekeywordPrice: null,
                deleteId: null,
                updateId: null,
                selected: 1,
                setting:{
                    delimiter: ",",
                    persist: false,
                }
            }
        },
        watch:{
          deleteId:function () {
              if(this.deleteId != null) {
                  this.$bvModal.show('delete_keyword')
              }
          },
            updateId:function (val) {
              if(val != null){
                  this.getKeywordDetail(val)
              }
            }
        },
        methods: {
            addKeyword() {
                if (this.keywordName != "" && this.keywordDifficulty != 0) {
                    axios.post(apiUrls.addKeyword, {
                        name: this.keywordName,
                        difficulty: this.keywordDifficulty,
                        price: this.keywordPrice
                    }).then((res) => {
                        this.getKeywords()
                        this.alert('Keyword Added Successfully', 'success', 'success', 'top-center')
                        console.log(res.data)
                    }).catch((err) => {
                        console.log(err)
                    })
                } else {
                    this.alert('Please Fill all the Fields', 'danger', 'danger', 'top-center')
                }
            },
            getKeywordDetail(){
                axios.post(apiUrls.keywordDetail, {
                    id: this.updateId
                }).then((res) => {
                    this.updatekeywordName = res.data[0].name
                    this.updatekeywordDifficulty = res.data[0].difficulty
                    this.updatekeywordPrice = res.data[0].price
                    this.$bvModal.show('update_keyword')
                }).catch((err) => {
                    console.log(err)
                })
            },
            updateKeyword(){
                    axios.post(apiUrls.updateKeyword, {
                        id: this.updateId,
                        name: this.updatekeywordName,
                        difficulty: this.updatekeywordDifficulty,
                        price: this.updatekeywordPrice,
                    }).then((res) => {
                        if(res.data['status'] == 1) {
                            this.getKeywords()
                            this.alert('Keyword Updated Successfully', 'success', 'success', 'top-center')
                        }else{
                            this.alert('Problem!! Check All Fields are Filled or Not?', 'success', 'success', 'top-center')
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
            },
            deleteKeyword(){
                axios.post(apiUrls.deleteKeyword, {
                    id: this.deleteId
                }).then(() => {
                    this.getKeywords()
                    this.alert('Keyword Delete Successfully', 'success', 'success', 'top-center')
                }).catch((err) => {
                    console.log(err)
                })
            },
            alert(message, color, icon, position) {
                this.$toasted.show(message, {
                    theme: 'bubble',
                    position: position,
                    type: color,
                    icon: 'success',
                    duration: 2000
                });
            },
            getKeywords() {
                axios.post(apiUrls.getKeywords)
                    .then((res) => {
                        this.keywords = res.data
                    }).catch((err) => {
                    console.log(err)
                })
            },
            difficultyText(val) {
                if (val >= 0 && val <= 20) {
                    return 'Easy';
                } else if (val >= 21 && val <= 40) {
                    return 'Medium';
                } else if (val >= 41 && val <= 60) {
                    return 'Hard';
                } else if (val >= 61 && val <= 80) {
                    return 'Very Hard';
                } else if (val >= 81 && val <= 100) {
                    return 'Bas se Bahar';
                }
            },
            difficultyClass(val) {
                if (val >= 0 && val <= 20) {
                    return 'success';
                } else if (val >= 21 && val <= 40) {
                    return 'warning';
                } else if (val >= 41 && val <= 60) {
                    return 'warning';
                } else if (val >= 61 && val <= 80) {
                    return 'danger';
                } else if (val >= 81 && val <= 100) {
                    return 'danger';
                }
            }
        },
        components:{
            Selectize
        },
        beforeMount() {
            this.getKeywords()
        }
    }
</script>
<style>
    @import "~selectize/dist/css/selectize.bootstrap3.css";
    .table th, .table td {
        padding: 2px 0.75rem !important;
    }
</style>
