import Editor from 'components/editor'

const router = {
	mode: 'history',
	routes: [
		{
			path: '/editor', name: 'edit', component: Editor,
			children: {
				path: ':setId', name: 'editSet', component: EditSet
			}
		},
		{
			path: '/home', name: 'home', component: Home
		},
		{
			path: '/game', name: 'game', component: Game,
			children: {
				path: ':gameId', name: 'GameMain'
			}
		}
	]
}