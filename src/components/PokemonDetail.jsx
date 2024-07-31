function PokemonDetail(props) {
    return (
      <div className="text-center">
        <img
          alt={props.title}
          className="img-fluid"
          src={props.src}
          style={{ margin: '0 auto' }}
        />
        <h3>Name: {props.name}</h3>
        <h3>Type: {props.type}</h3>
        
      </div>
    );
  }
  
  export default PokemonDetail;
  