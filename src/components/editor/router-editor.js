import Editor from './Editor'
// book
import Book from './Book'
import BookNew from './BookNew'
// import BookInfo from './BookInfo'

import EditList from './EditList'
import EditSet from './EditSet'

export default {
  path: '/editor',
  name: 'edit',
  component: Editor,
  children: [
    {
      path: '',
      name: 'editList',
      component: EditList
    },
    {
      path: 'book',
      name: 'book',
      component: Book,
      children: [
        {
          path: 'new',
          name: 'bookNew',
          component: BookNew
        }
      ]
    },
    {
      path: ':setId(\\d+)',
      name: 'editSet',
      component: EditSet
    }
  ]
}
