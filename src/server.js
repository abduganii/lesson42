const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')
const PORT = process.env.PORT || 5000

const modules=require('./modules')

const server = new ApolloServer({
    modules,
    introspection: true,
    playground:true
})

server.applyMiddleware({app})

app.listen({ port: PORT }, () => {
    console.log('http://localhost:5000'+server.graphqlPath)
    console.log('ws://localhost:5000'+server.subscriptionsPath)
})