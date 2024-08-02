import { useState, useEffect } from 'react';
import Card from '../src/components/UI/Card';
import SearchForm from '../src/components/SearchForm';
import PokemonDetail from '../src/components/PokemonDetail';
import API from '../src/utils/API';

const versionToGeneration = {
    "red": "Generation I",
    "blue": "Generation I",
    "yellow": "Generation I",
    "gold": "Generation II",
    "silver": "Generation II",
    "crystal": "Generation II",
    "ruby": "Generation III",
    "sapphire": "Generation III",
    "emerald": "Generation III",
    "fire-red": "Generation III",
    "leaf-green": "Generation III",
    "diamond": "Generation IV",
    "pearl": "Generation IV",
    "platinum": "Generation IV",
    "heart-gold": "Generation IV",
    "soul-silver": "Generation IV",
    "black": "Generation V",
    "white": "Generation V",
    "black-2": "Generation V",
    "white-2": "Generation V",
    "x": "Generation VI",
    "y": "Generation VI",
    "omega-ruby": "Generation VI",
    "alpha-sapphire": "Generation VI",
    "sun": "Generation VII",
    "moon": "Generation VII",
    "ultra-sun": "Generation VII",
    "ultra-moon": "Generation VII",
    "sword": "Generation VIII",
    "shield": "Generation VIII",
    "brilliant-diamond": "Generation VIII",
    "shining-pearl": "Generation VIII",
    "scarlet": "Generation IX",
    "violet": "Generation IX"
};

const PokemonContainer = () => {
    // Set state for the search result and the search query
    const [result, setResult] = useState(null);
    const [search, setSearch] = useState('');

    // When the search form is submitted, use the API.search method to search for the movie(s)
    const searchPokemon = async (query) => {
        try {
            const res = await API.search(query.toLowerCase());
            setResult(res);
            setSearch('')
        } catch (err) {
            console.error('Error fetching pokemon data:', err)
        }
    };

    useEffect(() => {
        searchPokemon('charmander');
    }, []);

    const handleInputChange = (e) => setSearch(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        searchPokemon(search);
    };

    const getGeneration = () => {
        if (result && result.game_indices.length > 0) {
            const firstGame = result.game_indices[0].version.name;
            return versionToGeneration[firstGame] || 'Unknown Generation';
        }
        return 'Unknown Generation'
    };

    // const {
    //     Id=0,
    //     Name = '',
    //     Type = '',
    //     Generation = '',
    // } = result;

    return (
        <>
            <Card heading={result ? result.name : 'Search for a Pokemon to begin!'}>
                {result ? (
                    <PokemonDetail
                        image={result.sprites.front_default}
                        name={result.name}
                        id={result.id}
                        type={result.types.map((typeInfo) => typeInfo.type.name).join(',')}
                        generation={getGeneration()}
                    />
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </Card>
            <Card>
                <SearchForm
                    value={search}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </Card>
        </>
    );
};       

export default PokemonContainer;