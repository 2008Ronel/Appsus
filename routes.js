import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import misterEmail from './views/mister-email.cmp.js'
import missKeep from './views/keep-app.cmp.js'
const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: homePage,
		},
		{
			path: '/about',
			component: aboutPage,
		},
		{
			path: '/missKeep',
			component: missKeep,
		},
		{
			path: '/misterEmail',
			component: misterEmail,
		},
	],
}

export const router = createRouter(routerOptions)
