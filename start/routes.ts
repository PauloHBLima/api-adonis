const MomentsController = () => import('#controllers/momentsController')
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
