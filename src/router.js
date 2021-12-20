import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login  from './pages/Login';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            component: Home,
        },
         {
            path: '/cadastro',
            component: Cadastro,
        },
        {
            path: '/login',
            component: Login,
         }


    ]
});

export default router;