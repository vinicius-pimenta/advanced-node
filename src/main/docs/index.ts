import { loginFacebook } from '@/main/docs/paths/login-facebook'
import { outputLoginFacebook } from '@/main/docs/schemas/output-login-facebook'
import { inputLoginFacebook } from '@/main/docs/schemas/input-login-facebook'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Advanced Node API',
    description: 'API do curso do Mango para realizar login com Facebook',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login com Facebook'
  }],
  paths: {
    '/login/facebook': loginFacebook
  },
  schemas: {
    account: outputLoginFacebook,
    inputLoginFacebook: inputLoginFacebook
  }
}
