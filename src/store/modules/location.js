import axios from 'axios'
import apiUrls from "../../_helpers/apiUrls";

export const location = {
    namespaced: true,
    state: {
        states: [],
        cities: [],
        countries: [],
        response: false,
    },
    actions: {
        fetchState({commit}) {
            return new Promise((resolve, reject) => {
                axios.get(apiUrls.stateAll)
                    .then((response) => {
                        commit('SET_STATE', response.data)
                        resolve(response)
                    }).catch((error) => {
                    reject(error)
                })
            })
        },
        addState({commit},data) {
            console.log(data)
           axios.post(apiUrls.addState, {
                    name: data[0].name,
                    image: data[0].image,
                    icons: data[0].icon,
                    country_id: data[0].parent,
                    status: 1,
                }).then((response) => {
                    console.log(response)
                    commit('SET_RESPONSE',true)
                }).catch(() => {

                })
        },
        addCity({commit},data) {
            axios.post(apiUrls.addCity, {
                name: data[0].name,
                image: data[0].image,
                icons: data[0].icon,
                state_id: data[0].parent,
                status: 1,
            }).then((response) => {
                console.log(response)
                commit('SET_RESPONSE',true)
            }).catch(() => {

            })
        },
        fetchCity({commit}) {
            return new Promise((resolve, reject) => {
                axios.get(apiUrls.cityAll)
                    .then((response) => {
                        commit('SET_CITY', response.data)
                        resolve(response)
                    }).catch((error) => {
                    reject(error)
                })
            })
        },
        fetchCountry({commit}) {
            return new Promise((resolve, reject) => {
                axios.get(apiUrls.countriesAll)
                    .then((response) => {
                        commit('SET_COUNTRY', response.data)
                        resolve(response)
                    }).catch((error) => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        SET_STATE(state, list) {
            state.states = list
        },
        SET_CITY(state, list) {
            state.cities = list
        },
        SET_COUNTRY(state, list) {
            state.countries = list
        },
        SET_RESPONSE(state, data) {
            state.response = data
        },
        REMOVE_ALL(state) {
            state.states = []
            state.cities = []
            state.countries = []
        },
        REMOVE_STATE(state) {
            state.states = []
        },
        REMOVE_CITIES(state) {
            state.cities = []
        },
        REMOVE_COUNTRIES(state) {
            state.countries = []
        },
    }
}