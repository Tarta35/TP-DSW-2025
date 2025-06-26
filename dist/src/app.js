import express from 'express';
import { Character } from './character/character.entity.js';
const app = express();
app.use(express.json());
//user --> request --> express --> (middleware que forme el req.body) express.json() --> app.post (req.body) --> response --> user
//character -> /api/characters/
//get -> /api/characters/ -> obtener la lista de character
//get -> /api/characters/:id -> obtener el character con id = :id
//post -> /api/characters/ -> crear nuevos character
//delete -> /api/characters/:id -> borrar characters con id = :id
//put & patch -> /api/characters/:id -> modificar character con id = :id
const characters = [
    new Character('Darth Vader', 'Sith', 10, 100, 20, 10, ['Lightsaber', 'Death Star'], 'a02b91bc-3769-4221-beb1-d7a3aeba7dad'),
];
function sanitizeCharacterInput(req, res, next) {
    req.body.sanitizedInput = {
        name: req.body.name,
        characterClass: req.body.characterClass,
        level: req.body.level,
        hp: req.body.hp,
        mana: req.body.mana,
        attack: req.body.attack,
        items: req.body.items,
    };
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
app.get('/api/characters', (req, res) => {
    res.json(characters);
});
app.get('/api/characters/:id', (req, res) => {
    const character = characters.find((character) => character.id === req.params.id);
    if (!character) {
        res.status(404).send({ message: 'Character Not Found' });
    }
    res.json({ data: character });
});
app.post('/api/characters', sanitizeCharacterInput, (req, res) => {
    const input = req.body.sanitizedInput;
    const character = new Character(input.name, input.characterClass, input.level, input.hp, input.mana, input.attack, input.items);
    characters.push(character);
    res.status(201).send({ message: 'Character created', data: character });
});
app.put('/api/characters/:id', sanitizeCharacterInput, (req, res) => {
    const characterIdx = characters.findIndex(Character => Character.id === req.params.id);
    if (characterIdx === -1) {
        res.status(404).send({ message: 'Character not found' });
    }
    characters[characterIdx] = { ...characters[characterIdx], ...req.body.sanitizedInput };
    res.status(200).send({ message: 'Character updated successfully', data: characters[characterIdx] });
});
app.patch('/api/characters/:id', sanitizeCharacterInput, (req, res) => {
    const characterIdx = characters.findIndex(Character => Character.id === req.params.id);
    if (characterIdx === -1) {
        res.status(404).send({ message: 'Character not found' });
    }
    characters[characterIdx] = { ...characters[characterIdx], ...req.body.sanitizedInput };
    res.status(200).send({ message: 'Character updated successfully', data: characters[characterIdx] });
});
app.delete('/api/characters/:id', (req, res) => {
    const characterIdx = characters.findIndex((Character) => Character.id === req.params.id);
    if (characterIdx === -1) {
        res.status(404).send({ message: 'Character not found' });
    }
    else {
        characters.splice(characterIdx, 1);
        res.status(200).send({ message: 'Character deleted succesfully' });
    }
});
app.use((req, res) => {
    res.status(404).send({ message: 'Resource not found' });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
//# sourceMappingURL=app.js.map