import SearchIcon from "./SearchIcon.jsx";

const FormSearch = () => {
  return (
    <form className="form-search">
      <label className="form-search__label sr-only">Search</label>
      <input
        className="form-search__control"
        type="text"
        placeholder="Search sneakers"
        aria-label="Type to search"
      />
      <button
        className="form-search__action"
        type="submit"
        aria-label="Click here to search"
      >
        <SearchIcon className="form-search__icon" />
      </button>
    </form>
  );
};

export default FormSearch;
