import axios from 'axios'
import apiUrls from "../../_helpers/apiUrls";

export const search = {
    namespaced: true,
    state: {
        searchList: []
    },
    actions: {
        fetchSearch({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post(apiUrls.searchProperty,data,{})
                    .then((response) => {
                        commit('SET_LIST', response.data)
                        resolve(response)
                    }).catch((error) => {
                    reject(error)
                })
            })
        },
        modalSearch({commit}, data) {
            return new Promise((resolve, reject) => {
                axios.post(apiUrls.searchAll, {
                    data: data
                }).then((response) => {
                    commit('SET_LIST', response.data)
                    resolve(response)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        SET_LIST(state, list) {
            state.searchList = list
        },
        REMOVE_LIST(state) {
            state.searchList = []
        }
    }
}