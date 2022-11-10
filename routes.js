import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import mailPage from './views/app-mail.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.js'
// import mailFolder from './apps/mail/pages/mail-folder.js'
import keepPage from './views/app-keep.cmp.js'
import noteDetails from './apps/keep/pages/note-details.cmp.js'

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
			path: '/mail/details/:id',
			component: mailDetails,
		},
		{
			path: '/mail/:folder',
			component: mailPage,
		},
		{
			path: '/keep',
			component: keepPage,
		},
		{
			path: '/note/:id',
			component: noteDetails
		},


	],
}

export const router = createRouter(routerOptions)
