import "../style/SearchBar.css"

const SearchBar = () => {
  return (
    <div className="input-group search-bar col-12">
      <div className="form-outline">
        <input type="search" id="form1" className="form-control" />
        <label className="form-label" htmlFor="form1">
          Search
        </label>
      </div>
      <button type="button" className="btn btn-primary">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar