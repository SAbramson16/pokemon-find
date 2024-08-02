import axios from 'axios';

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
    

export default { search }