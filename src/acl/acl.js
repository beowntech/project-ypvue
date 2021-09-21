import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '../router/index'
import {store} from '../store/index'

Vue.use(AclInstaller)

let currentRole = 'public';

let role = store.getters.getRole;
if(role != null) currentRole = role
console.log(currentRole)

export default new AclCreate({
    initial: currentRole,
    notfound: {
        path: '/auth/login',
    },
    router,
    acceptLocalRules: true,
    globalRules: {
        editor: new AclRule('editor').generate(),
        user: new AclRule('user').generate(),
        admin: new AclRule('admin').generate(),
        multiple: new AclRule('editor').or('admin').generate(),
        superAdmin: new AclRule('super admin').generate(),
        public: new AclRule('editor').or('admin').or('public').or('super admin').or('user').generate(),
        dashboard: new AclRule('editor').or('admin').or('dashboard').or('super admin').or('user').generate(),
    },
    // middleware: async acl => {
    //     await timeout(2000) // call your api
    //     acl.change('admin')
    // }
})
