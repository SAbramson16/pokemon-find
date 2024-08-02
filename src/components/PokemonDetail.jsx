function PokemonDetail({id, name, type, generation, image }) {
    return (
      <div className="text-center">
        <h1>{id}: {name}</h1>
        <img src={image} alt={name}></img>
        <h3>Type: {type}</h3>
        <h2>Generation: {generation}</h2>
      </div>
    );
  }
  
  export default PokemonDetail;
  