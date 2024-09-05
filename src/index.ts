import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api', (c) => {
  return c.json({ message: 'Hello Hono API!' })
})

app.get('/test', (c) => {
  return c.json({ message: 'This is a test' })
})

app.get('/api/hello/:name', (c) => {
  const { name } = c.req.param()
  return c.text(`Hello ${name}!`)
})

export default app
