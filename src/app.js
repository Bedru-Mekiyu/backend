import express from 'express'
const app=express()

app.use(express.json())

import userRouter from '../src/routes/user.route.js'
import postRouter from '../src/routes/post.route.js'

app.use('/api/v1/users',userRouter)
app.use('/api/v1/posts',postRouter)



export default app;