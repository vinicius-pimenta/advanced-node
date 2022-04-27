export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '943781469652132',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '3c7840a2f78abeb4c237520080cae545'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? '3jk24h32jk4h'
}
