import { Moment } from 'App/Models/Moment';
import { v4 as uuidv4 } from 'uuid'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from '#models/moment'

import { Application } from '@adonisjs/core/Application'

export default class MomentsController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }
  async store({ request, response }: HttpContexContract) {
    const body = request.body()

    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })
      body.image = imageName
    }
    const moment = await Moment.create(body)
    response.status(201)
    return { message: 'Momento criado com sucesso!', data: moment }
  }

  public async index() {
    const moments = await Moment.all()
    return {
      data.Moments
    }
  }
}
