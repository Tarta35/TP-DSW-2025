import express from 'express'
import { Character} from './character.js'

const app = express()

//character -> /api/characters/
//get -> /api/characters/ -> obtener la lista de character
//get -> /api/characters/:id -> obtener el character con id = :id
//post -> /api/characters/ -> crear nuevos character
//delete -> /api/characters/:id -> borrar characters con id = :id
//put & patch -> /api/characters/:id -> modificar character con id = :id

const characters= [
  new Character(
    'Darth Vader',
    'Sith',
    10,
    100,
    20,
    10,
    ['Lightsaber', 'Death Star'],

  ),
]

app.get('/api/characters', (req, res) => {
  res.json(characters)
})

app.use('/',(req, res) => {
  res.json( {message: '<h1>Hello!!</h1>'} )
})

app.listen(3000, () =>{
  console.log("Server running on http://localhost:3000/")
})