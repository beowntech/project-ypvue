import axios from 'axios'
import apiUrls from "../../_helpers/apiUrls";

export const course = {
    namespaced: true,
    state: {
        courses: [],
    },
    actions: {
        fetchCourses({commit}) {
            return new Promise((resolve, reject) => {
                axios.post(apiUrls.courseList)
                    .then((response) => {
                        commit('SET_STATE', response.data)
                        resolve(response)
                    }).catch((error) => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        SET_STATE(state, list) {
            state.courses = list
        },
        REMOVE_STATE(state) {
            state.courses = []
        },
    }
}