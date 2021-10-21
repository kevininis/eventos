import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

Vue.use(VueRouter)

//IMPORTACION DE LAS VISTAS 
import ListEvent from './views/ListEvent'
import DetailEvent from './views/DetailEven'

//RUTAS 
const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path : '/',
            component : ListEvent
        },
        {
            path : '/DetailEvent/:SlugOrganizer/:SlugEvent',
            component : DetailEvent
        }
    ]
})

export default router;