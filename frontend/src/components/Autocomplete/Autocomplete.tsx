import React, { useEffect, useRef, useState } from "react";
import { AutocompleteProps, Country } from "../../interfaces";
import { search } from "../../services/countryApi";
import "./Autocomplete.css";

const Autocomplete = (props: AutocompleteProps) => {
  const [searching, setSearching] = useState<boolean>(false);
  const [results, setResults] = useState<Country[]>([]);
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearching(true);
    setQuery(e.target.value);
  };

  const handleResultClick = (country: Country) => {
    setSearching(false);
    setQuery(country.name);
    props.onChange(country);
  };

  const handleClear = () => {
    setSearching(false);
    setQuery("");
    props.onChange(null);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (query === "" || !searching) {
      setResults([]);
      return;
    }

    search(query)
      .then((data: Country[]) => {
        setResults(data);
      })
      .catch(() => setResults([]));
  }, [query, searching]);

  return (
    <div className="App">
      <div className="Autocomplete">
        <div className="Autocomplete__Label">{props.label}</div>

        <input
          className="Autocomplete__Input"
          value={query}
          onChange={handleChange}
          ref={inputRef}
        />
        {!searching && query && (
          <span className="Autocomplete__Clear" onClick={handleClear}>
            <i className="gg-close"></i>
          </span>
        )}
        {searching && results.length > 0 && (
          <div className="Autocomplete__Results">
            {results.map((country: Country) => (
              <div
                key={country.country}
                className="Autocomplete__ResultItem"
                onClick={() => handleResultClick(country)}
              >
                {country.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
