<template>
    <div>
        <Breadcrumbs main="Yoga Guru"
                     title="yoga guru"
                     :button-enable="true"
                     button-title="Add Guru"
                     @action="openAddModal"
        />
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row mt-4" v-if="dataLoading">
                <div class="col-md-12">
                    <div class="card text-center p-10">
                        <div class="loader-box">
                            <div class="loader-30"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-else-if="teachers.length !== 0">
                <div class="col-sm-3 col-xl-3" v-for="(data,i) in teachers" :key="i">
                    <div class="card">
                        <div class="guru-img" :style="'align-self: center;background: url('+getTeacherPath(data.image+'xl.webp')+');height: 200px;width: 100%;background-size: cover;'">
<!--                            <img :src="" style="width: 100%;" alt="" class="img-fluid">-->
                        </div>
                        <div class="product-details p-2">
                            <h4>{{data.name}} <i class="fa fa-pencil edit-pencil" @click="teacherData(data)"
                                                 v-b-modal.update_guru></i></h4>
                            <p class="mb-1">{{data.qualification}} </p>
                            <p class="mb-1">{{data.experience}} </p>
                            <p class="mb-1">{{data.department}} </p>
                        </div>
                    </div>
                    <i class="fa fa-trash font-danger" @click="deletableTeacherId = data.id" v-b-modal.delete_guru style="position: absolute;
    top: 0;
    margin-top: 7px;
    margin-right: 26px;
    font-size: 19px;
    right: 0;
}"></i>
                </div>
            </div>
            <div class="row mt-4" v-else>
                <div class="col-md-12">
                    <div class="card text-center p-10">
                        <h3>No Teachers</h3>
                    </div>
                </div>
            </div>
        </div>
        <b-modal id="add_guru" size="lg" style="max-width: 100% !important;" centered title="Add Guru"
                 ok-title="Submit"
                 @ok="addTeacher"
                 @cancel="resetForm"
                 @close="resetForm"
                 class="theme-modal">
            <div class="row">
                <div class="col-md-6">
                    <input type="file" name="image" id="image" @change="imageShow">
                    <img v-if="showImage!=''" :src="showImage" style="max-width: 90%">
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12">
                            <b-form-input v-model="teacherName" type="text" placeholder="Name"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="designation" type="text" placeholder="Designation"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="qualification" type="text" placeholder="Qualification"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="department" type="text" placeholder="Department"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="experience" type="text" placeholder="Experience"
                                          class="mb-3"></b-form-input>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="update_guru" size="lg" style="max-width: 100% !important;" centered title="Update Guru"
                 ok-title="Update"
                 @ok="updateTeacher"
                 @cancel="resetFormU"
                 @close="resetFormU"
                 class="theme-modal">
            <div class="row">
                <div class="col-md-6">
                    <input type="file" name="image" @change="imageShowU">
                    <img v-if="showImageU!=''" :src="showImageU" style="max-width: 90%">
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12">
                            <b-form-input v-model="teacherNameU" type="text" placeholder="Name"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="designationU" type="text" placeholder="Designation"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="qualificationU" type="text" placeholder="Qualification"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="departmentU" type="text" placeholder="Department"
                                          class="mb-3"></b-form-input>
                            <b-form-input v-model="experienceU" type="text" placeholder="Experience"
                                          class="mb-3"></b-form-input>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-modal id="delete_guru" size="lg" style="max-width: 100% !important;" centered title="Update Guru"
                 ok-title="Update"
                 @ok="deleteTeacher"
                 class="theme-modal">
         <p>Are you sure you want to Delete this Guru?</p>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import api from '../../../_helpers/apiUrls'
    import config from '../../../config.json'

    export default {
        name: "property",
        data() {
            return {
                dataLoading: true,
                teacherName: "",
                designation: "",
                qualification: "",
                department: "",
                experience: "",
                image: null,
                showImage: "",
                teacherNameU: "",
                designationU: "",
                qualificationU: "",
                departmentU: "",
                experienceU: "",
                imageU: null,
                showImageU: "",
                deletableTeacherId: null,
                teachers: [],
                selectedTeacherId: null,
                propId: this.$store.getters.getProperty[0].id
            }
        },
        methods: {
            openAddModal(){
              this.$bvModal.show('add_guru')
            },
            addTeacher() {
                let formData = new FormData()
                formData.append('name', this.teacherName)
                formData.append('designation', this.designation)
                formData.append('qualification', this.qualification)
                formData.append('department', this.department)
                formData.append('experience', this.experience)
                if (this.image != null) {
                    formData.append('image', this.image)
                }
                formData.append('prop', this.$store.getters.getProperty[0].id)
                axios.post(api.addTeacher, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                }).then((res) => {
                    this.alert(res.data['message'], res.data['color'])
                    this.resetForm()
                    this.allTeachers()

                }).catch((err) => {
                    this.alert('There is some Problem with Server', 'success')
                    console.log(err)
                })
            },
            updateTeacher() {
                let formData = new FormData()
                formData.append('teacherId', this.selectedTeacherId)
                formData.append('name', this.teacherNameU)
                formData.append('designation', this.designationU)
                formData.append('qualification', this.qualificationU)
                formData.append('department', this.departmentU)
                formData.append('experience', this.experienceU)
                formData.append('prop', this.$store.getters.getProperty[0].id)
                if (this.imageU != null) {
                    formData.append('image', this.imageU)
                }
                axios.post(api.updateTeachers, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data;'
                    },
                }).then((res) => {
                    this.resetFormU()
                    this.alert(res.data['message'], res.data['color'])
                    this.allTeachers()

                }).catch((err) => {
                    this.alert('There is some Problem with Server', 'success')
                    console.log(err)
                })
            },
            alert(message, color) {
                this.$toasted.show(message, {
                    theme: 'outline',
                    position: 'top-center',
                    type: color,
                    icon: 'success',
                    duration: 2000
                });
            },
            teacherData(data) {
                this.selectedTeacherId = data.id
                this.teacherNameU = data.name
                this.departmentU = data.department
                this.designationU = data.designation
                this.qualificationU = data.qualification
                this.experienceU = data.experience
                this.showImageU = this.getTeacherPath(data.image + 'xl.webp')
            },
            allTeachers() {
                axios.get(api.teachers + this.$store.getters.getProperty[0].id + '/all')
                    .then((res) => {
                        this.teachers = res.data
                        this.dataLoading = false
                        console.log(res.data)
                    }).catch((err) => {
                    this.$store.commit('setLoading',false)
                    console.log(err)
                })
            },
            deleteTeacher(){
                axios.post(api.deleteTeacher,{
                    id: this.deletableTeacherId
                }).then((res) => {
                      this.allTeachers()
                        console.log(res)
                    }).catch((err) => {
                    this.$store.commit('setLoading',false)
                    console.log(err)
                })
            },
            imageShow(e) {
                this.showImage = URL.createObjectURL(e.target.files[0])
                this.image = e.target.files[0]
            },
            imageShowU(e) {
                this.showImageU = URL.createObjectURL(e.target.files[0])
                this.imageU = e.target.files[0]
            },
            resetForm() {
                this.teacherName = ""
                this.designation = ""
                this.qualification = ""
                this.department = ""
                this.experience = ""
                this.image = null
                this.showImage = ""
            },
            resetFormU() {
                this.teacherNameU = ""
                this.designationU = ""
                this.qualificationU = ""
                this.departmentU = ""
                this.experienceU = ""
                this.imageu = null
                this.showImageU = ""
            },
            getTeacherPath(data) {
                return config.apiUrl.propertyImage + this.propId + '/teacher/' + data
            }
        },
        mounted() {
            this.allTeachers()
        },
    }
</script>