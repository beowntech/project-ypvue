<template>
    <div>
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-12">
                    <div class="login-card">
                        <div>
                            <div>
                                <a class="logo">
                                    <img
                                            class="img-fluid for-light"
                                            src="../assets/images/logo/yp1.png"
                                            alt="looginpage"
                                            style="width: 30%;"
                                    />
                                    <img
                                            class="img-fluid for-dark"
                                            src="../assets/images/logo/yp1.png"
                                            alt="looginpage"
                                            style="width: 30%;"
                                    />
                                </a>
                            </div>
                            <div class="login-main login-form-card">
                                <b-form class="theme-form needs-validation" @submit="onCustomStyleSubmit">
                                    <h4>Create your account</h4>
                                    <p>Enter your personal details to create account</p>
                                    <div class="form-group">
                                        <label for="first_name">Name</label>
                                        <b-form-input type="text" id="first_name" v-model="userName"
                                                      :state="result.userName"
                                                      placeholder="Name"></b-form-input>
                                        <b-form-valid-feedback :state="result.userName">Please Provide your Name
                                        </b-form-valid-feedback>
                                    </div>
                                    <div class="form-group">
                                        <label for="userEmail">Email</label>
                                        <b-form-input type="text" id="userEmail" v-model="userEmail"
                                                      :state="result.userEmail"
                                                      placeholder="email@email.com"></b-form-input>
                                        <b-form-valid-feedback :state="result.userEmail">Please Enter your Email
                                        </b-form-valid-feedback>
                                    </div>
                                    <div class="form-group">
                                        <label for="userContact">Email</label>
                                        <b-form-input type="text" id="userContact" v-model="userContact"
                                                      :state="result.userContact"
                                                      placeholder="+91 Contact Number"></b-form-input>
                                        <b-form-valid-feedback :state="result.userContact">Please Enter your Contact
                                        </b-form-valid-feedback>
                                    </div>
                                    <div class="form-group">
                                        <label for="userPassword">Password</label>
                                        <b-form-input :type="typePassword" id="userPassword" v-model="userPassword"
                                                      :state="result.userPassword"
                                                      placeholder="************"></b-form-input>
                                        <div class="show-hide" @click="showPassword">
                                            <span class="show" v-if="typePassword == 'password'"></span>
                                            <span class="hide" v-if="typePassword == 'text'"></span>
                                        </div>
                                        <p class="text-danger"
                                           v-if="userPassword != null && userPassword.toString().length < 8">Password
                                            must be at
                                            least 8 Characters Long</p>
                                    </div>
                                    <div class="form-group" v-if="userPassword">
                                        <label for="confirmPassword">Confirm Password</label>
                                        <b-form-input type="password" id="confirmPassword" v-model="confirmPassword"
                                                      :state="result.confirmPassword"
                                                      placeholder="************"></b-form-input>
                                        <p class="text-danger" v-if="passwordConfirmed != null">{{!passwordConfirmed ? 'Password Does not Match':''}}</p>
                                    </div>
                                    <div class="form-group mb-0">
                                        <div class="checkbox p-0">
                                            <input id="checkbox1" type="checkbox">
                                            <label class="text-muted" for="checkbox1">Agree with
                                                <a class="ml-2" href="#">Privacy Policy</a></label>
                                        </div>
                                        <b-button variant="primary" style="width: 100%;" type="submit">Create Account
                                        </b-button>
                                    </div>
                                    <h6 class="text-muted mt-4 or">Or signup with</h6>
                                    <div class="social mt-4">
                                        <div class="btn-showcase">
                                            <a class="btn btn-light">
                                                <i class="fa fa-google txt-linkedin"></i>
                                                Google
                                            </a>
                                            <a class="btn btn-light">
                                                <feather type="twitter" class="txt-twitter"></feather>
                                                twitter</a>
                                            <a class="btn btn-light">
                                                <feather
                                                        type="facebook"
                                                        class="txt-fb"
                                                ></feather>
                                                facebook</a>
                                        </div>
                                    </div>
                                    <p class="mt-4 mb-0">Already have an account?
                                        <router-link class="ml-2" tag="a" :to="{ name: 'Login'}">
                                            Login
                                        </router-link>
                                    </p>
                                </b-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import axios from 'axios'
    export default {
        name: "registerComponent",
        data() {
            return {
                userName: null,
                userEmail: null,
                userContact: null,
                userPassword: null,
                confirmPassword: null,
                passwordConfirmed: null,
                result: {
                    userName: null,
                    userEmail: null,
                    userContact: null,
                },
                typePassword: 'password',
                progressValue: 0
            }
        },
        watch: {
            '$store.getters.getResponse': function() {
                if(this.$store.getters.getResponse){
                    this.$store.commit('setLoading', false)
                    this.alert('Registration Successful','success','success','top-center')
                    this.$router.push({name:'Login'})
                }
            },
            confirmPassword: function () {
                this.passwordConfirmed = this.confirmPassword === this.userPassword;
            },
            userPassword: function () {
                if (this.userPassword != null && this.userPassword != '') {
                    this.confirmPassword = null
                    this.passwordConfirmed = null
                }
                if (this.confirmPassword != null) {
                    this.passwordConfirmed = this.confirmPassword === this.userPassword;
                }
            }
        },
        methods: {
            alert(message, color, icon, position) {
                this.$toasted.show(message, {
                    theme: 'outline',
                    position: position,
                    type: color,
                    icon: icon,
                    duration: 2000
                });
            },
            onCustomStyleSubmit(evt) {
                evt.preventDefault()
                this.result.userName = this.userName != null && this.userName != '';
                this.result.userEmail = this.userEmail != null && this.userEmail != '';
                this.result.userContact = this.userContact != null && this.userContact != '';
                if(this.result.userName && this.result.userEmail && this.result.userContact){
                    this.registerUser()
                }
            },
            showPassword() {
                if (this.typePassword == 'text') {
                    this.typePassword = 'password'
                } else {
                    this.typePassword = 'text'
                }
            },
            registerUser(){
                this.$store.commit('setLoading', true)
                var data = {
                    name:this.userName,
                    email:this.userEmail,
                    contact:this.userContact,
                    password: this.userPassword
                };
                this.$store.dispatch('registerUser',data)
            }
        }
    }
</script>
<style scoped>
    .show-hide {
        top: 45px !important;
        right: 20px !important;
    }
</style>
