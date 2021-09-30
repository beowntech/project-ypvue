<template>
  <div>
    <!-- page-wrapper Start-->
    <div class="container-fluid p-0">
      <b-progress class="sm-progress-bar" striped animated :value="progressValue" :max="100" variant="primary" ></b-progress>

      <div class="row m-0">
        <div class="col-12 p-0">
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
              <form class="theme-form">
                          <h4>Sign in to account</h4>
                          <p>Enter your email & password to login</p>
                          <div class="form-group">
                            <label class="col-form-label">Email Address</label>
                            <input
                              v-model="email"
                              class="form-control"
                              type="email"
                              required=""
                              ref="emailInput"
                              placeholder="Test@gmail.com"
                              v-on:keyup.enter="loginUser"
                              :class="{
                                'is-invalid': submitted && !email,
                              }"
                            />
                            <div
                              v-show="submitted && !email"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="col-form-label">Password</label>
                            <input
                              v-model="password"
                              autocomplete=""
                              class="form-control"
                              :type="type"
                              name="login[password]"
                              v-on:keyup.enter="loginUser"
                              required=""
                              placeholder="*********"
                              :class="{
                                'is-invalid': submitted && !email,
                              }"
                            />
                            <div
                              v-show="submitted && !password"
                              class="invalid-feedback"
                            >
                              Email is required
                            </div>
                            <div class="show-hide" @click="showPassword">
                              <span class="show"></span>
                            </div>
                          </div>
                          <div class="form-group mb-0">
                            <div class="checkbox p-0">
                              <input id="checkbox1" type="checkbox" />
                              <label class="text-muted" for="checkbox1"
                                >Remember password</label
                              >
                            </div>
                            <button
                              class="btn btn-primary btn-block"
                              type="button"
                              @click="loginUser"
                            >
                              Login
                            </button>
                          </div>
                          <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                          <div class="social mt-4">
                            <div class="btn-showcase">
                              <a class="btn btn-light" @click="socialLogin">
                                <i class="fa fa-google txt-linkedin"></i>
                                Google
                              </a>
                              <a
                                class="btn btn-light"
                                @click="socialLoginTwitter"
                              >
                                <feather
                                  type="twitter"
                                  class="txt-twitter"
                                ></feather
                                >twitter</a
                              >
                              <a
                                class="btn btn-light"
                                @click="socialLoginFacebook"
                              >
                                <feather
                                  type="facebook"
                                  class="txt-fb"
                                ></feather
                                >facebook</a
                              >
                            </div>
                          </div>
                          <p class="mt-4 mb-0">
                            Don't have account?
                            <router-link class="ml-2" tag="a" :to="{name: 'Register'}" >
                            Create Account
                          </router-link>
                          </p>
                        </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- latest jquery-->
  </div>
</template>

<script>
import firebase from "firebase";
import Userauth from "../auth/js/index";
import axios from 'axios';
import apiUrl from '../_helpers/apiUrls';
export default {
  name: "login",
  data() {
    return {
      type: "password",
      email: "",
      password: "",
      username: "",
      passwordjwt: "",
      submitted: false,
      progressValue: 0
    };
  },
  computed: {
    // JWT authentication
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    },
  },
  created() {
    // reset login status for JWT
    this.$store.dispatch("authentication/logout");
  },
  mounted() {
    this.$refs.emailInput.focus()
  },
  methods: {
    // JWT authentication
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;
      const { username, passwordjwt } = this;
      const { dispatch } = this.$store;
      if (username && passwordjwt) {
        dispatch("authentication/login", { username, passwordjwt });
      }
    },
    loginUser(){
      this.progressValue = 50
      axios.post(apiUrl.login, {
        email: this.email,
        password: this.password
      }).then((res) => {
        if (res.data.success == true) {
          this.progressValue = 100
          this.alert('Logged In Successfully','success','success','top-center')
          this.$store.commit('userToken', res.data.token)
          this.$store.commit('userName', res.data.user)
          this.$store.commit('userEmail', res.data.email)
          this.$store.commit('userEmailVerified', res.data.email_verified_at)
          this.$store.commit('userRole', res.data.roles[0].toLowerCase())
          console.log(res.data)
          this.$acl.change(res.data.roles[0].toLowerCase())
          // console.log(this.$acl.)
          if(res.data.roles[0].toLowerCase() == "editor") {
            this.$router.replace('/admin/properties')
          }else if(res.data.roles[0].toLowerCase() == "admin"){
            this.$router.replace('/admin/properties')
          }else if(res.data.roles[0].toLowerCase() == "super admin"){
            this.$router.replace('/admin/dashboard')
          }
        }else{
          this.progressValue = 0
          this.alert('Login or Password is Incorrect','danger','danger','top-center')
        }
      }).catch((err) => {
        this.progressValue = 0
        this.alert('There is Some Problem with Server','danger','danger','top-center')
        console.log(err)
      })
    },
    // show/hide password
    showPassword: function () {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    // Firebase login
    signUp: function () {
      this.submitted = true;
      if (this.email == "" && this.password == "") {
        (this.email = "test@admin.com"), (this.password = "test@123456");
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            (result) => {
              Userauth.localLogin(result);
              this.$router.replace("/");
            },
            (err) => {
              (this.email = "test@admin.com"), (this.password = "test@123456");
              this.$toasted.show("Oops..." + err.message, {
                theme: "bubble",
                position: "bottom-right",
                type: "error",
                duration: 2000,
              });
            }
          );
      }
    },
    // Social login
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          Userauth.localLogin(result);
          this.$router.replace("/");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
    socialLoginFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          Userauth.localLogin(result);
          this.$router.replace("/");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
    socialLoginTwitter() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          Userauth.localLogin(result);
          this.$router.replace("/");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
    socialLoginGit() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          Userauth.localLogin(result);
          this.$router.replace("/");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
    alert(message, color, icon, position) {
      this.$toasted.show(message, {
        theme: 'outline',
        position: position,
        type: color,
        icon: icon,
        duration: 2000
      });
    },
    // Auth0 login
    login() {
      Userauth.login();
    },
  },
};
</script>