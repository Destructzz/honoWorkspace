import { serve } from '@hono/node-server'
import app from './app.js'


const port = 4497

serve({
  fetch: app.fetch,
  port: port
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
