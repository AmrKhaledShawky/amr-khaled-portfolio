function SearchBar({ id, label, placeholder, value, onChange }) {
  return (
    <label className="search-bar" htmlFor={id}>
      <span className="screen-reader-only">{label}</span>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </label>
  );
}

export default SearchBar;
