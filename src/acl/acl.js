import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '../router/index'
import {store} from '../store/index'

Vue.use(AclInstaller)

let currentRole = 'editor';

let role = store.getters.getRole;
console.log(role)
if(role != null) currentRole = role

export default new AclCreate({
    initial: currentRole,
    notfound: {
        path: '/error',
        forwardQueryParams: true,
    },
    router,
    acceptLocalRules: true,
    globalRules: {
        public: new AclRule('editor').or('admin').or('super admin').or('user').generate(),
        editor: new AclRule('editor').generate(),
        user: new AclRule('user').generate(),
        admin: new AclRule('admin').generate(),
        multiple: new AclRule('editor').or('admin').generate(),
        superAdmin: new AclRule('super admin').generate(),
    },
    // middleware: async acl => {
    //     await timeout(2000) // call your api
    //     acl.change('admin')
    // }
})
