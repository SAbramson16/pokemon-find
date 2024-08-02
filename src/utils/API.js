import axios from 'axios';
import levenshtein from 'js-levenshtein';

const search = async (query) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
};

const getAllPokemonNames = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
        return response.data.results.map(pokemon => pokemon.name);
    } catch (error) {
        console.error('Error fetching all Pokemon names:', error);
        throw error;
    }
};

const getSuggestions = (query, namesList) => {
    const suggestions = namesList
        .map(name => ({ name, distance: levenshtein(query.toLowerCase(), name) }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);
    return suggestions.map(suggestion => suggestion.name);      
};
    

export default { search, getAllPokemonNames, getSuggestions }