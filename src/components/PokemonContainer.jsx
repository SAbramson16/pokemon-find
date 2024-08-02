// import { useState, useEffect } from 'react';
// import Card from './UI/Card';
// import SearchForm from './SearchForm';
// import PokemonDetail from './PokemonDetail';
// import API from '../utils/API';

// const PokemonContainer = () => {
//     // Set state for the search result and the search query
//     const [result, setResult] = useState({});
//     const [search, setSearch] = useState('');

//     // When the search form is submitted, use the API.search method to search for the movie(s)
//     const searchPokemon = (query) =>
//         API.search(query)
//             .then((res) => {
//                 setResult(res.data)
//                 setSearch('')
//             })
//             .catch((err) => console.log(err));

//     useEffect(() => {
//         searchPokemon('Charmander');
//     }, []);

//     const handleInputChange = (e) => setSearch(e.target.value);

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         searchPokemon(search);
//     };

//     const {
//         Name = '',
//         Type = '',
//         Generation = '',
//         SpecialMove = '',
//     } = result;

//     return (
//         <>
//             <Card heading={Name || 'Search for a Pokemon to begin!'}>
//                 {Name ? (
//                     <PokemonDetail
//                         name={Name}
//                         type={Type}
//                         generation={Generation}
//                         specialMove={SpecialMove}
//                     />
//                 ) : (
//                     <h3>No Results to Display</h3>
//                 )}
//             </Card>
//             <Card>
//                 <SearchForm
//                     value={search}
//                     handleInputChange={handleInputChange}
//                     handleFormSubmit={handleFormSubmit}
//                 />
//             </Card>
//         </>
//     );
// };       

// export default PokemonContainer;