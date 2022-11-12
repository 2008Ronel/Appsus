import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import misterEmail from './views/mister-email.cmp.js'
import missKeep from './views/keep-app.cmp.js'
import emailDetails from './apps/misterEmail/cmps/email-details.cmp.js'
import bookApp from './apps/Ex/js/views/book-app.cmp.js'
import bookHomePage from './apps/Ex/js/views/home-page.cmp.js'
import bookAboutPage from './apps/Ex/js/views/about-page.cmp.js'
import bookDetails from './apps/Ex/js/views/book-details.cmp.js'

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
		{
			path: '/misterEmail/:id',
			component: emailDetails,
		},
		{
			path: '/bookApp',
			component: bookHomePage
		},
		{
			path: '/bookApp/book',
			component: bookApp
		},
		{
			path: '/bookApp/book/:id',
			component: bookDetails
		},
		{
			path: '/bookApp/about',
			component: bookAboutPage
		},

	],
}

export const router = createRouter(routerOptions)
