const state = {
    userToken: null,
    userRole: 'public',
    userEmail: null,
    userName: null
};
const getters = {
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
    }
};

const mutations = {
    logoutUser(state) {
        state.userToken = null;
        state.userRole = null;
        state.email = null;
        state.userName = null;
    },
    userToken(state, userId) {
        state.userToken = userId;
    },
    userRole(state, role) {
        state.userRole = role;
    },
    userName(state, name) {
        state.userName = name;
    },
    userEmail(state, email) {
        state.userEmail = email;
    }
};

export default {
    state,
    mutations,
    getters
}