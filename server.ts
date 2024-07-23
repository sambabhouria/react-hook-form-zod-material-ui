import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
/**
 * Error: Cannot find module 'json-server'
 *  "json-server": "^1.0.0-alpha.22" qui fout le borderl
 * example of put patch delete
 * https://medium.com/@deepaktailor2305/how-to-use-get-post-put-delete-http-request-in-express-js-2c6743c23e89
 */
import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
dotenv.config()
server.use(middlewares)
server.use((req: Request, res: Response, next) => {
  setTimeout(next, 500)
})
server.use(router)
const app: Express = express()
app.use(server)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
