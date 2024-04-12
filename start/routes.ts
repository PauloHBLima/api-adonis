/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MomentsController = () => import('#controllers/MomentsController')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', async () => {
      return {
        hello: 'one piece exist !',
      }
    })

    router.post('/moments', [MomentsController, 'store'])
  })
  .prefix('/api')
