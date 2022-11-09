import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import mailPage from './views/app-mail.cmp.js'
import keepPage from './views/app-keep.cmp.js'
import noteDetails from '../apps/keep/pages/note-details.cmp.js'
import noteEdit from '../apps/keep/pages/note-edit.cmp.js'


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
			path: '/keep',
			component: keepPage,
		},
		{
			path: '/keep/note:id',
			component: noteDetails
		},
		{
			path: '/keep/note/edit/:id',
			component: noteEdit
		},

	],
}

export const router = createRouter(routerOptions)
