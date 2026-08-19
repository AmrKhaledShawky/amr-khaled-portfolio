function FilterBar({ filters, options, onFilterChange, onReset }) {
  return (
    <div className="filter-bar" aria-label="Writeup filters">
      {options.map((option) => (
        <label className="filter-field" key={option.name}>
          <span>{option.label}</span>
          <select
            value={filters[option.name]}
            onChange={(event) => onFilterChange(option.name, event.target.value)}
          >
            <option value="">All {option.label}</option>
            {option.values.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      ))}

      <button className="secondary-button" type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default FilterBar;
