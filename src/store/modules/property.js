const state = {
    propertyId: null,
    propertyName: null,
    propertyAddress: {},
    propertyLogo: null,
    propertyFeatured: null
};
const getters = {
    getProperty: (state) => {
        if (state.propertyId != null) {
            const data = [{
                'id': state.propertyId,
                'name': state.propertyName,
                'location': state.propertyAddress,
                'logo': state.propertyLogo,
                'featured': state.propertyFeatured
            }]
            return data;
        }
        return [];
    },
    getImage: (state) => {
        if (state.propertyId != null) {
            const data = [{
                'logo': state.propertyLogo,
                'featured': state.propertyFeatured
            }]
            return data;
        }
    }
};

const mutations = {
    removeProperty(state) {
        state.propertyId = null
        state.propertyName = null
        state.propertyAddress = null
        state.propertyLogo = null
        state.propertyFeatured = null
    },
    setProperty(state, prop) {
        state.propertyId = prop.id;
        state.propertyName = prop.name;
        state.propertyLogo = prop.gallery != null ? prop.gallery.logo : null
        state.propertyFeatured = prop.gallery != null ? prop.gallery.featured_image : null
        state.propertyAddress = prop.location != null ? prop.location : null
    },
    setLogo(state, prop) {
        state.propertyLogo = prop
    },
    setFeatured(state, prop) {
        state.propertyFeatured = prop
    },
};

export default {
    state,
    mutations,
    getters
}