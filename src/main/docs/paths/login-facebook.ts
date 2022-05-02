export const loginFacebook = {
  post: {
    tags: ['Login com Facebook'],
    summary: 'Autenticar usuário com Facebook',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/inputLoginFacebook'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      }
    }
  }
}
