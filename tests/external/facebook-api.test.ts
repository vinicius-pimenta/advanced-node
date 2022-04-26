import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: FacebookApi

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
  })

  it('should return a Facebook User if token is valid', async () => {
    const fbUser = await sut.loadUser({ token: 'EAANaXT8ZBhKQBAA5QmsBUvWNAqb4KVfyUpp5qMymXBahMZCGIgfjmghH7sAEFosRSZAWElzjgPnjcok8YLGZALF6d1UDP2b6AO9A9iBOZAOpJmCI3fZBhN9edNHVcahWjV3DhMZCfY51ZCf7LpeCBPdziqN9xbuqpKZB5tgRrNduMvZBnNdYTcsSu7TTHlxLvmQHExfdFovDfrD31igAMdKMzr' })

    expect(fbUser).toEqual({
      facebookId: '106876265345044',
      name: 'Vinicius Teste',
      email: 'vinicius_opafnfd_teste@tfbnw.net'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
