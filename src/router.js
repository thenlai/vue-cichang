import VueRouter from 'vue-router'

import Home from 'components/Home'
import Editor from 'components/editor/Editor'
import EditSet from 'components/editor/EditSet'
import Game from 'components/game/Game'
import GameMain from 'components/Game/GameMain'

const router = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/editor',
      name: 'edit',
      component: Editor,
      children: [
        {
          path: ':setId',
          name: 'editSet',
          component: EditSet
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
      children: [
        {
          path: ':gameId',
          name: 'GameMain',
          component: GameMain
        }
      ]
    }
  ]
}

export default new VueRouter(router)
