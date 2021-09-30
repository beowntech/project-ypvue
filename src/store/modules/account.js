import axios from "axios";
import apiUrls from "../../_helpers/apiUrls";

export const account = {
    namespaced: false,
    state: {
        userToken: null,
        userRole: null,
        userEmail: null,
        userName: null,
        userEmailVerified: null,
        responseStatus: null
    },
    getters: {
        getToken: (state) => {
            return state.userToken;
        },
        getRole: (state) => {
            return state.userRole;
        },
        getName: (state) => {
            return state.userName;
        },
        getEmail: (state) => {
            return state.userEmail;
        },
        getResponse: (state) =>{
            return state.responseStatus
        },
        getUserVerify: (state) => {
            return state.userEmailVerified
        }
    },
    actions: {
        registerUser({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post(apiUrls.register, data, {})
                    .then((response) => {
                        commit('USER_REGISTER', response.data)
                        resolve(response)
                    }).catch((error) => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        logoutUser(state) {
            state.userToken = null;
            state.userRole = null;
            state.email = null;
            state.userName = null;
        },
        userToken(state, userId) {
            state.userToken = userId;
        },
        USER_REGISTER(state, status) {
            state.responseStatus = status;
        },
        userRole(state, role) {
            state.userRole = role;
        },
        userName(state, name) {
            state.userName = name;
        },
        userEmail(state, email) {
            state.userEmail = email;
        },
        userEmailVerified(state, value) {
            state.userEmailVerified = value;
        }
    },
}