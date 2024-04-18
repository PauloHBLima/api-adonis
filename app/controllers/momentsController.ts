import Moment from '#models/moment'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MomentsController {
  async store({ request, response }: HttpContexContract) {
    const body = request.body()
    const moment = await Moment.create(body)
    response.status(201)
    return { message: 'Momento criado com sucesso!', data: moment }
  }
}
