const { gql } = require('apollo-server-express')

module.exports = gql`
    type Cars {
        id:ID!
        name:String!
        price:String!
        type:String!
    }    

    type Query{
        cars(id:Int!):[Cars!]
    }

    type Mutation{
        newCar(name:String! price:String! type:String!):Cars
    }
`