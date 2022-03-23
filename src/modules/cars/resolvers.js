const {getCars,newCar,carbyId} = require('./model')

module.exports = {
    Query:{
        cars: async (_, { id }) => {                
            try {
                if (id) {
                    return await [carbyId(id)]
                }
                return await getCars()
            } catch (error) {
                    console.log(error)
                }
            }
    },
    Mutation:{
        newCar: async(_, { name, price, type }) => {
            try {
                return await newCar(name, price, type)
            } catch (error) {
                console.log(error)
            }
        }  
    },
    
    Cars: {
        id:global=> global.car_id,
        name:global=> global.car_name,
        price: global => global.car_price,
        type: global => global.car_type
    }
}