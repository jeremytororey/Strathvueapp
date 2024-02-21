import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Events from "./../components/Events.vue"
import Courses from "./../components/Courses.vue"
import ContactUs from "./../components/ContactUs.vue"
import AboutUs from "./../components/AboutUs.vue"
import Alumni from "./../components/Alumni.vue"
import Library from "./../components/Library.vue"
import Partnerships from "./../components/Partnerships.vue"

const routes = [
{
    path: '/',
    name: 'homepage',
    component: Homepage,
},
{
    path: '/events',
    name: 'events',
    component: Events,
},
{
    path: '/courses',
    name: 'courses',
    component:Courses,
},
{
    path: '/contactus',
    name: 'contactus',
    component: ContactUs,
},
{
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs,
},
{
    path: '/alumni',
    name: 'alumni',
    component: Alumni,
},
{
    path: '/library',
    name: 'library',
    component: Library,
},
{
    path: '/partneships',
    name: 'partnerships',
    component: Partnerships,
}, 
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router