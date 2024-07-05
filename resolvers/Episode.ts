import { Character, Episode as EpisodeAPI} from "../types.ts";

export const Episode = {
    characters: async(
        parent: EpisodeAPI
    ):Promise<Array<Character>> => {
        const characters = await Promise.all(
            parent.characters.map(async(character)=>{
                const char = await fetch(character);
                return char.json();
            })
        );
        return characters;
    },
}