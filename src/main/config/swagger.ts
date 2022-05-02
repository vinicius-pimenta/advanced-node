import swaggerConfig from '@/docs'
import { noCache } from '@/main/config/no-cache'
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export const setupSwagger = (app: Express): void => {
  app.use('/api-docs', noCache, serve, setup(swaggerConfig))
}
