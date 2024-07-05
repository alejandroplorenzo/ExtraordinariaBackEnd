import { Character } from "../types.ts";

export const Query = {
    
    character: async (
        _: unknown,
        args: {id: string}
    ):Promise<Character> => {
        const id = args.id;
        const character = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        return character.json();
    },

    charactersByIds: async(
        _: unknown,
        args: {ids: string[]}
    ):Promise<Array<Character>> => {
        const ids = args.ids;
        const characters = await fetch(`https://rickandmortyapi.com/api/character/${ids.toString()}`);

        return characters.json();
    }, 
};