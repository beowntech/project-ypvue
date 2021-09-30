<template>
    <div>
        <Breadcrumbs main="Info" title="Basic Info"/>
        <!-- Container-fluid starts-->
        <institute v-if="propertyType == 2"></institute>
        <individual v-if="propertyType == 5"></individual>
        <college v-if="propertyType == 3"></college>
    </div>
</template>
<script>
    import institute from "./components/institute";
    import Individual from "./components/individual";
    import College from "./components/college";

    export default {
        name: "info",
        data() {
            return {
                propertyType: this.$store.getters.getPropertyType
            }
        },
        watch:{
            '$store.state.propertyType':function () {
                this.propertyType = this.$store.getters.getPropertyType
            }
        },
        components: {
            College,
            Individual,
            institute,
        },
        beforeMount() {
            this.$store.commit('setLoading', true)
        },
    }
</script>
