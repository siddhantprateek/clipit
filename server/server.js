
const express = require('express')
const app = express()
const PORT = process.env.PORT | 4000


const middleware = (req, res, next) => {
    console.log('middleware')
    // to exit middleware loading, next is called after the middleware is called.
    next()
}

app.use(middleware)
app.get('/', (req, res) => {
    res.send('Server running')
})

app.listen(PORT, () => {
    console.log('server running at http://localhost:4000')
})