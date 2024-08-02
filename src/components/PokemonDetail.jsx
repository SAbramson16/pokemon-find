function PokemonDetail({id, name, type, generation, image }) {
    return (
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-4 text-3xl">{id}: {name}</h1>
        <img className="w-40 h-40" src={image} alt={name}></img>
        <h3 className="mb-2">Type(s): {type}</h3>
        <h2>{generation}</h2>
      </div>
    );
  }
  
  export default PokemonDetail;
  