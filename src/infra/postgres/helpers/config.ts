import { ConnectionOptions } from 'typeorm'

export const config: ConnectionOptions = {
  type: 'postgres',
  host: 'kesavan.db.elephantsql.com',
  port: 5432,
  username: 'grfifiqk',
  password: 'ehJgAr7vu32KBn3tXy95U0n8-h3EpzTE',
  database: 'grfifiqk',
  entities: ['dist/infra/postgres/entities/index.js']
}
