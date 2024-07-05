import { Location as LocationAPI, Character } from "../types.ts";

export const Location = {
    residents: async(
        parent: LocationAPI
    ): Promise<Array<Character>> => {
        const residents = await Promise.all(
            parent.residents.map(async(resident)=>{
                const char = await fetch(resident);
                return char.json();
            })
        );
        return residents;
    },
};