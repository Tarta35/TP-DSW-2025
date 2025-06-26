import { Character } from "./character.entity.js";
const characters = [
    new Character('Darth Vader', 'Sith', 10, 100, 20, 10, ['Lightsaber', 'Death Star'], 'a02b91bc-3769-4221-beb1-d7a3aeba7dad'),
];
export class CharacterRepository {
    findAll() {
        return characters;
    }
    findOne(item) {
        return characters.find((character) => character.id === item.id);
    }
    add(item) {
        characters.push(item);
        return item;
    }
    update(item) {
        const characterIdx = characters.findIndex(Character => Character.id === item.id);
        if (characterIdx == -1) {
            characters[characterIdx] = { ...characters[characterIdx], ...item };
        }
        return characters[characterIdx];
    }
}
//# sourceMappingURL=character.repository.js.map