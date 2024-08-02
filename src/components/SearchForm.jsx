function SearchForm(props) {
    return (
      <form>
        <div className="search-form">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="searchh-field"
            placeholder="Search For a Pokemon"
            id="search"
          />
          <br />
          <button
            onClick={props.handleFormSubmit}
            className="search-button"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;
  