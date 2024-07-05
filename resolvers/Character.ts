import { Character as CharacterAPI, Episode, Location } from "../types.ts";

export const Character = {
    origin: async(
        parent: CharacterAPI
    ):Promise<Location | null> => {
        if(parent.origin){
            const origin = await fetch(parent.origin.url);
            return origin.json();
        }else{
            return null;
        }
    },

    location: async(
        parent: CharacterAPI
    ):Promise<Location> => {
        const location = await fetch(parent.location.url);
        return location.json();
    },

    episode: async(
        parent: CharacterAPI
    ): Promise<Array<Episode>> => {
        const episodes = await Promise.all(
            parent.episode.map(async(episode) =>{
                const epi = await fetch(episode);
                return epi.json();
            })
        );
        return episodes;
    },

};