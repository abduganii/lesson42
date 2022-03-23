const { fetch, fetchAll } = require('../../lib/postgres')

const CARS = `
    select 
        * 
    from 
        cars
`
const CARBYID = `
    select 
        * 
    from 
        cars
    where 
        car_id = $1   
`

const newcar = `
    insert into 
    cars(
        car_name,
        car_price,
        car_type
    )    
    values($1,$2,$3)
    returning *
`

const getCars = () => fetchAll(CARS)
const newCar = (name, price, type) => fetch(newcar, name, price, type)
const carbyId = (id)=>fetch(CARBYID,id)

module.exports = {
    getCars,
    newCar,
    carbyId
}