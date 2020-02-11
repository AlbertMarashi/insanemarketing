import Vue from 'vue'
import VueRouter from 'vue-router'
import { group } from '@/assets/utils/routingUtils'
import graph from '@/assets/utils/graph'
import errorToString from '@/assets/utils/errorToString'

Vue.use(VueRouter)

let routes = [
    { path: '/', component: () => import('@/pages/home')},
    { path: '/*', component: () => import('@/templates/error')} //404
]

const router = new VueRouter({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes
})

router.beforeEach(async (to, from, next) => {
    if(!$state.user && to.matched.some(route => route.meta.auth)) {
        let { data, error } = await graph`
        message me {
            _id
            firstName
            lastName
            email
            displayPicture
            userReferralCount
        }`

        if(error) {
            if(!router.app.$isServer) $state.createAlert(errorToString(error), 'error')
            return next('/sign-in')
        }
        
        $state.user = data.me
    }

    next()
})

export default router
