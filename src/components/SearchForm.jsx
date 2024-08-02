function SearchForm(props) {
    return (
      <form className="mb-10 ml-7">
        <div className="search-form">
          <label htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="mb-4 outline outline-gray-400 pl-2"
            placeholder="Search For a Pokemon"
            id="search"
          />
          <br />
          <button
            onClick={props.handleFormSubmit}
            className="bg-blue-600 rounded-lg p-1"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;
  