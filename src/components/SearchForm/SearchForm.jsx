
const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Search movies"
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;