import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import mailPage from './views/app-mail.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.js'
import keepPage from './views/keep-app.cmp.js'
import keepDetails from './views/keep-details.cmp.js'
import keepEdit from './views/keep-edit.cmp.js'


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
			path: '/mail',
			component: mailPage,
		},
		{
			path: '/mail/:id',
			component: mailDetails,
		},
		{
			path: '/keep',
			component: keepPage,
		},
		{
			path: '/keep/:id',
			component: keepDetails
		},
		{
			path: '/keep/edit/:id?',
			component: keepEdit
		},

	],
}

export const router = createRouter(routerOptions)
