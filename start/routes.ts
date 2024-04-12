/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Route from '@adonisjs/core/services/router'

Route.group(() => {
  Route.get('/', async () => {
    return {
      hello: 'one piece exist !',
    }
  })
}).prefix('/api')
