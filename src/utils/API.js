import axios from 'axios';

const search = async (query) =>
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);

export default { search }