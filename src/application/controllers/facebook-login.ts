import { HttpResponse, unauthorized, ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { ValidationBuilder as Builder, Validator } from '@/application/validation'
import { FacebookAuthentication } from '@/domain/use-cases'

type HttpRequest = { token: string }
type Model = Error | { accessToken: string, email: string, name: string }

export class FacebookLoginController extends Controller {
  constructor (private readonly facebookAuthentication: FacebookAuthentication) {
    super()
  }

  async perform ({ token }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.facebookAuthentication({ token })
      return ok(accessToken)
    } catch {
      return unauthorized()
    }
  }

  override buildValidators ({ token }: HttpRequest): Validator[] {
    const validators = Builder
      .of({ value: token, fieldName: 'token' })
      .required()
      .build()
    return [...validators]
  }
}
