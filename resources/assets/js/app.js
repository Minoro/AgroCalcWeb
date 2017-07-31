
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Pulverizador from './components/Pulverizador';
import About from './components/About';

Vue.component('about', require('./components/About.vue'));
Vue.component('pulverizador', require('./components/Pulverizador.vue'));
Vue.component('navigation', require('./components/Navigation.vue'));
Vue.component('material-select', require('./components/form/input/MaterialSelect.vue'));
Vue.component('input-field', require('./components/form/input/InputField.vue'));




Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		component: Pulverizador
	},
	{
		path: '/about',
		component: About
	}
];

const router = new VueRouter({
	routes
});

const app = new Vue({
    el: '#app',
    router
});
