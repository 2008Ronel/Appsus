import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import misterEmail from './views/mister-email.cmp.js'

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
		// {
		// 	path: '/missKeep',
		// 	component: ,
		// },
		{
			path: '/misterEmail',
			component: misterEmail,
		},
	],
}

export const router = createRouter(routerOptions)
