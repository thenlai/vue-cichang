import VueRouter from 'vue-router'

import Home from 'components/Home'
import Game from 'components/game/Game'
import GameMain from 'components/Game/GameMain'
import routerEditor from 'components/editor/router-editor'

const router = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    routerEditor,
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
