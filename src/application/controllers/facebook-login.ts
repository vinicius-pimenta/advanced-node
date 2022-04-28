import { HttpResponse, unauthorized, ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { FacebookAuthentication } from '@/domain/features'
import { AccessToken } from '@/domain/entities'

type HttpRequest = {
  token: string
}

type Model = Error | {
  accessToken: string
}

export class FacebookLoginController extends Controller {
  constructor (private readonly facebookAuthentication: FacebookAuthentication) {
    super()
  }

  async perform ({ token }: HttpRequest): Promise<HttpResponse<Model>> {
    const accessToken = await this.facebookAuthentication.perform({ token })
    return accessToken instanceof AccessToken
      ? ok({ accessToken: accessToken.value })
      : unauthorized()
  }

  override buildValidators ({ token }: HttpRequest): Validator[] {
    const validators = Builder
      .of({ value: token, fieldName: 'token' })
      .required()
      .build()
    return [...validators]
  }
}
