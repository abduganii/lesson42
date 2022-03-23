const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')

const modules=require('./modules')

const server = new ApolloServer({
    modules
})

server.applyMiddleware({app})

app.listen({ port: 5000 }, () => {
    console.log('http://localhost:5000'+server.graphqlPath)
    console.log('ws://localhost:5000'+server.subscriptionsPath)
})