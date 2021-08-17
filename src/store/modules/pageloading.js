const state = {
    loading: false,
};
const getters = {
    getLoading: (state) => {
        return state.loading;
    },
};

const mutations = {
    setLoading(state, data) {
        state.loading = data;
    },
};

export default {
    state,
    mutations,
    getters
}